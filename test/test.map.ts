import MapUtils from "../src/util/MapUtils";


const map: Map<string, any> = new Map<string, any>();
map.set("age", 12);
map.set("name", "gene");
map.set("isHas", false);
map.set("cc", undefined);
map.set("list", [1,2,3]);
map.set("object", {"age": 12});

console.log(MapUtils.isMap(map));
console.log(MapUtils.toString(map));
console.log(MapUtils.toMap("ddddd"));
