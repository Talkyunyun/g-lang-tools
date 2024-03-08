import BooleanUtils from "../src/util/BooleanUtils";


// console.log('----isBoolean---------------------');
// console.log('isBoolean', BooleanUtils.isBoolean(23232323));
// console.log('isBoolean', BooleanUtils.isBoolean("2323"));
// console.log('isBoolean', BooleanUtils.isBoolean(2323.23));
// console.log('isBoolean', BooleanUtils.isBoolean("2223323.2344"));
// console.log('isBoolean', BooleanUtils.isBoolean(NaN));
// console.log('isBoolean', BooleanUtils.isBoolean("skdfjdksjf"));
// console.log('isBoolean', BooleanUtils.isBoolean([1,2,3]));
// console.log('isBoolean', BooleanUtils.isBoolean({name: 'ddd'}));
// console.log('isBoolean', BooleanUtils.isBoolean(() => {}));
// console.log('isBoolean', BooleanUtils.isBoolean(undefined));
// console.log('isBoolean', BooleanUtils.isBoolean(null));
// console.log('isBoolean1', BooleanUtils.isBoolean(true));
// console.log('isBoolean1', BooleanUtils.isBoolean(false));


// console.log('----valueOf---------------------');
// console.log('valueOf1', BooleanUtils.valueOf(""));
// console.log('valueOf2', BooleanUtils.valueOf(" "));
// console.log('valueOf3', BooleanUtils.valueOf("SDFSDFDS"));
// console.log('valueOf4', BooleanUtils.valueOf("falsE"));
// console.log('valueOf5', BooleanUtils.valueOf("tRue"));


// console.log('----toString---------------------');
// console.log('toString1', BooleanUtils.toString(false));
// console.log('toString2', BooleanUtils.toString(true));


console.log('-----isFalse--------------------');
console.log('isFalse1', BooleanUtils.isFalse(23232323));
console.log('isFalse2', BooleanUtils.isFalse("2323"));
console.log('isFalse3', BooleanUtils.isFalse(2323.23));
console.log('isFalse4', BooleanUtils.isFalse("234323.2553"));
console.log('isFalse5', BooleanUtils.isFalse(NaN));
console.log('isFalse6', BooleanUtils.isFalse("skdfjdksjf"));
console.log('isFalse7', BooleanUtils.isFalse([1,2,3]));
console.log('isFalse8', BooleanUtils.isFalse({name: 'ddd'}));
console.log('isFalse9', BooleanUtils.isFalse(() => {}));
console.log('isFalse10', BooleanUtils.isFalse(undefined));
console.log('isFalse11', BooleanUtils.isFalse(null));
console.log('isFalse12', BooleanUtils.isFalse(true));
console.log('isFalse13', BooleanUtils.isFalse(false));

console.log('-----isTrue--------------------');
console.log('isTrue', BooleanUtils.isTrue(23232323));
console.log('isTrue', BooleanUtils.isTrue("232343"));
console.log('isTrue', BooleanUtils.isTrue(2323.23));
console.log('isTrue', BooleanUtils.isTrue("23332323.3323"));
console.log('isTrue', BooleanUtils.isTrue(NaN));
console.log('isTrue', BooleanUtils.isTrue("skdfjdksjf"));
console.log('isTrue', BooleanUtils.isTrue([1,2,3]));
console.log('isTrue', BooleanUtils.isTrue({name: 'ddd'}));
console.log('isTrue', BooleanUtils.isTrue(() => {}));
console.log('isTrue', BooleanUtils.isTrue(undefined));
console.log('isTrue', BooleanUtils.isTrue(null));
console.log('isTrue', BooleanUtils.isTrue(true));
console.log('isTrue', BooleanUtils.isTrue(false));
