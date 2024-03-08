/**
 *
 * Html tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-08 10:58
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
import StringUtils from "./StringUtils";

export default class HtmlUtils {
    private static HTML_TAG: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&apos;',
        ' ': '&nbsp;',
        '≤': '&le;',
        '≥': '&ge;',
        '+': '&plus;',
        '−': '&minus;',
        '×': '&times;',
        '÷': '&divide;',
        '⋅': '&sdot;',
        '(': '&lpar;',
        ')': '&rpar;',
        '|': '&vert;',
    };

    /**
     * 实体标签转换html内容
     * @param content
     */
    public static entityTextToHtmlTag(content: string): string {
        if (StringUtils.isString(content) && StringUtils.isNotBlank(content)) {
            for (let name in this.HTML_TAG) {
                const value = this.HTML_TAG[name];
                content = content.replace(new RegExp(value, "ig"), name);
            }

            return content;
        }

        return "";
    }

    /**
     * HTML标签符号转实体对象，注意：该方法只处理html标签
     * 如：
     * <div>我是案例代码内容</div>
     * 结果：
     * &lt;div&gt;我是案例代码内容&lt;/div&gt;
     * @param content html内容
     */
    public static htmlTagToEntityText(content: string) {
        if (StringUtils.isString(content) && StringUtils.isNotBlank(content)) {
            return content.replace(/[&|\<|\>|\"|\'|≤|≥|+|\-|×|÷|\⋅|(|)\|]/ig, (tag: string) => {
                return this.HTML_TAG[tag] || tag;
            });
        }

        return "";
    }
}
