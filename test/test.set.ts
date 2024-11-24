import SetUtils from "../src/util/SetUtils";

const map: Set<any> = new Set<any>();
map.add("age");
map.add("name");
map.add("isHas");
map.add("cc");
map.add("list");
console.log(map);
console.log(SetUtils.isSet(map));

const value = SetUtils.toString(map);
console.log(value);
console.log(SetUtils.toSet(value));
