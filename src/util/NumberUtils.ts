import Parent from "./Parent";
import {GTypes} from "../type";

/**
 *
 * Number tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class NumberUtils extends Parent{

    /**
     * 判断类型是否为数字
     * @param value
     */
    public static isNumber(value: any): boolean {
        return this.isType(value, GTypes.VarTypes.NUMBER);
    }

    /**
     * number转字符串
     * @param value
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
     */
    public static toNumber(value: any): number | undefined {
        const num = Number(value);
        if (isNaN(num)) {
            return undefined;
        }

        return num;
    }

    /**
     * 按千分位进行格式化显示
     * 如: 12343 -> 12,343
     * @param value
     * @returns {string}
     */
    public static formatMilli(value: any): string {
        const number = this.toNumber(value);
        if (number === undefined) {
            return "0";
        }

        return number.toLocaleString();
    }

    /**
     * 判断值是否大于0
     * @param value
     * @return {boolean}
     */
    public static isGtZero(value: number): boolean {
        return this.isNumber(value) && value > 0;
    }

    /**
     * 判断值是否大于登录0
     * @param value
     * @return {boolean}
     */
    public static isGtAndEqZero(value: number): boolean {
        return this.isNumber(value) && value >= 0;
    }

    /**
     * 判断值是否登录0
     * @param value
     * @return {boolean}
     */
    public static isEqZero(value: number): boolean {
        return this.isNumber(value) && value == 0;
    }

    /**
     * 判断值是否小于0
     * @param value
     * @return {boolean}
     */
    public static isLtZero(value: number): boolean {
        return this.isNumber(value) && value < 0;
    }

    /**
     * 判断值是否小于等于0
     * @param value
     * @return {boolean}
     */
    public static isLtAndEqZero(value: number): boolean {
        return this.isNumber(value) && value <= 0;
    }
}
