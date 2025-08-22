import StringUtils from "./StringUtils";
import AbstractUtils from "./AbstractUtils";
import {DataTypes} from "../types";

/**
 *
 * Undefined tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class UndefinedUtils extends AbstractUtils {

    /**
     * 判断对象是否为undefined
     * @param value
     */
    public static isUndefined(value: any): boolean {
        return this.isType(value, DataTypes.Variable.UNDEFINED);
    }

    /**
     * 获取undefined字符串
     */
    public static toString(): string {
        return "undefined";
    }

    /**
     * 字符串转undefined
     * @param value
     */
    public static toUndefined(value: string): undefined | null {
        if (!StringUtils.isString(value)) {
            return null;
        }

        if (value.toLowerCase() === "undefined") {
            return undefined;
        }

        return null;
    }
}
