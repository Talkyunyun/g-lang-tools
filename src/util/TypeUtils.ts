
/**
*
* String tools
*
* @author Gene Yang<729170207@qq.com>
* @date  2024-03-07 15:02
* @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
    * @since 2.0
*/
export default class TypeUtils {

    /**
     * 获取接口定义属性对象
     * @param fields
     */
    public static getInterfaceFields<T>(fields: (keyof T)[]) {
        return fields;
    }
}
