/**
 *
 * String工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */
export default class GStringTools {

    /**
     * 判断字符串是否包含某个字符串
     * @param value
     * @param target
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static contain(value: string, target: string): boolean {
        if (this.isString(value) && value.indexOf(target) > -1) {
            return true;
        }

        return false;
    }

    /**
     * 字符串转number，非数字的字符串会直接转换为0，包括NaN类型
     * @param value
     * @return {number}
     * @deprecated 已作废，请使用2.0工具
     */
    public static valueOfNumber(value: string | null): number {
        if (!this.isString(value)) {
            return 0;
        }
        const result = Number(value);

        return isNaN(result) ? 0 : result;
    }

    /**
     * 判断是否字符串
     * @param value
     * @returns {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isString(value: any): boolean  {
        if (Object.prototype.toString.call(value) === '[object String]') {
            return true;
        }

        return false;
    }

    /**
     * 判断目标字符串为空或者为null，空格也当作为空
     * @param content
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isBlank(content: string | null): boolean {
        if (!content || content.trim().length === 0) {
            return true;
        }

        return false;
    }

    /**
     * 判断字符串非空
     * @param content
     * @deprecated 已作废，请使用2.0工具
     */
    public static isNotBlank(content: string | null): boolean {
        return !this.isBlank(content);
    }

    /**
     * 判断目标字符串为空或者为null，空格不当作为空
     * @param content
     * @return {{boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isEmpty(content: string | null): boolean {
        if (!content || content.length === 0) {
            return true;
        }

        return false;
    }

    /**
     * 判断字符串非空
     * @param content
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isNotEmpty(content: string | null): boolean {
        return !this.isEmpty(content);
    }

    /**
     * 驼峰转下划线
     * @param name 驼峰变量名称
     * @return {string} 转换后的值
     * @deprecated 已作废，请使用2.0工具
     */
    public static humpToLine(name: string): string {
        return name.replace(/([A-Z])/g,"_$1").toLowerCase();
    }

    /**
     * 下划线转驼峰
     * @param name
     * @return {string}
     * @deprecated 已作废，请使用2.0工具
     */
    public static lineToHump(name: string): string {
        if (!this.isString(name)) {
            return "";
        }

        return name.replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
    }
}
