/**
 *
 * Boolean工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */
import GStringTools from "./GStringTools";

export default class GBooleanTools {
    /**
     * 字符串转boolean
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static valueOf(value: string): boolean | null {
        if (GStringTools.isBlank(value)) {
            return null;
        }

        switch (value.toUpperCase()) {
            case 'TRUE':
                return true;
            case 'FALSE':
                return false;
            default:
                return null;
        }
    }

    /**
     * 布尔类型转字符串
     * @param value
     * @return {string} false | true
     * @deprecated 已作废，请使用2.0工具
     */
    public static toString(value: boolean): 'false' | 'true' {

        return value ? 'true' : 'false';
    }

    /**
     * 判断是否boolean类型
     * @param value
     * @returns {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isBoolean(value: any): boolean  {
        if (Object.prototype.toString.call(value) === '[object Boolean]') {
            return true;
        }

        return false;
    }

    /**
     * 判断是否为true
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isTrue(value: any): boolean {
        return this.isBoolean(value) && value === true;
    }

    /**
     * 判断是否false
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isFalse(value: any): boolean {
        return !this.isTrue(value);
    }
}
