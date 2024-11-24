import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";
import NetworkError from "../../error/NetworkError";
import TokenAbort from "./TokenAbort";
import Qs from "qs";
import {GTypes} from "../../type";

export default class Net {
    private readonly token: string;
    private axiosInstance: AxiosInstance;
    private config: AxiosRequestConfig = {
        method: "GET"
    };

    public constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
        const abortController = new AbortController();
        this.token = TokenAbort.generateToken();
        this.config.signal = abortController.signal;
        TokenAbort.setToken(this.token, abortController);
    }

    public setTimeout(timeout: number) {
        this.config.timeout = timeout;
        return this;
    }

    public setUrl(url: string) {
        this.config.url = url;
        return this;
    }

    public setMethod(method: GTypes.NetMethodTypes) {
        this.config.method = GTypes.NetMethodTypes[method];
        return this;
    }

    public setBody(body: any) {
        this.config.data = body;
        return this;
    }

    public setFormBody(body: Record<string, any>) {
        this.setBody(Qs.stringify(body));
        return this;
    }

    public setJsonBody(body: Record<string, any>) {
        this.addHeader('Content-Type', 'application/json');
        this.setBody(JSON.stringify(body));
        return this;
    }

    public setQuery(params: Record<string, any>) {
        this.config.params = params;
        return this;
    }

    public setHeader(headers: Record<string, any>) {
        this.config.headers = headers;
        return this;
    }

    public addHeader(key: string, value: any) {
        const headers: Record<string, any> = {...this.config.headers};
        headers[key] = value;
        this.config.headers = headers;
        return this;
    }

    public getToken() {
        return this.token;
    }

    public cancel() {
        TokenAbort.cancel(this.token);
    }

    public send<T>(): Promise<T> {
        return new Promise((resolve, reject) => {
            try {
                this.axiosInstance.request(this.config).then((response) => {
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
                    TokenAbort.removeToken(this.token);
                });
            } catch (e) {
                reject(new NetworkError(false, undefined, e))
            }
        });
    }
}
