/**
 * Cache tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
import {GBooleanUtils, GListUtils, GMapUtils, GNumberUtils, GObjectUtils, GStringUtils} from "../dataType";

export default class CacheUtils {
    private static INSTANCE: CacheUtils;
    private APP_ID: string = "";
    private env: string = "";
    private engine: Storage = localStorage;

    private constructor() {}
    public static getInstance(): CacheUtils {
        if (CacheUtils.INSTANCE) {
            return CacheUtils.INSTANCE;
        }

        return CacheUtils.INSTANCE = new CacheUtils();
    }

    /**
     * 设置存储引擎
     * @param engine
     */
    public setEngine(engine: Storage) {
        this.engine = engine;
        return this;
    }

    /**
     * 设置APP标识
     * @param appId
     */
    public setAppId(appId: string) {
        this.APP_ID = appId;
        return this;
    }

    /**
     * 设置环境
     * @param env
     */
    public setEnv(env: string) {
        this.env = env;
        return this;
    }

    /**
     * 设置number缓存
     * @param key
     * @param value
     */
    public setNumber(key: string, value: number) {
        if (!GNumberUtils.isNumber(value)) {
            throw new Error("Error value type, type is " + typeof value);
        }

        this.engine.setItem(this.getKEY(key), GNumberUtils.toString(value));
    }

    /**
     * 设置字符串缓存
     * @param key
     * @param value
     */
    public setString(key: string, value: string) {
        this.engine.setItem(this.getKEY(key), value);
    }

    /**
     * 设置字符串缓存
     * @param key
     * @param value
     */
    public setBoolean(key: string, value: boolean) {
        this.engine.setItem(this.getKEY(key), GBooleanUtils.toString(value));
    }

    /**
     * 设置列表缓存
     * @param key
     * @param value
     */
    public setList(key: string, value: any[]) {
        this.engine.setItem(this.getKEY(key), GListUtils.toString(value));
    }

    /**
     * 设置MAP缓存
     * @param key
     * @param value
     */
    public setMap(key: string, value: Map<string, any>) {
        this.engine.setItem(this.getKEY(key), GMapUtils.toString(value));
    }

    /**
     * 设置MAP缓存
     * @param key
     * @param value
     */
    public setObject(key: string, value: Record<string, any>) {
        this.engine.setItem(this.getKEY(key), GObjectUtils.toString(value));
    }

    /**
     * 从缓存中获取number值
     * @param key
     * @return {number | null}
     */
    public getNumber(key: string): number | undefined {
        try {
            const value = this.engine.getItem(this.getKEY(key));
            if (value === null) {
                return undefined;
            }

            return GNumberUtils.toNumber(value);
        } catch (e) {
            console.info('Failed to get value of type number from cache. err: ', e);
        }

        return undefined;
    }

    /**
     * 从缓存中获取boolean值
     * @param key
     * @return {boolean | null}
     */
    public getBoolean(key: string): boolean | undefined {
        try {
            const value = this.engine.getItem(this.getKEY(key));
            if (value === null) {
                return undefined;
            }

            return GBooleanUtils.toBoolean(value);
        } catch (e) {
            console.info('Failed to get value of type boolean from cache. err: ', e);
        }

        return undefined;
    }

    /**
     * 从缓存中获取string值
     * @param key
     * @return {string | null}
     */
    public getString(key: string): string | undefined {
        try {
            const result = this.engine.getItem(this.getKEY(key));
            if (result == null) {
                return undefined;
            }

            return result;
        } catch (e) {
            console.info('Failed to get value of type string from cache. err: ', e);
        }

        return undefined;
    }

    /**
     * 从缓存中获取list值
     * @param key
     * @return {any[] | null}
     */
    public getList(key: string): any[] | undefined {
        try {
            const value = this.engine.getItem(this.getKEY(key));
            if (value === null) {
                return undefined;
            }

            const result = GListUtils.toList(value);
            if (GListUtils.isList(result)) {
                return result;
            }
        } catch (e) {
            console.info('Failed to get value of type list from cache. err: ', e);
        }

        return undefined;
    }

    /**
     * 从缓存中获取Map值
     * @param key
     * @return {Map<string, any> | null}
     */
    public getMap(key: string): Map<string, any> | undefined {
        try {
            const value = this.engine.getItem(this.getKEY(key));
            if (value === null) {
                return undefined;
            }

            const result = GMapUtils.toMap(value)
            if (GMapUtils.isMap(result)) {
                return result;
            }
        } catch (e) {
            console.info('Failed to get value of type map from cache. err: ', e);
        }

        return undefined;
    }

    /**
     * 从缓存中获取object值
     * @param key
     * @return {Map<string, any> | null}
     */
    public getObject(key: string): Record<string, any> | undefined {
        try {
            const value = this.engine.getItem(this.getKEY(key));
            if (value === null) {
                return undefined;
            }

            const result = GObjectUtils.toObject(value)
            if (GObjectUtils.isObject(result)) {
                return result;
            }
        } catch (e) {
            console.info('Failed to get value of type map from cache. err: ', e);
        }

        return undefined;
    }

    /**
     * 清除指定KEY
     * @param {string} key
     * @public
     */
    public remove(key: string) {
        this.engine.removeItem(this.getKEY(key));
    }

    /**
     * 清除所有数据
     * @public
     */
    public removeAll() {
        this.engine.clear();
    }

    /**
     * 获取缓存KEY
     * @param {string} key
     * @return {string}
     * @private
     */
    private getKEY(key: string) {
        if (GStringUtils.isString(key) && GStringUtils.isNotBlank(key)) {
            const result = (key + (GStringUtils.isBlank(this.env) ? '' : `__${this.env}`)).toUpperCase();
            if (GStringUtils.isNotBlank(this.APP_ID)) {
                return this.APP_ID + "__" + result;
            }

            return result;
        }

        throw new Error("Generate cache key Fail. err: Invalid key");
    }
}
