
/**
 *
 * Encryption and decryption tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
import CryptoJS from 'crypto-js';
export default class EncryptUtils {

    /**
     * sha1
     * @param content
     */
    public static sha1(content: any) {
        return CryptoJS.SHA1(content).toString();
    }

    /**
     * 获取md5值
     * @param content
     */
    public static md5(content: any) {
        return CryptoJS.MD5(content).toString();
    }

    /**
     * MAP对象签名
     * @param params
     * @param secret
     */
    public static sign(params: Map<string, string>, secret: string = ""): string {
        return this.signForObject(Array.from(params).reduce(function(data: Record<string, string>, [key, value]) {
            data[key] = value;

            return data;
        }, {}), secret);
    }

    /**
     * object对象签名
     * @param params
     * @param secret
     */
    public static signForObject(params: Record<string, string>, secret: string = ""): string {
        const data: Record<string, any> = {};
        const keys: string[] = Object.keys(params).sort();
        for (const key of keys) {
            data[key] = params[key];
        }

        let content = secret;
        for (const key in data) {
            content += key + data[key];
        }
        content += secret;

        return this.md5(content).toUpperCase();
    }

    /**
     * 生成唯一值
     * @returns {string}
     */
    public static getUniqueValue() {
        const date = new Date();
        const year = date.getFullYear();
        const month= this.preFixZero(date.getMonth() + 1);
        const day  = this.preFixZero(date.getDate());
        const hour = this.preFixZero(date.getHours());
        const min  = this.preFixZero(date.getMinutes());
        const sec  = this.preFixZero(date.getSeconds());
        const ms   = date.getMilliseconds();

        return `${String(year).substring(2, 4)}${month}${day}${hour}${min}${sec}${ms}${this.randomNumber(10)}`;
    }

    /**
     * 不满两位补'0'
     * @param n
     * @returns {string}
     * @private
     */
    private static preFixZero(n: any): any {
        n = n.toString();
        // @ts-ignore
        return n[1] ? n : '0' + n;
    }

    /**
     * 随机生成N位数字
     * @param n
     * @returns {null|number}
     * @private
     */
    private static randomNumber(n: number): any {
        if (n > 21) {
            return null;
        }

        return parseInt(String((Math.random() + 1) * Math.pow(10, n - 1)));
    }
}
