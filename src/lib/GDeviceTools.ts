/**
 *
 * 设备工具类
 *
 * @author : Gene Yang<729170207@qq.com>
 * @date : 2022-02-04 15:02
 * @link : https://github.com/Talkyunyun <https://www.g-json.cn>
 */
export enum OS_ENUM {
    IOS     = "iOS",
    ANDROID = "Android",
    OTHER   = "Other",
}

export default class GDeviceTools {

    /**
     * 判断环境是否是支付宝小程序
     * @return {boolean}
     * @public
     * @deprecated 已作废，请使用2.0工具
     */
    public static isAliMiniPro(): boolean {
        if (navigator.userAgent.indexOf('AliApp') > -1) {
            return true;
        }

        return false;
    }

    /**
     * 判断环境是否是微信小程序
     * @return {boolean}
     * @public
     * @deprecated 已作废，请使用2.0工具
     */
    public static isWxMiniPro(): boolean {
        try {
            const userAgent = window.navigator.userAgent.toLowerCase();
            if (userAgent.indexOf('micromessenger') > -1 && userAgent.indexOf('miniprogram') > -1) {
                return true;
            }
        } catch (e) {
            console.warn('判断是否微信小程序失败', e);
        }

        return false;
    }

    /**
     * 判断系统是否是iOS
     * @return {boolean}
     * @public
     * @deprecated 已作废，请使用2.0工具
     */
    public static isIOS(): boolean {
        if (this.getOsFromUA() === OS_ENUM.IOS) {
            return true;
        }

        return false;
    }

    /**
     * 判断系统是否是android
     * @return {boolean}
     * @public
     * @deprecated 已作废，请使用2.0工具
     */
    public static isANDROID(): boolean {
        if (this.getOsFromUA() === OS_ENUM.ANDROID) {
            return true;
        }

        return false;
    }

    /**
     * 从UA中获取osVersion值
     * @return {string | null}
     * @private
     * @deprecated 已作废，请使用2.0工具
     */
    public static getOsVersionFromUA(): string | null {
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

        return null;
    }

    /**
     * 从UA中获取机型名称
     * [注意：该方法没法判断iOS设备的机型，因为UA没提供]
     * @return {string | null}
     * @private
     * @deprecated 已作废，请使用2.0工具
     */
    public static getDeviceTypeFromUA(): string | null {
        try {
            if (!this.isANDROID()) {
                return null;
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

        return null;
    }

    /**
     * 从UA中获取OS值，注意返回值都是小写
     * @return {string} iOS | Android | Other
     * @private
     * @deprecated 已作废，请使用2.0工具
     */
    public static getOsFromUA(): OS_ENUM.IOS | OS_ENUM.ANDROID | OS_ENUM.OTHER {
        try {
            const userAgent = window.navigator.userAgent;
            if (userAgent.match(/iPhone|iPad|iPod|iOS/i)) {
                return OS_ENUM.IOS;
            }

            if (userAgent.match(/Android/i)) {
                return OS_ENUM.ANDROID;
            }
        } catch (e) {
            console.warn("从UA中获取OS参数失败", e);
        }

        return OS_ENUM.OTHER;
    }

    /**
     * 从UA中获取手机品牌商
     * @return {string | null}
     * @private
     * @deprecated 已作废，请使用2.0工具
     */
    public static getBrandFromUA(): string | null {
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

        return null;
    }
}
