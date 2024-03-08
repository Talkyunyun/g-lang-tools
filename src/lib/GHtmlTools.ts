/**
 * HTML处理工具
 *
 * @author  : Gene Yang <729170207@qq.com>
 * @date    : 2019/06/01
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */
export default class GHtmlTools {


    /**
     *
     * @deprecated 已作废，请使用2.0工具
     * @param html
     */
    public static htmlToText(html: string) {
        const tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };

        function replaceTag(tag: string) {
            // @ts-ignore
            return tagsToReplace[tag] || tag;
        }

        return html.replace(/[&<>]/g, replaceTag);
    }
};
