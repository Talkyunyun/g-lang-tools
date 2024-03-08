import Parent from "./Parent";
import StringUtils from "./StringUtils";
import {VAR_TYPE_ENUM} from "../enum";

/**
 *
 * Null tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class NullUtils extends Parent{

    /**
     * 判断类型是否为null类型
     * @param value
     */
    public static isNull(value: any): boolean {
        return this.isType(value, VAR_TYPE_ENUM.NULL);
    }

    /**
     * 获取null类型字符串
     */
    public static toString(): string {
        return "null";
    }

    /**
     * 字符串转Null
     * @param value
     */
    public static toNull(value: string): null | undefined {
        if (!StringUtils.isString(value)) {
            return undefined;
        }

        if (value.toLowerCase() === "null") {
            return null;
        }

        return undefined;
    }
}
