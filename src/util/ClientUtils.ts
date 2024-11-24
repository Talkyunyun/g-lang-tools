/**
 *
 * Client tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-08 10:58
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
import {GTypes} from "../type";

export default class ClientUtils {
    /**
     * 判断环境是否是支付宝小程序
     * @return {boolean}
     * @public
     */
    public static isAliMiniPro(): boolean {
        return navigator.userAgent.indexOf('AliApp') > -1;
    }

    /**
     * 判断环境是否是微信小程序
     * @return {boolean}
     * @public
     */
    public static isWxMiniPro(): boolean {
        try {
            const userAgent = window.navigator.userAgent.toLowerCase();

            return userAgent.indexOf('micromessenger') > -1 && userAgent.indexOf('miniprogram') > -1;
        } catch (e) {
            console.warn('判断是否微信小程序失败', e);
        }

        return false;
    }

    /**
     * 判断系统是否是iOS
     * @return {boolean}
     * @public
     */
    public static isIOS(): boolean {
        return this.getOsFromUA() === GTypes.OsTypes.IOS;
    }

    /**
     * 判断系统是否是android
     * @return {boolean}
     * @public
     */
    public static isANDROID(): boolean {
        return this.getOsFromUA() === GTypes.OsTypes.ANDROID;
    }

    public static isMac(): boolean {
        return this.getOsFromUA() === GTypes.OsTypes.MAC;
    }

    public static isWindows(): boolean {
        return this.getOsFromUA() === GTypes.OsTypes.WINDOWS;
    }

    public static isHarmony(): boolean {
        return this.getOsFromUA() === GTypes.OsTypes.HARMONY;
    }

    /**
     * 从UA中获取osVersion值
     * @return {string | null}
     * @private
     */
    public static getOsVersionFromUA(): string | undefined {
        try {
            const userAgent = window.navigator.userAgent;
            if (this.isIOS()) {
                const auList = userAgent.split(";");
                for (let i in auList) {
                    if (auList[i].match(/CPU iPhone/i)) {
                        const sList = auList[i].trim().split(' ');
                        const versionNum: number = Number(sList[3]
                            .replace(/_/g, '')
                            .replace(/\./g, ''));
                        if (versionNum > 0) {
                            return sList[3].replace(/_/g, '.');
                        }
                    }
                }
            } else if (this.isANDROID()) {
                const auList = userAgent.split(";");
                for (let i in auList) {
                    if (auList[i].match(/Android/i)) {
                        const sList = auList[i].trim().split(' ');
                        const versionNum: number = Number((sList[1]).replace(/\./g, ''));
                        if (versionNum > 0) {
                            return sList[1];
                        }
                    }
                }
            }
        } catch (e) {
            console.warn('从UA中获取osVersion参数错误', e);
        }

        return undefined;
    }

    /**
     * 从UA中获取机型名称
     * [注意：该方法没法判断iOS设备的机型，因为UA没提供]
     * @return {string | null}
     * @private
     */
    public static getDeviceTypeFromUA(): string | undefined {
        try {
            if (!this.isANDROID()) {
                return undefined;
            }

            const userAgent = window.navigator.userAgent;
            const auList = userAgent.split(";");
            for (let i in auList) {
                if (auList[i].match(/Build/i)) {
                    const sList = auList[i].trim().split(' ');
                    return sList[1];
                }
            }
        } catch (e) {
            console.warn('从UA中读取deviceType参数错误', e);
        }

        return undefined;
    }

    /**
     * 从UA中获取OS值
     * @return {string} OS_ENUM
     * @private
     */
    public static getOsFromUA(): GTypes.OsTypes {
        try {
            const userAgent = window.navigator.userAgent;
            if (userAgent.match(/iPhone|iPad|iPod|iOS/i)) {
                return GTypes.OsTypes.IOS;
            }

            if (userAgent.match(/Android/i)) {
                return GTypes.OsTypes.ANDROID;
            }

            // todo 判断是否是mac/windows/harmony等系统
        } catch (e) {
            console.warn("从UA中获取OS参数失败", e);
        }

        return GTypes.OsTypes.UNKNOWN;
    }

    /**
     * 从UA中获取手机品牌商
     * @return {string | null}
     * @private
     */
    public static getBrandFromUA(): string | undefined {
        try {
            if (this.isIOS()) {
                return "Apple";
            }

            // android手机判断
            const userAgent = window.navigator.userAgent;
            const auList = userAgent.split(";");
            for (let i in auList) {
                if (auList[i].match(/Build/i)) {
                    const sList = auList[i].trim().split(' ');
                    return sList[0];
                }
            }
        } catch (e) {
            console.warn("从UA读取brand参数错误", e);
        }

        return undefined;
    }
}
