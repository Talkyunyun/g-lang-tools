import {GDateUtils, GEncryptUtils} from "../../index";
import EncryptUtils from "../../util/EncryptUtils";

export default class TokenAbort {
    private static TOKENS: Map<string, AbortController> = new Map<string, any>();

    /**
     * 生成token
     */
    public static generateToken(): string {
        return GEncryptUtils.md5(EncryptUtils.getUniqueValue() + GDateUtils.getCurrentTimestamp(true));
    }

    /**
     * 设置token
     * @param token
     * @param canceler
     */
    public static setToken(token: string, canceler: AbortController): void {
        TokenAbort.TOKENS.set(token, canceler);
    }

    /**
     * 移除token
     * @param token
     */
    public static removeToken(token: string): void {
        TokenAbort.TOKENS.delete(token);
    }

    /**
     * 判断token是否存在
     * @param token
     */
    public static hasToken(token: string): boolean {
        return TokenAbort.TOKENS.has(token);
    }

    /**
     * 取消请求
     * @param token
     */
    public static cancel(token: string) {
        try {
            const canceler = TokenAbort.TOKENS.get(token);
            if (canceler) {
                canceler.abort();
            }
        } catch (e) {}

        TokenAbort.removeToken(token);
    }

    /**
     * 清除所有请求
     */
    public static cleanAll() {
        TokenAbort.TOKENS.forEach((canceler) => {
            canceler.abort();
        });

        TokenAbort.TOKENS = new Map<string, AbortController>();
    }
}
