/**
 *
 * Url tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */

import ListUtils from "./ListUtils";
import BooleanUtils from "./BooleanUtils";
import NumberUtils from "./NumberUtils";
import MapUtils from "./MapUtils";
import ObjectUtils from "./ObjectUtils";
import StringUtils from "./StringUtils";
import NullUtils from "./NullUtils";
import UndefinedUtils from "./UndefinedUtils";

export default class UrlUtils {
    /**
     * 过滤处理
     * 1. 会把undefined、null、空字符串、空数组、all过滤。
     * @param params
     */
    public static filter(params: Map<string, any>): Map<string, any> {
        const result = new Map<string, any>();
        if (!MapUtils.isMap(params)) {
            return result;
        }

        params.forEach((value, key) => {
            // 过滤null和undefined
            if (UndefinedUtils.isUndefined(value) || NullUtils.isNull(value)) {
                return;
            }

            // 过滤空字符串
            if (StringUtils.isString(value)) {
                if (StringUtils.isEmpty(value) || value.toLowerCase() === "all") {
                    return;
                }
            }

            // 过滤空数组
            if (ListUtils.isList(value) && ListUtils.isEmpty(value)) {
                return;
            }

            result.set(key, value);
        });

        return result;
    }

    /**
     * 过滤处理
     * 1. 会把undefined、null、空字符串、空数组、all过滤。
     * @param params
     */
    public static filterForObject(params: Record<string, any>): Record<string, any> {
        if (!ObjectUtils.isObject(params)) {
            return {};
        }

        const list = Object.assign({...params});
        for (const name in list) {
            const value: any = list[name];
            // 过滤null和undefined
            if (UndefinedUtils.isUndefined(value) || NullUtils.isNull(value)) {
                delete list[name]; continue;
            }

            // 过滤空字符串
            if (StringUtils.isString(value)) {
                if (StringUtils.isEmpty(value) || value.toLowerCase() === "all") {
                    delete list[name]; continue;
                }
            }

            // 过滤空数组
            if (ListUtils.isList(value) && ListUtils.isEmpty(value)) {
                delete list[name];
            }
        }

        return list;
    }

    /**
     * 根据key获取url#后面的参数值
     * @param name
     * @return {*}
     */
    public static getHashValueByName(name: string): any {
        if (StringUtils.isEmpty(location.hash) || location.hash.indexOf('?') < 1) {
            return null;
        }

        const urlWllInfo = decodeURIComponent(location.hash.substring(location.hash.indexOf('?') + 1));
        const list = urlWllInfo.split('&');
        const map: Record<string, any> = {};
        for (const i in list) {
            const itemParam: string[] = list[i].split('=');
            map[itemParam[0]] = itemParam[1];
        }

        if (typeof map[name] === 'undefined') {
            return null;
        }

        return map[name];
    }

    /**
     * 更新当前URL地址参数
     * @param params
     */
    public static updateCurrentSearch(params: Map<string, any>) {
        const {origin, pathname} = window.location;
        const allList = this.getSearchAll();
        params.forEach((value, key) => allList.set(key, value));

        const url = `${origin + pathname}?${this.buildQuery(allList)}`;
        window.history.replaceState({path: url}, '', url);
    }

    /**
     * 更新当前Url参数
     * @param params
     */
    public static updateCurrentSearchForObject(params: Record<string, any>) {
        const {origin, pathname} = window.location;
        const allList = this.getSearchAllForObject();

        const url = `${origin + pathname}?${this.buildQueryForObject(Object.assign(allList, params))}`;
        window.history.replaceState({path: url}, '', url);
    }

    /**
     * 移除当前url地址参数
     * @param names 需要移除的参数列表
     * @return void
     */
    public static removeCurrentForSearch(names: string[]) {
        const {origin, pathname} = window.location;
        const params = this.getSearchAll();
        if (ListUtils.isList(names) && !ListUtils.isEmpty(names)) {
            names.forEach(name => params.delete(name));
        }

        const url = `${origin + pathname}?${this.buildQuery(params)}`;
        window.history.replaceState({}, '', url);
    }

    /**
     * 移除url地址所有参数
     * 注意：该方法只会保留path路由地址
     * @return void
     */
    public static removeAll() {
        const {origin, pathname} = window.location;
        const url = `${origin + pathname}`;

        window.history.replaceState({path: url}, '', url);
    }

    /**
     * 根据key从Url地址获取参数值
     * 注意：该方法会自动把值转换为对应类型，需要需要获取字符串，可以使用getSearchByNameForString()方法
     * @param name
     * @returns {*}
     */
    public static getSearchByName(name: string): any {
        const value: string | undefined = this.getSearchByNameForString(name);
        if (value) {
            return this.stringToAny(value);
        }

        return undefined;
    }

    /**
     * 根据key从Url地址获取参数值
     * 注意：返回值不做任何处理，统一为字符串
     * @param name
     * @returns {*}
     */
    public static getSearchByNameForString(name: string): string | undefined {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        const arr = decodeURIComponent(window.location.search).substring(1).match(reg);
        if (arr != null && arr.length > 1) {
            return arr[2];
        }

        return undefined;
    }

    /**
     * 获取Url搜索参数列表
     * 注意：返回的值为字符串，需要自行处理
     * @return {Record<string, string>>}
     */
    public static getSearchAllForObject(): Record<string, string> {
        const content: string = decodeURIComponent(window.location.search);
        const list: string[] = content.split('?');
        if (list.length < 2) {
            return {};
        }

        const result: Record<string, any> = {};
        const params = list[1].split('&');
        for (const i in params) {
            const item: string = params[i];
            const equalIndex: number = item.indexOf("=");
            if (equalIndex < 0) {
                continue;
            }
            const name = item.substring(0, equalIndex);

            result[name] = item.substring(equalIndex + 1, item.length);
        }

        return result;
    }

    /**
     * 获取URL的search部分全部参数
     * [优先建议使用该方法，因为会值自动类型匹配]
     *
     * @return {Map<string, any>>}
     */
    public static getSearchAll(): Map<string, any> {
        const result: Map<string, any> = new Map<string, any>();
        const content: string = decodeURIComponent(window.location.search);
        const list: string[] = content.split('?');
        if (list.length < 2) {
            return result;
        }

        const params: string[] = list[1].split('&');
        for (const i in params) {
            const item: string = params[i];
            const equalIndex: number = item.indexOf("=");
            if (equalIndex < 0) {
                continue;
            }

            const name = item.substring(0, equalIndex);
            const value = item.substring(equalIndex + 1, item.length);

            result.set(name, this.stringToAny(value));
        }

        return result;
    }

    /**
     * map对象转url参数构造器
     * @param params
     * @param isHumpToLine
     */
    public static buildQuery(params: Map<string, any>, isHumpToLine: boolean = false): string {
        if (!MapUtils.isMap(params)) {
            return '';
        }

        try {
            const list: string[] = [];
            params.forEach((v, k) => {
                let value: any = this.anyToString(v);
                if (value) {
                    const name: string = isHumpToLine ? StringUtils.humpToLine(k) : k;
                    list.push(name + "=" + encodeURIComponent(value));
                }
            });

            return list.join('&');
        } catch (e) {
            console.warn('Map parse query string fail.', e);
        }

        return '';
    }

    /**
     * MAP转url参数字符串
     * 如：{name:gene, age: 12} => name=gene&age=12
     * [注意：该方法，会自动把值做encode编码]
     * @param params
     * @param {boolean} isHumpToLine 字段是否转下划线，默认驼峰
     * @return {string}
     */
    public static buildQueryForObject(params: Record<string, any>, isHumpToLine: boolean = false): string {
        if (!ObjectUtils.isObject(params)) {
            return '';
        }

        try {
            const list: string[] = [];
            for (const k in params) {
                let value: any = this.anyToString(params[k]);
                if (value) {
                    const name: string = isHumpToLine ? StringUtils.humpToLine(k) : k;
                    list.push(name + "=" + encodeURIComponent(value));
                }
            }

            return list.join('&');
        } catch (e) {
            console.warn('Object parse query string fail', e);
        }

        return '';
    }

    /**
     * 任意类型值转换成字符串
     * @param value 任意类型的值
     * @return 如果转换成功，会返回字符串；如果转换失败，则返回undefined
     * @since 2.0
     * @private
     */
    private static anyToString(value: any): string | undefined {
        // boolean类型
        if (BooleanUtils.isBoolean(value)) {
            return BooleanUtils.toString(value);
        }

        // 数字类型
        if (NumberUtils.isNumber(value)) {
            return NumberUtils.toString(value);
        }

        // map类型
        if (MapUtils.isMap(value)) {
            return MapUtils.toString(value);
        }

        // list和object类型
        if (ListUtils.isList(value) || ObjectUtils.isObject(value)) {
            return JSON.stringify(value);
        }

        // 字符串类型
        if (StringUtils.isString(value) && StringUtils.isNotBlank(value)) {
            return value;
        }

        // null、undefined和空字符串都直接过滤
        return undefined;
    }

    /**
     * 字符串转任意类型
     * @param value
     * @private
     */
    private static stringToAny(value: string): any {
        // 判断空字符串
        if (StringUtils.isEmpty(value)) {
            return "";
        }

        // 判断Null类型
        if (NullUtils.isNull(NullUtils.toNull(value))) {
            return null;
        }

        // 判断undefined类型
        if (UndefinedUtils.isUndefined(UndefinedUtils.toUndefined(value))) {
            return undefined;
        }

        // 判断布尔类型
        const boolean = BooleanUtils.toBoolean(value);
        if (BooleanUtils.isBoolean(boolean)) {
            return boolean;
        }

        // 判断数字类型，需要排除首位为0的情况
        if (value == "0" || value.substring(0, 1) !== "0") {
            const number = NumberUtils.toNumber(value);
            if (NumberUtils.isNumber(number)) {
                return number;
            }
        }

        // map类型
        const map = MapUtils.toMap(value);
        if (MapUtils.isMap(map)) {
            return map;
        }

        try {
            const data = JSON.parse(value);
            // 判断数组
            if (ListUtils.isList(data)) {
                return data;
            }

            // 判断对象
            if (ObjectUtils.isObject(data)) {
                return data;
            }
        } catch (e) {}

        return value;
    }
}
