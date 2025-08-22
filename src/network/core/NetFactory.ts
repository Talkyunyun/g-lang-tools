import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import TokenAbort from "./TokenAbort";
import NetClient from "./NetClient";

/**
 * 请求工厂类
 * 请求对象创建工厂
 */
export default class NetFactory {
    private static instance: NetFactory;
    private static axios: AxiosInstance;

    /**
     * 构造器，必须私有，保证单例
     * @private
     */
    private constructor(config?: AxiosRequestConfig) {
        NetFactory.axios = axios.create(config as any);
    }

    /**
     * 实例获取方法
     * @return HttpUtils
     */
    public static getInstance(config: AxiosRequestConfig) {
        if (this.instance) {
            return this.instance;
        }

        return this.instance = new NetFactory(config);
    }

    /**
     * 获取原生axios对象
     * 该对象暴露主要提供使用方自定义全局拦截器等操作
     */
    public static getAxios() {
        return this.axios;
    }

    /**
     * 取消所有请求
     */
    public static cancelAllRequests(): void {
        TokenAbort.cleanAll();
    }

    /**
     * 创建请求对象
     */
    public createClient(): NetClient {
        return new NetClient(NetFactory.axios);
    }
}
