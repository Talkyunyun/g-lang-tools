import GStringTools from "./GStringTools";
import GMapTools from "./GMapTools";
import GListTools from "./GListTools";
import GBooleanTools from "./GBooleanTools";
import GNumberTools from "./GNumberTools";
import GEmptyTools from "./GEmptyTools";
/**
 *
 * URL工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */
export default class GUrlTools {

    /**
     * 移除当前url地址参数
     * @param keys 需要移除的参数列表
     * @return void
     * @deprecated 已作废，请使用2.0工具
     */
    public static removeCurrentForSearch(keys: string[]) {
        const { origin, pathname } = window.location;
        const queryAll = this.getSearchAllValue();
        if (GListTools.isArray(keys)) {
            keys.forEach((key) => {
                delete queryAll[key];
            });
        }
        const url = `${origin + pathname}?${this.buildQuery(queryAll)}`;

        window.history.replaceState({}, '', url);
    }

    /**
     * 移除url地址所有参数
     * 注意：该方法只会保留path路由地址
     * @return void
     * @deprecated 已作废，请使用2.0工具
     */
    public static removeAll() {
        const { origin, pathname } = window.location;
        const url = `${origin + pathname}`;

        window.history.replaceState({path: url}, '', url);
    }

    /**
     * 更新当前URL地址参数
     * @param params
     * @deprecated 已作废，请使用2.0工具
     */
    public static replaceCurrentUrlForSearch(params: Record<string, any>) {
        const { origin, pathname } = window.location;
        const queryAll = this.getSearchAllValue();
        const query = Object.assign(queryAll, params);

        const url = `${origin + pathname}?${this.buildQuery(query)}`;

        window.history.replaceState({
            path: url
        }, '', url);
    }

    /**
     * MAP转url参数字符串
     * 如：{name:gene, age: 12} => name=gene&age=12
     * [注意：该方法，会自动把值做encode编码]
     * @param query
     * @param {boolean} isHumpToLine 字段是否转下划线，默认驼峰
     * @return {string}
     * @deprecated 已作废，请使用2.0工具
     */
    public static buildQuery(query: Record<string, any>, isHumpToLine: boolean = false): string {
        if (!GMapTools.isMap(query)) {
            return '';
        }

        try {
            const result: string[] = [];
            for (const key in query) {
                let value: any = null;
                if (GBooleanTools.isBoolean(query[key])) {
                    value = GBooleanTools.toString(query[key]);
                } else if (GNumberTools.isNumber(query[key])) {
                    value = query[key];
                } else if (GListTools.isArray(query[key]) || GMapTools.isMap(query[key])) {
                    value = JSON.stringify(query[key]);
                } else if (GStringTools.isNotBlank(query[key])) {
                    value = query[key];
                }
                if (value === null) { continue; }

                const field: string = isHumpToLine ? GStringTools.humpToLine(key) : key;
                result.push(field + "=" + encodeURIComponent(value));
            }

            return result.join('&');
        } catch (e) {
            console.warn('[g-lang-tools]Map转url参数错误', e);
        }

        return '';
    }

    /**
     * 获取URL搜索所有值
     * @return {Record<string, any>>} 返回所有search值列表
     * @deprecated 已作废，请使用2.0工具
     */
    public static getSearchAllValue(): Record<string, string> {
        const content: string = decodeURIComponent(window.location.search);
        const list: string[] = content.split('?');
        if (list.length < 2) {
            return {};
        }

        const query: Record<string, any> = {};
        const params = list[1].split('&');
        for (const i in params) {
            if (params[i].indexOf('=') < 0) {
                continue;
            }

            const queryInfo = params[i].split('=');
            // @ts-ignore
            query[queryInfo[0]] = queryInfo[1];
        }

        return query;
    }

    /**
     * 获取URL的search部分全部参数
     * [优先建议使用该方法，因为会值自动类型匹配]
     *
     * @return {Map<string, any>>} 返回search部分所有列表，会自动根据值进行类型匹配
     * @deprecated 已作废，请使用2.0工具
     */
    public static getSearchAll(): Map<string, any> {
        const result : Map<string, any> = new Map<string, any>();
        const content: string = decodeURIComponent(window.location.search);
        const list   : string[] = content.split('?');
        if (list.length < 2) {
            return result;
        }

        const queryList: string[] = list[1].split('&');
        for (const index in queryList) {
            const valueInfo: string[] = queryList[index].split("=");
            if (valueInfo.length !== 2) { continue; }

            const key   = valueInfo[0];
            const value = valueInfo[1];

            // 判断空字符串
            if (value.length < 1) { result.set(key, value); continue; }

            // 判断Null类型
            if (GEmptyTools.isNull(GEmptyTools.valueOfForNull(value))) {
                result.set(key, null); continue;
            }

            // 判断undefined类型
            if (GEmptyTools.isUndefined(GEmptyTools.valueOfForUndefined(value))) {
                result.set(key, undefined); continue;
            }

            // 判断布尔类型
            const boolean = GBooleanTools.valueOf(value);
            if (GBooleanTools.isBoolean(boolean)) { result.set(key, boolean); continue; }

            // 判断数字类型，需要排除首位为0的情况
            if (value == "0" || value.substring(0, 1) !== "0" ) {
                const number = GNumberTools.toNumber(value);
                if (GNumberTools.isNumber(number)) {
                    result.set(key, number); continue;
                }
            }

            try {
                const parse = JSON.parse(value);
                // 判断数组
                if (GListTools.isArray(parse)) {
                    result.set(key, parse); continue;
                }

                // 判断对象
                if (GMapTools.isMap(parse)) {
                    result.set(key, parse); continue;
                }
            } catch (e) {}

            result.set(key, value);
        }

        return result;
    }

    /**
     * 根据key从Url地址获取参数值
     * @param key
     * @returns {*}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getSearchValueByKey(key: string): any {
        const regE = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
        const arr = decodeURIComponent(window.location.search).substring(1).match(regE);
        if (arr != null && arr.length > 1) {
            return arr[2];
        }

        return null;
    }

    /**
     * 根据key获取url#后面的参数值
     * @param key
     * @return {*}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getHashValueByKey(key: string): any {
        if (GStringTools.isEmpty(location.hash) || location.hash.indexOf('?') < 1) {
            return null;
        }

        const urlWllInfo = decodeURIComponent(location.hash.substring(location.hash.indexOf('?') + 1));
        const list = urlWllInfo.split('&');
        const map: Record<string, any> = {};
        for (const i in list) {
            const itemParam: string[] = list[i].split('=');
            map[itemParam[0]] = itemParam[1];
        }

        if (typeof map[key] === 'undefined') {
            return null;
        }

        return map[key];
    }
}
