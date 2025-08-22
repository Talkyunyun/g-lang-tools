

export namespace DataTypes {

    /**
     * 布尔类型
     */
    export enum Boolean {
        FALSE = "false",
        TRUE = "true"
    }

    /**
     * 变量类型
     */
    export enum Variable {
        BOOLEAN = "[object Boolean]",
        FUNCTION = "[object Function]",
        ARRAY = "[object Array]",
        MAP = "[object Map]",
        SET = "[object Set]",
        NULL = "[object Null]",
        NUMBER = "[object Number]",
        BIG_INT = "[object BigInt]",
        OBJECT = "[object Object]",
        STRING = "[object String]",
        UNDEFINED = "[object Undefined]",
    }
}
