import {GTypes} from "../type";

/**
 *
 * Tool's parent class
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */

export default class Parent {

    /**
     * 判断是否为指定类型
     * @param value 待判断的值
     * @param type 类型，见EType枚举
     * @private
     */
    protected static isType(value: any, type: GTypes.VarTypes) {
        return Object.prototype.toString.call(value) === type;
    }
}
