

export namespace GlobalTypes {
    /**
     * 系统类型
     */
    export enum OsTypes {
        UNKNOWN = "Unknown",
        IOS= "iOS",
        ANDROID = "Android",
        MAC = "Mac",
        WINDOWS = "Windows",
        HARMONY = "Harmony"
    }

    /**
     * 是否是YN类型
     */
    export enum YnTypes {
        YES = 1,
        NO = 0
    }

    /**
     * 状态类型
     */
    export enum StatusTypes {
        UNAVAILABLE = 0, // 禁用
        AVAILABLE   = 1, // 正常
    }

    /**
     * 支持语言标识
     */
    export enum LangTypes {
        EN_GB = "en-gb",  // 英语
        EN_US = "en-us",  // 英语(美式)
        ZH_CN = "zh-cn",  // 简体中文
        ZH_TW = "zh-tw",  // 繁体中文(台湾)
        ZH_HK = "zh-hk",  // 繁体中文(香港)
        DE_DE = "de-de",  // 德语
        FR_FR = "fr-fr",  // 法语(法国)
        FR_CA = "fr-ca",  // 法语(加拿大)
        JA_JP = "ja-jp",  // 日语
        RU_RU = "ru-ru",  // 俄语
    }
}
