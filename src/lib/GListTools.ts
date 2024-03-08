/**
 *
 * List工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */
export default class GListTools {
    /**
     * 判断列表是否为空
     * @param list
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isEmpty(list: any[]): boolean {
        if (this.isArray(list) && list.length > 0) {
            return false;
        }

        return true;
    }

    /**
     * 判断对象是否包含在列表中
     * @param list
     * @param target
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static contain(list: any[], target: any): boolean {
        if (!this.isArray(list)) {
            return false;
        }

        return list.indexOf(target) > -1;
    }

    /**
     * 判断是否数组
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isArray(value: any): boolean {
        if (Object.prototype.toString.call(value) === '[object Array]') {
            return true;
        }

        return false;
    }
}
