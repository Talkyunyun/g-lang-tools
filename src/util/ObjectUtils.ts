import Parent from "./Parent";
import UndefinedUtils from "./UndefinedUtils";
import StringUtils from "./StringUtils";
import {VAR_TYPE_ENUM} from "../enum";

/**
 *
 * Object tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class ObjectUtils extends Parent {

    /**
     * 判断对象是否为object
     * @param value
     */
    public static isObject(value: any): boolean {
        return this.isType(value, VAR_TYPE_ENUM.OBJECT);
    }

    /**
     * 对象转字符串
     * @param value
     */
    public static toString(value: Record<string, any>): string {
        if (!this.isObject(value)) {
            return "{}";
        }

        try {
            return JSON.stringify(value);
        } catch (e) {}

        return "{}";
    }

    /**
     * 字符串转对象
     * @param value
     */
    public static toObject(value: string): Record<string, any> | undefined {
        if (!StringUtils.isString(value)) {
            return undefined;
        }

        try {
            const result = JSON.parse(value);
            if (this.isObject(result)) {
                return result;
            }
        } catch (e) {}

        return undefined;
    }

    /**
     * 判断map中是否包含指定key
     * @param data
     * @param key
     * @return {boolean}
     */
    public static contain(data: Record<string, any>, key: string): boolean {
        if (!this.isObject(data)) {
            return false;
        }

        return !UndefinedUtils.isUndefined(data[key]);
    }

}
