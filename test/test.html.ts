import HtmlUtils from "../src/util/HtmlUtils";

const html = `
<div>&看见的"' 框架≤≥+-×÷⋅开始的减肥；</div>
`;

// let aa: any = false;


// console.log("htmlToText1: ", HtmlUtils.htmlTagToText(" ").length);
// console.log("htmlToText2: ", HtmlUtils.htmlTagToText(aa).length);

let aa = HtmlUtils.htmlTagToEntityText(html);

console.log("htmlToText: ", aa);
console.log("htmlToText: ", HtmlUtils.entityTextToHtmlTag(aa));
