import Parent from "./Parent";
import StringUtils from "./StringUtils";
import ObjectUtils from "./ObjectUtils";
import {VAR_TYPE_ENUM} from "../enum";

/**
 *
 * Map tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class MapUtils extends Parent {
    private static DATA_TYPE: string = "__g_lang_tools_type_map";

    /**
     * 判断类型是否为map
     * @param value
     */
    public static isMap(value: any): boolean {
        return this.isType(value, VAR_TYPE_ENUM.MAP);
    }

    /**
     * 字符串转map对象
     * @param value
     */
    public static toMap(value: string): Map<string, any> | undefined {
        if (StringUtils.isBlank(value)) {
            return undefined;
        }

        try {
            const data = JSON.parse(value);
            if (ObjectUtils.isObject(data) && ObjectUtils.contain(data, this.DATA_TYPE)) {
                return new Map<string, any>(data.data);
            }
        } catch (e) {}

        return undefined;
    }

    /**
     * Map转字符串
     * @param data
     */
    public static toString(data: Map<string, any>): string {
        const result: Record<string, any> = {
            "data": Array.from(data.entries())
        };
        result[this.DATA_TYPE] = true;

        return JSON.stringify(result);
    }
}
