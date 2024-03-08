
import {GNumberTools} from "../src/index";

console.log('isNumber', GNumberTools.isNumber(23232323));
console.log('isNumber', GNumberTools.isNumber("2323"));
console.log('isNumber', GNumberTools.isNumber(2323.23));
console.log('isNumber', GNumberTools.isNumber("2223323.2344"));
console.log('isNumber', GNumberTools.isNumber(NaN));
console.log('isNumber', GNumberTools.isNumber("skdfjdksjf"));
console.log('isNumber', GNumberTools.isNumber([1,2,3]));
console.log('isNumber', GNumberTools.isNumber({name: 'ddd'}));
console.log('isNumber', GNumberTools.isNumber(() => {}));
console.log('isNumber', GNumberTools.isNumber(undefined));
console.log('isNumber', GNumberTools.isNumber(null));
console.log('isNumber', GNumberTools.isNumber(true));
console.log('isNumber', GNumberTools.isNumber(false));

console.log('-------------------------');

console.log('toNumber', GNumberTools.toNumber(23232323));
console.log('toNumber', GNumberTools.toNumber("2323"));
console.log('toNumber', GNumberTools.toNumber(2323.23));
console.log('toNumber', GNumberTools.toNumber("234323.2553"));
console.log('toNumber', GNumberTools.toNumber(NaN));
console.log('toNumber', GNumberTools.toNumber("skdfjdksjf"));
console.log('toNumber', GNumberTools.toNumber([1,2,3]));
console.log('toNumber', GNumberTools.toNumber({name: 'ddd'}));
console.log('toNumber', GNumberTools.toNumber(() => {}));
console.log('toNumber', GNumberTools.toNumber(undefined));
console.log('toNumber', GNumberTools.toNumber(null));
console.log('toNumber', GNumberTools.toNumber(true));
console.log('toNumber', GNumberTools.toNumber(false));

console.log('-------------------------');

console.log('formatMilli', GNumberTools.formatMilli(23232323));
console.log('formatMilli', GNumberTools.formatMilli("232343"));
console.log('formatMilli', GNumberTools.formatMilli(2323.23));
console.log('formatMilli', GNumberTools.formatMilli("23332323.3323"));
console.log('formatMilli', GNumberTools.formatMilli(NaN));
console.log('formatMilli', GNumberTools.formatMilli("skdfjdksjf"));
console.log('formatMilli', GNumberTools.formatMilli([1,2,3]));
console.log('formatMilli', GNumberTools.formatMilli({name: 'ddd'}));
console.log('formatMilli', GNumberTools.formatMilli(() => {}));
console.log('formatMilli', GNumberTools.formatMilli(undefined));
console.log('formatMilli', GNumberTools.formatMilli(null));
console.log('formatMilli', GNumberTools.formatMilli(true));
console.log('formatMilli', GNumberTools.formatMilli(false));
