import StringUtils from "./StringUtils";
import AbstractUtils from "./AbstractUtils";
import {DataTypes} from "../types";

/**
 *
 * Boolean tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class BooleanUtils extends AbstractUtils {
    /**
     * 判断值是否为boolean类型
     * @param value
     */
    public static isBoolean(value: any): boolean {
        return this.isType(value, DataTypes.Variable.BOOLEAN);
    }

    /**
     * boolean转字符串
     * @param value
     */
    public static toString(value: boolean): DataTypes.Boolean {
        return value ? DataTypes.Boolean.TRUE : DataTypes.Boolean.FALSE;
    }

    /**
     * 字符串boolean转boolean类型
     * @param value
     */
    public static toBoolean(value: string): boolean | undefined {
        if (StringUtils.isBlank(value)) {
            return undefined;
        }

        switch (value.toLowerCase()) {
            case DataTypes.Boolean.TRUE:
                return true;
            case DataTypes.Boolean.FALSE:
                return false;
        }

        return undefined;
    }

    /**
     * 判断是否为true
     * @param value
     * @return {boolean}
     */
    public static isTrue(value: any): boolean {
        if (!this.isBoolean(value)) {
            return false;
        }

        return value === true;
    }

    /**
     * 判断是否false
     * @param value
     * @return {boolean}
     */
    public static isFalse(value: any): boolean {
        if (!this.isBoolean(value)) {
            return false;
        }

        return value === false;
    }
}
