import Parent from "./Parent";
import StringUtils from "./StringUtils";
import {BOOLEAN_ENUM, VAR_TYPE_ENUM} from "../enum";

/**
 *
 * Boolean tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class BooleanUtils extends Parent {
    /**
     * 判断值是否为boolean类型
     * @param value
     */
    public static isBoolean(value: any): boolean {
        return this.isType(value, VAR_TYPE_ENUM.BOOLEAN);
    }

    /**
     * boolean转字符串
     * @param value
     */
    public static toString(value: boolean): BOOLEAN_ENUM {
        return value ? BOOLEAN_ENUM.TRUE : BOOLEAN_ENUM.FALSE;
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
            case BOOLEAN_ENUM.TRUE:
                return true;
            case BOOLEAN_ENUM.FALSE:
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
