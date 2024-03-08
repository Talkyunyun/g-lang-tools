import Parent from "./Parent";
import StringUtils from "./StringUtils";
import {VAR_TYPE_ENUM} from "../enum";

/**
 *
 * Function tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class FunctionUtils extends Parent {
    /**
     * 节流
     * @param fn
     * @param delay
     */
    public static throttle(fn: Function, delay: number = 300) {
        let timer: NodeJS.Timeout | null = null;

        return function (...args: any[]) {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                // @ts-ignore
                fn.apply(this, args);
            }, delay);
        };
    }

    /**
     * 防抖
     * @param fn
     * @param delay
     * @param immediate 第一次是否执行
     * @returns
     */
    public static debounce(fn: Function, delay: number = 300, immediate: boolean = false) {
        let isInvoke = false
        let timer: NodeJS.Timeout | null = null
        return function (...args: unknown[]) {
            if (timer) clearTimeout(timer)

            if (immediate && !isInvoke) {
                // @ts-ignore
                fn.apply(this, args)
                isInvoke = true
            } else {
                timer = setTimeout(() => {
                    // @ts-ignore
                    fn.apply(this, args)
                    isInvoke = false
                }, delay)
            }
        }
    }

    /**
     * 判断类型是否为function
     * @param value
     */
    public static isFunction(value: any): boolean {
        return this.isType(value, VAR_TYPE_ENUM.FUNCTION);
    }

    /**
     * 字符串执行器
     * @param data
     */
    public static execute(data: string) {
        if (StringUtils.isBlank(data)) {
            return;
        }
        eval(data);
    }
}
