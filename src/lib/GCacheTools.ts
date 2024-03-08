/**
 *
 * 缓存工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */

import GNumberTools from "./GNumberTools";
import GListTools from "./GListTools";
import GMapTools from "./GMapTools";
import GStringTools from "./GStringTools";
import BooleanTools from "./GBooleanTools";
export default class GCacheTools {

    /**
     * 环境标识
     * @private
     */
    private static ENV: string | null = null;

    /**
     * 存储引擎[默认localStorage]
     * @private
     */
    private static ENGINE: Storage = localStorage;

    /**
     * 设置存储引擎
     * @param engine
     * @deprecated 已作废，请使用2.0工具
     */
    public static setEngine(engine: Storage) {
        this.ENGINE = engine;

        return this;
    }

    /**
     * 设置环境
     * @param env
     * @deprecated 已作废，请使用2.0工具
     */
    public static setEnv(env: string) {
        if (!GStringTools.isBlank(env)) {
            this.ENV = env;
        }

        return this;
    }

    /**
     * 设置number缓存
     * @param key
     * @param value
     * @deprecated 已作废，请使用2.0工具
     */
    public static setNumber(key: string, value: number) {
        if (!GNumberTools.isNumber(value)) {
            throw new Error("[GCacheTools] Error value type, type is " + typeof value);
        }

        this.ENGINE.setItem(this.getKEY(key), GNumberTools.toString(value));
    }

    /**
     * 设置字符串缓存
     * @param key
     * @param value
     * @deprecated 已作废，请使用2.0工具
     */
    public static setString(key: string, value: string) {
        this.ENGINE.setItem(this.getKEY(key), value);
    }

    /**
     * 设置字符串缓存
     * @param key
     * @param value
     * @deprecated 已作废，请使用2.0工具
     */
    public static setBoolean(key: string, value: boolean) {
        this.ENGINE.setItem(this.getKEY(key), BooleanTools.toString(value));
    }

    /**
     * 设置列表缓存
     * @param key
     * @param value
     * @deprecated 已作废，请使用2.0工具
     */
    public static setList(key: string, value: any[]) {
        this.ENGINE.setItem(this.getKEY(key), JSON.stringify(value));
    }

    /**
     * 设置MAP缓存
     * @param key
     * @param value
     * @deprecated 已作废，请使用2.0工具
     */
    public static setMap(key: string, value: Record<string, any>) {
        this.ENGINE.setItem(this.getKEY(key), JSON.stringify(value));
    }

    /**
     * 从缓存中获取number值
     * @param key
     * @return {number | null}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getNumber(key: string): number | null {
        try {
            const value = this.ENGINE.getItem(this.getKEY(key));
            if (value === null) {
                return null;
            }

            return GNumberTools.toNumber(value);
        } catch (e) {
            console.info('[GCacheTools]Failed to get value of type number from cache. err: ', e);
        }

        return null;
    }

    /**
     * 从缓存中获取boolean值
     * @param key
     * @return {boolean | null}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getBoolean(key: string): boolean | null {
        try {
            const value = this.ENGINE.getItem(this.getKEY(key));
            if (value === null) {
                return null;
            }

            return BooleanTools.valueOf(value);
        } catch (e) {
            console.info('[GCacheTools]Failed to get value of type boolean from cache. err: ', e);
        }

        return null;
    }

    /**
     * 从缓存中获取string值
     * @param key
     * @return {string | null}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getString(key: string): string | null {
        try {
            return this.ENGINE.getItem(this.getKEY(key));
        } catch (e) {
            console.info('[GCacheTools]Failed to get value of type string from cache. err: ', e);
        }

        return null;
    }

    /**
     * 从缓存中获取list值
     * @param key
     * @return {any[] | null}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getList(key: string): any[] | null {
        try {
            const value = this.ENGINE.getItem(this.getKEY(key));
            if (value === null) {
                return null;
            }

            const list = JSON.parse(value);
            if (GListTools.isArray(list)) {
                return list;
            }
        } catch (e) {
            console.info('[GCacheTools]Failed to get value of type list from cache. err: ', e);
        }

        return null;
    }

    /**
     * 从缓存中获取Map值
     * @param key
     * @return {Record<string, any> | null}
     * @deprecated 已作废，请使用2.0工具
     */
    public static getMap(key: string): Record<string, any> | null {
        try {
            const value = this.ENGINE.getItem(this.getKEY(key));
            if (value === null) {
                return null;
            }

            const map = JSON.parse(value);
            if (GMapTools.isMap(map)) {
                return map;
            }
        } catch (e) {
            console.info('[GCacheTools]Failed to get value of type map from cache. err: ', e);
        }

        return null;
    }

    /**
     * 清除指定KEY
     * @param {string} key
     * @public
     * @deprecated 已作废，请使用2.0工具
     */
    public static remove(key: string) {
        this.ENGINE.removeItem(this.getKEY(key));
    }

    /**
     * 清除所有数据
     * @public
     * @deprecated 已作废，请使用2.0工具
     */
    public static removeAll() {
        this.ENGINE.clear();
    }

    /**
     * 获取缓存KEY
     * @param {string} key
     * @return {string}
     * @private
     */
    private static getKEY(key: string) {
        if (GStringTools.isBlank(key)) {
            throw new Error("[GCacheTools]Key Fail. err: Invalid key");
        }

        return (key + (GStringTools.isBlank(this.ENV) ? '' : `_${this.ENV}`)).toUpperCase();
    }
}
