/**
 * Cookie工具
 *
 * @author  : Gene Yang <729170207@qq.com>
 * @date    : 2019/06/01
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */
import GStringTools from "./GStringTools";

export default class GCookieTools {

    /**
     * 作用域名范围[默认当前顶级域名]
     * @private
     */
    private static DOMAIN: string | null = null;

    /**
     * 设置作用域名
     * @param domain
     * @deprecated 已作废，请使用2.0工具
     */
    public static setDomain(domain: string) {
        if (!GStringTools.isBlank(domain)) {
            this.DOMAIN = domain;
        }

        return this;
    }

    /**
     * 设置值
     * @param key
     * @param value
     * @param expires
     * @deprecated 已作废，请使用2.0工具
     */
    public static set(key: string, value: any, expires: number = 5) {
        const date = new Date();
        date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));

        document.cookie = `${key}=${value};expires=${date.toUTCString()};path=/;domain=${this.getDomain()}`;
    }

    /**
     * 获取值
     * @param key
     * @returns {string}
     * @deprecated 已作废，请使用2.0工具
     */
    public static get(key: string) {
        const newName = `${key}=`;
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(newName) !== -1) {
                return c.substring(newName.length, c.length);
            }
        }

        return '';
    }

    /**
     * 根据name删除cookie
     * @param key
     * @deprecated 已作废，请使用2.0工具
     */
    public static remove(key: string) {
        this.set(key, '', -1);
    }

    /**
     * 清除所有cookie
     * @returns {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static removeAll() {
        const self = this;
        const keys = document.cookie.match(/[^ =;]+(?==)/g);
        if (!keys) { return true; }

        for (let i = 0, len = keys.length; i < len; i++) {
            self.remove(keys[i]);
        }

        return true;
    }

    /**
     * 获取作用域名
     * @return {string}
     * @private
     */
    private static getDomain(): string {
        if (GStringTools.isBlank(this.DOMAIN)) {
            return window.location.hostname.substring(window.location.hostname.indexOf('.'));
        }

        // @ts-ignore
        return this.DOMAIN;
    }
}
