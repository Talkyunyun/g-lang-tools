/**
 *
 * MAP工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */
export default class GMapTools {

    /**
     * 判断map中是否包含指定key
     * @param map
     * @param key
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static contain(map: Record<string, any>, key: string): boolean {
        if (!this.isMap(map)) {
            return false;
        }

        if (Object.prototype.toString.call(map[key]) === '[object Undefined]') {
            return false;
        }

        return true;
    }

    /**
     * 判断是否map对象
     * @param value
     * @return {boolean}
     * @deprecated 已作废，请使用2.0工具
     */
    public static isMap(value: any): boolean {
        if (Object.prototype.toString.call(value) === '[object Object]') {
            return true;
        }

        return false;
    }
}
