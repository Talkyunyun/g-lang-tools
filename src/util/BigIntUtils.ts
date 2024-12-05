import Parent from "./Parent";
import {GTypes} from "../type";
import BooleanUtils from "./BooleanUtils";

/**
 * Big Int tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class BigIntUtils extends Parent {

    /**
     * 判断类型是否为数字
     * @param value
     */
    public static isBigInt(value: any): boolean {
        return this.isType(value, GTypes.VarTypes.BIG_INT);
    }

    /**
     * number转字符串
     * @param value
     */
    public static toString(value: bigint) {
        return "" + value;
    }

    /**
     * 其他对象转number
     * 注意：处理布尔类型true转1外，其他非数字的都返回0
     * @param value
     * @return {number}
     */
    public static toBigInt(value: any): bigint | undefined {
        if (BooleanUtils.isBoolean(value)) {
            return value ? BigInt(1) : BigInt(0);
        }

        return BigInt(value);
    }

    /**
     * 按千分位进行格式化显示
     * 如: 12343 -> 12,343
     * @param value
     * @returns {string}
     */
    public static formatMilli(value: any): string {
        const number = this.toBigInt(value);
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
    public static isGtZero(value: bigint): boolean {
        return this.isBigInt(value) && value > 0;
    }

    /**
     * 判断值是否大于登录0
     * @param value
     * @return {boolean}
     */
    public static isGtAndEqZero(value: bigint): boolean {
        return this.isBigInt(value) && value >= 0;
    }

    /**
     * 判断值是否登录0
     * @param value
     * @return {boolean}
     */
    public static isEqZero(value: bigint): boolean {
        return this.isBigInt(value) && value == BigInt(0);
    }

    /**
     * 判断值是否小于0
     * @param value
     * @return {boolean}
     */
    public static isLtZero(value: bigint): boolean {
        return this.isBigInt(value) && value < 0;
    }

    /**
     * 判断值是否小于等于0
     * @param value
     * @return {boolean}
     */
    public static isLtAndEqZero(value: bigint): boolean {
        return this.isBigInt(value) && value <= 0;
    }
}
