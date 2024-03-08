/**
 *
 * 日期工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */
import GNumberTools from "./GNumberTools";

export default class GDateTools {

    /**
     * 获取当前时区值
     * @return {number}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getTimeZone(): number {
        return new Date().getTimezoneOffset() / -60;
    }

    /**
     * 获取时区名称
     * @return {string}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getTimeZoneName(): string {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    /**
     * 获取当前系统时间戳
     * @param isMillisecond 是否获取毫秒数，默认false
     * @return {number} 返回当前系统时间戳
     * @deprecated 已作废，请使用2.0工具
     */
    public static getCurrentTimestamp(isMillisecond: boolean = false): number {
        const time = (new Date()).getTime();
        if (isMillisecond) {
            return time;
        }

        return Date.parse(GNumberTools.toString(time / 1000));
    }
}
