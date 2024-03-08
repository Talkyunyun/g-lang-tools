/**
 * 加密和签名工具
 *
 * @author  : Gene Yang <729170207@qq.com>
 * @date    : 2019/06/01
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */
export default class GEncryptTools {

    /**
     * 获取唯一su参数
     * @returns {string}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getUniqueSu() {
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
