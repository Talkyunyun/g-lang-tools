//
import {GStringTools} from "../src/index";


// console.log('--------contain--------');
console.log('contain', GStringTools.contain("name", "n1"));
console.log('contain', GStringTools.contain("name", "me2"));
console.log('contain', GStringTools.contain("", ""));
console.log('contain', GStringTools.contain("", "dddd"));


// console.log('-------isEmpty---------');
console.log('isEmpty', GStringTools.isEmpty("age"));
console.log('isEmpty', GStringTools.isEmpty(""));
console.log('isEmpty', GStringTools.isEmpty(" "));
console.log('isEmpty', GStringTools.isEmpty(null));

// console.log('------isBlank----------');
console.log('isBlank', GStringTools.isBlank("age"));
console.log('isBlank', GStringTools.isBlank(""));
console.log('isBlank', GStringTools.isBlank("    "));
console.log('isBlank', GStringTools.isBlank(null));


// console.log('------isString----------');
console.log('isString', GStringTools.isString("age"));
console.log('isString', GStringTools.isString(""));
console.log('isString', GStringTools.isString(null));
console.log('isString', GStringTools.isString(1323));
console.log('isString', GStringTools.isString(12.323));
console.log('isString', GStringTools.isString([]));
console.log('isString', GStringTools.isString({}));


// console.log('------valueOfNumber----------');
console.log('valueOfNumber', GStringTools.valueOfNumber("age"));
console.log('valueOfNumber', GStringTools.valueOfNumber(""));
console.log('valueOfNumber', GStringTools.valueOfNumber("11"));
console.log('valueOfNumber', GStringTools.valueOfNumber("11.3434"));
console.log('valueOfNumber', GStringTools.valueOfNumber("11.3f434"));
console.log('valueOfNumber', GStringTools.valueOfNumber("a11.34"));
console.log('valueOfNumber', GStringTools.valueOfNumber(null));


// console.log('------humpToLine----------');
console.log('humpToLine', GStringTools.humpToLine("orderIdNameAge"));
console.log('humpToLine', GStringTools.humpToLine("order_id_name_age"));

// console.log('------lineToHump----------');
console.log('lineToHump', GStringTools.lineToHump("order_id_name_age"));
console.log('lineToHump', GStringTools.lineToHump("orderIdNameAge"));
