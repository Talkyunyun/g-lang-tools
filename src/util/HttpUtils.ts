/**
 *
 * Http tools
 *
 * 网络请求库
 * 注意事项：
 *   1、在一段时间内，如果对path、get和body参数相同的请求发起请求时，如果存在未响应的，上一次的请求会自动被取消掉(如果希望不被限制，可以更改get或body中的参数不一致即可)
 *   2、如果有一个接口识别到未登录时，其他发起的接口会被自动取消掉。
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
import Qs from "qs";
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, Canceler} from 'axios';
import EncryptUtils from "./EncryptUtils";
import DateUtils from "./DateUtils";
import NetworkError from "../error/NetworkError";
import {GTypes} from "../type";

export interface IHttpConfig {
    /**
     * 请求基础地址
     */
    baseURL: string;

    /**
     * 请求超时时间
     */
    timeout: number;

    /**
     * 文件上传超时时间
     */
    fileUploadTimeout: number;

    /**
     * 签名密钥
     */
    signSecret ?: string;

    /**
     * 相同的请求是否需要取消
     */
    sameRequestCancel?: boolean;
}

export default class HttpUtils {
    private static INSTANCE: HttpUtils;
    private static AXIOS: AxiosInstance;
    private static CANCEL_TOKENS: Map<string, Canceler>;
    private static CONFIG: IHttpConfig;

    /**
     * 构造器，必须私有，保证单例
     * @private
     */
    private constructor() {
        HttpUtils.CANCEL_TOKENS = new Map<string, Canceler>();
        HttpUtils.AXIOS = axios.create({
            baseURL: HttpUtils.CONFIG.baseURL,
            timeout: HttpUtils.CONFIG.timeout,
            withCredentials: true
        });

        // 请求头统一处理
        HttpUtils.AXIOS.interceptors.request.use((config) => {
            config.params = {
                ...config.params,
                _su : EncryptUtils.getUniqueValue(),
                _t  : DateUtils.getCurrentTimestamp(true),
            };
            config.params._sign = EncryptUtils.signForObject(config.params, HttpUtils.CONFIG.signSecret);

            return config;
        });
    }

    /**
     * 实例获取方法
     * @return HttpUtils
     */
    public static getInstance(config: IHttpConfig) {
        if (HttpUtils.INSTANCE) {
            return HttpUtils.INSTANCE;
        }

        HttpUtils.CONFIG = config;
        return HttpUtils.INSTANCE = new HttpUtils();
    }

    /**
     * 获取axios对象
     * 业务可自行扩展操作
     */
    public static getAxios() {
        return HttpUtils.AXIOS;
    }

    /**
     * GET请求
     * @param url 地址
     * @param params get参数
     * @throws NetworkError
     */
    public get<T>(url: string, params: Record<string, any> = {}): Promise<T> {
        return this.request(GTypes.NetMethodTypes.GET, url, {params});
    }

    /**
     * delete请求
     * @param url
     * @param params
     */
    public delete<T>(url: string, params: Record<string, any> = {}): Promise<T> {
        return this.request(GTypes.NetMethodTypes.DELETE, url, {params});
    }

    /**
     * delete请求
     * @param url
     * @param body
     * @param params
     */
    public deleteByJson<T>(url: string, body: Record<string, any>, params: Record<string, any> = {}): Promise<T> {
        return this.request(GTypes.NetMethodTypes.DELETE, url, {
            params, data: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    /**
     * POST普通请求
     * @param url 地址
     * @param body body参数
     * @param params get参数
     * @throws NetworkError
     */
    public post<T>(url: string, body: Record<string, any> = {}, params: Record<string, any> = {}): Promise<T> {
        return this.request(GTypes.NetMethodTypes.POST, url, {params, data: Qs.stringify(body)});
    }

    /**
     * POST-JSON请求
     * @param url 地址
     * @param body body参数
     * @param params get参数
     * @throws NetworkError
     */
    public postByJson<T>(url: string, body: Record<string, any> = {}, params: Record<string, any> = {}): Promise<T> {
        return this.request(GTypes.NetMethodTypes.POST, url, {
            params, data: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    /**
     * put普通请求
     * @param url 地址
     * @param body body参数
     * @param params get参数
     * @throws NetworkError
     */
    public put<T>(url: string, body: Record<string, any> = {}, params: Record<string, any> = {}): Promise<T> {
        return this.request(GTypes.NetMethodTypes.PUT, url, {params, data: Qs.stringify(body)});
    }

    /**
     * putByJson请求
     * @param url 地址
     * @param body body参数
     * @param params get参数
     * @throws NetworkError
     */
    public putByJson<T>(url: string, body: Record<string, any> = {}, params: Record<string, any> = {}): Promise<T> {
        return this.request(GTypes.NetMethodTypes.PUT, url, {
            params, data: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    /**
     * 文件上传
     * @param url 地址
     * @param body body参数
     * @param params get参数
     * @throws NetworkError
     */
    public postFile<T>(url: string, body: any = {}, params: Record<string, any> = {}): Promise<T> {
        return this.request(GTypes.NetMethodTypes.POST, url, {
            timeout: HttpUtils.CONFIG.fileUploadTimeout,
            params, data: body,
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }

    /**
     * 请求唯一出口
     * @param method 请求方法
     * @param url 地址
     * @param config 配置
     * @throws NetworkError
     * @private
     */
    private request<T>(method: GTypes.NetMethodTypes, url: string, config?: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            try {
                const requestConfig: AxiosRequestConfig = {method, url, ...config};
                const cancelToken = axios.CancelToken;
                const source = cancelToken.source();
                const key: string = HttpUtils.getRequestKey(method, url, config?.params, config?.data);

                // 如果有相同的请求正在进行，取消上一个请求
                if (HttpUtils.CONFIG.sameRequestCancel && HttpUtils.CANCEL_TOKENS.has(key)) {
                    const canceler = HttpUtils.CANCEL_TOKENS.get(key);
                    if (canceler) { canceler(); }
                }
                HttpUtils.CANCEL_TOKENS.set(key, source.cancel);
                requestConfig.cancelToken = source.token;
                HttpUtils.AXIOS.request(requestConfig).then((response) => {
                    if (!response.data) {
                        throw new Error("The response body content is empty");
                    }

                    resolve(response.data);
                }).catch((error: AxiosError) => {
                    if (axios.isCancel(error)) {
                        return;
                    // @ts-ignore
                    } else if (error.response && error.response.status !== 200) {
                        // @ts-ignore
                        reject(new NetworkError(true, error.response.status, error))
                    }

                    reject(new NetworkError(false, undefined, error))
                }).finally(() => {
                    HttpUtils.CANCEL_TOKENS.delete(key);
                });
            } catch (e) {
                reject(new NetworkError(false, undefined, e))
            }
        });
    }

    /**
     * 取消所有请求
     */
    public static cancelAllRequests(): void {
        HttpUtils.CANCEL_TOKENS.forEach((cancel) => {
            cancel();
        });

        HttpUtils.CANCEL_TOKENS = new Map<string, Canceler>();
    }

    /**
     * 获取请求对象唯一Key
     * @param method 请求方法
     * @param url 地址
     * @param params get参数
     * @param body body参数
     * @private
     */
    private static getRequestKey(method: string, url: string, params: any, body: any) {
        try {
            let content = `${method}:${url}:${JSON.stringify(params)}`;
            if (body instanceof FormData) {
                // @ts-ignore
                for (const [key, value] of body.entries()) {
                    if (value instanceof File) {
                        content += `${key}=${value.name}`;
                    } else {
                        content += `${key}=${value}`;
                    }
                }
            }

            return EncryptUtils.md5(content);
        } catch (e) {
            console.warn("Failed to obtain the unique Key of the request. err:", e);
        }

        return EncryptUtils.md5(`${method}:${url}:${EncryptUtils.getUniqueValue()}`);
    }
}
