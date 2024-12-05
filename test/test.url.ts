import UrlUtils from "../src/util/UrlUtils";
import BigIntUtils from "../src/util/BigIntUtils";

let ddd = new Map<string, any>();
ddd.set("name", "gene");
ddd.set("all", "all");
ddd.set("null", null);
ddd.set("undefined", undefined);
ddd.set("emptyList", []);
ddd.set("list", [1,2,3]);
ddd.set("obj", {});
console.log('111', UrlUtils.filter(ddd));
console.log('222', UrlUtils.filterForObject({
    name: "gene",
    all: "all",
    "null": null,
    "undefined": undefined,
    "emptyList": [],
    list: [1,2,3],
    obj: {}
}));

UrlUtils.updateCurrentSearchForObject({"null":""});

//
// console.log("undefined", UrlUtils.anyToString(undefined));
// console.log("null", UrlUtils.anyToString(null));
// console.log("string", UrlUtils.anyToString("gene.yang"));
// console.log("string", UrlUtils.anyToString(""));
// console.log("number", UrlUtils.anyToString(12));
// console.log("number", UrlUtils.anyToString(-12));
// console.log("number", UrlUtils.anyToString(0));
// console.log("list", UrlUtils.anyToString([]));
// console.log("list", UrlUtils.anyToString([1,2]));
// console.log("list", UrlUtils.anyToString([{"name": "gene", "age": 12}]));
// console.log("object", UrlUtils.anyToString({"name": "xiasee", "age": 33}));
// console.log("boolean", UrlUtils.anyToString(false));
// console.log("boolean", UrlUtils.anyToString(true));
//
let set = new Set<string>();
set.add("name");
// console.log("set", UrlUtils.anyToString(set));

let map = new Map<string, any>();
map.set("age", 12);
map.set("name", "dddd");
map.set("is", false);

// console.log("map", UrlUtils.anyToString(map));
console.log('----', UrlUtils.getSearchByName("list1"));
console.log('----', UrlUtils.getSearchByNameForString("list1"));


let params = new Map<string, any>();
params.set("sting1Age", "name");
params.set("sting2", "");
params.set("sting3", "00");
params.set("num1", 12);
params.set("num2", -12);
params.set("num3", 0);
params.set("undefined", undefined);
params.set("null", null);
params.set("boolean1", false);
params.set("boolean2", true);
params.set("list1", []);
params.set("list2", [1,2,3]);
params.set("list3", [{"name": "age=ddd", "age": 23}]);
params.set("obj1", {"name": 12});
params.set("obj2", {});
params.set("map", map);
params.set("bigNumber1", BigInt("12232342423432432423432432"));
params.set("bigNumber2", 23232323);
UrlUtils.updateCurrentSearch(params);
// const data = UrlUtils.buildQuery(params);
// console.log(data);
// console.log(UrlUtils.buildQueryForObject({
//     adfsf: undefined,
//     cddd: null,
//     aaaa: "",
//     abc : "0086",
//     sdfds: "0",
//     name: "gene.yang",
//     nameCn: "杨云",
//     age: 10,
//     state: 0,
//     pState: -1,
//     isShow: false,
//     isEnd: true,
//     dtList: [1, 3, 4],
//     user: {id: 1, name: 'ddd'}
// }));
console.log(UrlUtils.getSearchAll());
console.log(UrlUtils.getSearchAllForObject());

let aa = params.get("bigNumber2");
console.log('===bigNumber1====', aa);
console.log('===bigNumber2====isBigInt', BigIntUtils.isBigInt(aa));
console.log('===bigNumber3====toBigInt', BigIntUtils.toBigInt(aa));
console.log('===bigNumber4====toString', BigIntUtils.toString(aa));
console.log('===bigNumber5====formatMilli', BigIntUtils.formatMilli(aa));
console.log('===bigNumber6====isEqZero', BigIntUtils.isEqZero(aa));
console.log('===bigNumber7====isGtZero', BigIntUtils.isGtZero(aa));
console.log('===bigNumber8====isLtZero', BigIntUtils.isLtZero(aa));
console.log('===bigNumber9====isGtAndEqZero', BigIntUtils.isGtAndEqZero(aa));
console.log('===bigNumber10====isLtAndEqZero', BigIntUtils.isLtAndEqZero(aa));

// import {GUrlTools} from "../src/index";
//
// const value = GUrlTools.buildQuery({
//     adfsf: undefined,
//     cddd: null,
//     aaaa: "",
//     abc : "0086",
//     sdfds: "0",
//     name: "gene.yang",
//     nameCn: "杨云",
//     age: 10,
//     state: 0,
//     pState: -1,
//     isShow: false,
//     isEnd: true,
//     dtList: [1, 3, 4],
//     user: {id: 1, name: 'ddd'}
// }, true);
// console.log('buildQuery ===> ', value);

// console.log('getSearchAllValue ====> ', GUrlTools.getSearchAllValue());
// console.log('getSearchAll ====> ', GUrlTools.getSearchAll());
