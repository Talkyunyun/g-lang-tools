/**
 *
 * Cookie tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-08 10:58
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
import StringUtils from "./StringUtils";
export default class CookieUtils {
    private static INSTANCE: CookieUtils;

    /**
     * 作用域名范围[默认当前顶级域名]
     * @private
     */
    private domain?: string;

    private constructor() {}
    public static getInstance(): CookieUtils {
        if (CookieUtils.INSTANCE) {
            return CookieUtils.INSTANCE;
        }

        return CookieUtils.INSTANCE = new CookieUtils();
    }

    /**
     * 设置作用域名
     * @param domain
     */
    public setDomain(domain: string) {
        if (!StringUtils.isBlank(domain)) {
            this.domain = domain;
        }

        return this;
    }

    /**
     * 设置值
     * @param key
     * @param value
     * @param expires
     */
    public set(key: string, value: any, expires: number = 5) {
        const date = new Date();
        date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));

        document.cookie = `${key}=${value};expires=${date.toUTCString()};path=/;domain=${this.getDomain()}`;
    }

    /**
     * 获取值
     * @param key
     * @returns {string}
     */
    public get(key: string) {
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
     */
    public remove(key: string) {
        this.set(key, '', -1);
    }

    /**
     * 清除所有cookie
     * @returns {boolean}
     */
    public removeAll() {
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
    private getDomain(): string {
        if (!this.domain || StringUtils.isBlank(this.domain)) {
            return window.location.hostname.substring(window.location.hostname.indexOf('.'));
        }

        return this.domain;
    }
}
