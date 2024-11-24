import Parent from "./Parent";
import StringUtils from "./StringUtils";
import ObjectUtils from "./ObjectUtils";
import {GTypes} from "../type";

/**
 *
 * Set tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class SetUtils extends Parent {
    private static DATA_TYPE: string = "__g_lang_tools_type_set";

    /**
     * 判断类型是否为set
     * @param value
     */
    public static isSet(value: any): boolean {
        return this.isType(value, GTypes.VarTypes.SET);
    }

    /**
     * 字符串转set对象
     * @param value
     */
    public static toSet(value: string): Set<any> | undefined {
        if (StringUtils.isBlank(value)) {
            return;
        }

        try {
            const data = JSON.parse(value);
            if (ObjectUtils.isObject(data) && ObjectUtils.contain(data, this.DATA_TYPE)) {
                return new Set(data.data);
            }
        } catch (e) {}

        return;
    }

    /**
     * set转字符串
     * @param data
     */
    public static toString(data: Set<any>): string {
        const result: Record<string, any> = {
            "data": Array.from(data.values())
        };
        result[this.DATA_TYPE] = true;

        return JSON.stringify(result);
    }
}
