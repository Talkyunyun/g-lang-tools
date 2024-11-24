import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import Net from "./lib/Net";
import TokenAbort from "./lib/TokenAbort";
import {GTypes} from "../type";

export default class NetClient {
    private static INSTANCE: NetClient;
    private static AXIOS: AxiosInstance;

    /**
     * 支持方法列表
     */
    public static METHOD = GTypes.NetMethodTypes;

    /**
     * 构造器，必须私有，保证单例
     * @private
     */
    private constructor(config: AxiosRequestConfig) {
        NetClient.AXIOS = axios.create(config);

        // 请求头统一处理
        NetClient.AXIOS.interceptors.request.use((config) => {
            config.params = {...config.params};
            return config;
        });
    }

    /**
     * 实例获取方法
     * @return HttpUtils
     */
    public static getInstance(config: AxiosRequestConfig) {
        if (NetClient.INSTANCE) {
            return NetClient.INSTANCE;
        }

        return NetClient.INSTANCE = new NetClient(config);
    }

    /**
     * 获取原生axios对象
     * 该对象暴露主要提供使用方自定义全局拦截器等操作
     */
    public static getAxios() {
        return NetClient.AXIOS;
    }

    /**
     * 清除所有请求
     */
    public static cancelAllRequests(): void {
        TokenAbort.cleanAll();
    }

    /**
     * 创建请求对象
     */
    public createNet(): Net {
        return new Net(NetClient.AXIOS);
    }
}
