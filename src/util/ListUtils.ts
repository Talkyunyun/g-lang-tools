import Parent from "./Parent";
import StringUtils from "./StringUtils";
import {GTypes} from "../type";

/**
 *
 * List tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class ListUtils extends Parent {

    /**
     * 判断类型是否为数组
     * @param value
     */
    public static isList(value: any): boolean {
        return this.isType(value, GTypes.VarTypes.ARRAY);
    }

    /**
     * 数组转字符串
     * @param value
     */
    public static toString(value: any[]): string {
        if (!this.isList(value)) {
            return "[]";
        }

        try {
            return JSON.stringify(value);
        } catch (e) {}

        return "[]";
    }

    /**
     * 字符串转数组
     * @param value
     */
    public static toList(value: string): any[] | undefined {
        if (!StringUtils.isString(value)) {
            return undefined;
        }

        try {
            const list = JSON.parse(value);
            if (this.isList(list)) {
                return list;
            }
        } catch (e) {}

        return undefined;
    }

    /**
     * 判断列表是否为空
     * @param list
     * @return {boolean}
     */
    public static isEmpty(list: any[]): boolean {
        return this.isList(list) && list.length === 0;
    }

    /**
     * 判断对象是否包含在列表中
     * @param list
     * @param target
     * @return {boolean}
     */
    public static contain(list: any[], target: any): boolean {
        if (!this.isList(list)) {
            return false;
        }

        return list.indexOf(target) > -1;
    }

    /**
     * 拼接,注意，该方法对多维数组处理会有问题
     * @param list
     * @param separator
     */
    public static join(list: any[], separator: string = ","): string {
        if (!this.isList(list)) {
            return "";
        }

        return list.join(separator);
    }
}
