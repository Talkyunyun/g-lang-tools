import Parent from "./Parent";
import {GTypes} from "../type";

/**
 *
 * String tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class StringUtils extends Parent {
    /**
     * 判断值是否是字符串
     * @param value
     */
    public static isString(value: any): boolean {
        return this.isType(value, GTypes.VarTypes.STRING);
    }

    /**
     * 判断字符串是否包含某个字符串
     * @param value
     * @param target
     * @return {boolean}
     */
    public static contain(value: string, target: string): boolean {
        return this.isString(value) && value.indexOf(target) > -1;
    }

    /**
     * 字符串转number，非数字的字符串会直接转换为0，包括NaN类型
     * @param value
     * @return {number}
     */
    public static valueOfNumber(value: string | null): number {
        if (!this.isString(value)) {
            return 0;
        }
        const result = Number(value);

        return isNaN(result) ? 0 : result;
    }

    /**
     * 判断目标字符串为空或者为null，空格也当作为空
     * @param content
     * @return {boolean}
     */
    public static isBlank(content?: string | null): boolean {
        return !content || content.trim().length === 0;
    }

    /**
     * 判断字符串非空
     * @param content
     */
    public static isNotBlank(content?: string | null): boolean {
        return !this.isBlank(content);
    }

    /**
     * 判断目标字符串为空或者为null，空格不当作为空
     * @param content
     * @return {{boolean}
     */
    public static isEmpty(content: string | null): boolean {
        return !content || content.length === 0;
    }

    /**
     * 判断字符串非空
     * @param content
     * @return {boolean}
     */
    public static isNotEmpty(content: string | null): boolean {
        return !this.isEmpty(content);
    }

    /**
     * 驼峰转下划线
     * @param value 驼峰变量名称
     * @return {string} 转换后的值
     */
    public static humpToLine(value: string): string {
        return value.replace(/([A-Z])/g, "_$1").toLowerCase();
    }

    /**
     * 下划线转驼峰
     * @param value
     * @return {string}
     */
    public static lineToHump(value: string): string {
        if (!this.isString(value)) {
            return "";
        }

        return value.replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
    }
}
