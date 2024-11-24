

export namespace GTypes {
    export enum OsTypes {
        UNKNOWN = "Unknown",
        IOS= "iOS",
        ANDROID = "Android",
        MAC = "Mac",
        WINDOWS = "Windows",
        HARMONY = "Harmony"
    }

    export enum BooleanTypes {
        FALSE = "false",
        TRUE = "true"
    }

    export enum NetMethodTypes {
        GET = "GET",
        POST = "POST",
        PUT = "PUT",
        DELETE = "DELETE",
        PATCH = "PATCH",
        OPTIONS = "OPTIONS",
        HEAD = "HEAD"
    }

    export enum VarTypes {
        BOOLEAN = "[object Boolean]",
        FUNCTION = "[object Function]",
        ARRAY = "[object Array]",
        MAP = "[object Map]",
        SET = "[object Set]",
        NULL = "[object Null]",
        NUMBER = "[object Number]",
        OBJECT = "[object Object]",
        STRING = "[object String]",
        UNDEFINED = "[object Undefined]",
    }
}
