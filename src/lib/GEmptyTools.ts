/**
 * 空类型判断，如：null和undefined
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */
import GStringTools from "./GStringTools";

export default class GEmptyTools {

    /**
     * 判断类型是否为null
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isNull(value: any): boolean {
        if (Object.prototype.toString.call(value) === "[object Null]") {
            return true;
        }

        return false;
    }

    /**
     * 字符串转null类型
     * @param value
     * @return 如果成功返回null,失败返回空字符串
     * @deprecated 已作废，请使用2.0工具
     */
    public static valueOfForNull(value: string): null | "" {
        if (GStringTools.isBlank(value)) {
            return "";
        }

        if (value.toUpperCase() === "NULL") {
            return null;
        }

        return "";
    }

    /**
     * 判断类型是否为undefined
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isUndefined(value: any): boolean {
        if (Object.prototype.toString.call(value) === "[object Undefined]") {
            return true;
        }

        return false;
    }

    /**
     * 字符串转undefined类型
     * @param value
     * @return 成功返回undefiend， 失败返回null
     * @deprecated 已作废，请使用2.0工具
     */
    public static valueOfForUndefined(value: string): undefined | null {
        if (GStringTools.isBlank(value)) {
            return null;
        }

        if (value.toUpperCase() === "UNDEFINED") {
            return undefined;
        }

        return null;
    }
}
