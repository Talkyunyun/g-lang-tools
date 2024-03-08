import ListUtils from "../src/util/ListUtils";


console.log('list1', ListUtils.isList([1,2,3]));
console.log('list2', ListUtils.isEmpty([1,2,3]));
console.log('list3', ListUtils.isEmpty([]));

// @ts-ignore
console.log('list4', ListUtils.isEmpty(false));


console.log('aaaaa', ListUtils.join([1,2,3], ""))
console.log('aaaaa', ListUtils.join([{name: "ddd"}, {age: 12}], ","))
