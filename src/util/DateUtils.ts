/**
 *
 * Date tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
import dayjs from "dayjs";

export default class DateUtils {
    public static DATE: string = "YYYY-MM-DD";
    public static TIME: string = "HH:mm:ss";
    public static DEFAULT: string = "YYYY-MM-DD HH:mm:ss";
    public static FILL: string = "YYYY-MM-DD HH:mm:ss.SSS";

    /**
     * 格式化
     * @param date
     * @param fmt
     */
    public static format(date: any, fmt: string = "YYYY-MM-DD HH:mm:ss") {
        return dayjs(date).format(fmt);
    }

    /**
     * 获取当前时区值
     * @return {number}
     */
    public static getTimeZone(): number {
        return new Date().getTimezoneOffset() / -60;
    }

    /**
     * 获取时区名称
     * @return {string}
     */
    public static getTimeZoneName(): string {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    /**
     * 获取当前系统时间戳
     * @param isMillisecond 是否获取毫秒数，默认false
     * @return {number} 返回当前系统时间戳
     */
    public static getCurrentTimestamp(isMillisecond: boolean = false): number {
        if (isMillisecond) {
            return dayjs().valueOf();
        }

        return dayjs().unix();
    }
}
