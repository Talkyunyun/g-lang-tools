/**
 *
 * Number工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */

export default class GNumberTools {

    /**
     * number转字符串
     * @param value
     * @deprecated 已作废，请使用2.0工具
     */
    public static toString(value: number) {
        if (isNaN(value)) {
            return "";
        }

        return "" + value;
    }

    /**
     * 其他对象转number
     * 注意：处理布尔类型true转1外，其他非数字的都返回0
     * @param value
     * @return {number}
     * @deprecated 已作废，请使用2.0工具
     */
    public static toNumber(value: any): number | null {
        const num = Number(value);
        if (isNaN(num)) {
            return null;
        }

        return num;
    }

    /**
     * 按千分位进行格式化显示
     * 如: 12343 -> 12,343
     * @param value
     * @returns {string}
     * @deprecated 已作废，请使用2.0工具
     */
    public static formatMilli(value: any): string {
        const number = this.toNumber(value);
        if (number === null) {
            return "0";
        }

        return number.toLocaleString();
    }

    /**
     * 判断是否number类型
     * 注意，NaN也会当成非number来对待
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isNumber(value: any): boolean {
        if (Object.prototype.toString.call(value) !== '[object Number]') {
            return false;
        }

        if (isNaN(value)) {
            return false
        }

        return true;
    }

    /**
     * 判断值是否大于0
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isGtZero(value: number): boolean {
        return this.isNumber(value) && value > 0;
    }

    /**
     * 判断值是否大于登录0
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isGtAndEqZero(value: number): boolean {
        return this.isNumber(value) && value >= 0;
    }

    /**
     * 判断值是否登录0
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isEqZero(value: number): boolean {
        return this.isNumber(value) && value == 0;
    }

    /**
     * 判断值是否小于0
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isLtZero(value: number): boolean {
        return this.isNumber(value) && value < 0;
    }

    /**
     * 判断值是否小于等于0
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isLtAndEqZero(value: number): boolean {
        return this.isNumber(value) && value <= 0;
    }
}
