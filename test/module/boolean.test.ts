import {GBooleanUtils} from "g-lang-tools";

console.log('----isBoolean---------------------');
console.log('isBoolean', GBooleanUtils.isBoolean(23232323));
console.log('isBoolean', GBooleanUtils.isBoolean("2323"));
console.log('isBoolean', GBooleanUtils.isBoolean(2323.23));
console.log('isBoolean', GBooleanUtils.isBoolean("2223323.2344"));
console.log('isBoolean', GBooleanUtils.isBoolean(NaN));
console.log('isBoolean', GBooleanUtils.isBoolean("skdfjdksjf"));
console.log('isBoolean', GBooleanUtils.isBoolean([1,2,3]));
console.log('isBoolean', GBooleanUtils.isBoolean({name: 'ddd'}));
console.log('isBoolean', GBooleanUtils.isBoolean(() => {}));
console.log('isBoolean', GBooleanUtils.isBoolean(undefined));
console.log('isBoolean', GBooleanUtils.isBoolean(null));
console.log('isBoolean1', GBooleanUtils.isBoolean(true));
console.log('isBoolean1', GBooleanUtils.isBoolean(false));


console.log('----toString---------------------');
console.log('toString1', GBooleanUtils.toString(false));
console.log('toString2', GBooleanUtils.toString(true));


console.log('-----isFalse--------------------');
console.log('isFalse1', GBooleanUtils.isFalse(23232323));
console.log('isFalse2', GBooleanUtils.isFalse("2323"));
console.log('isFalse3', GBooleanUtils.isFalse(2323.23));
console.log('isFalse4', GBooleanUtils.isFalse("234323.2553"));
console.log('isFalse5', GBooleanUtils.isFalse(NaN));
console.log('isFalse6', GBooleanUtils.isFalse("skdfjdksjf"));
console.log('isFalse7', GBooleanUtils.isFalse([1,2,3]));
console.log('isFalse8', GBooleanUtils.isFalse({name: 'ddd'}));
console.log('isFalse9', GBooleanUtils.isFalse(() => {}));
console.log('isFalse10', GBooleanUtils.isFalse(undefined));
console.log('isFalse11', GBooleanUtils.isFalse(null));
console.log('isFalse12', GBooleanUtils.isFalse(true));
console.log('isFalse13', GBooleanUtils.isFalse(false));

console.log('-----isTrue--------------------');
console.log('isTrue', GBooleanUtils.isTrue(23232323));
console.log('isTrue', GBooleanUtils.isTrue("232343"));
console.log('isTrue', GBooleanUtils.isTrue(2323.23));
console.log('isTrue', GBooleanUtils.isTrue("23332323.3323"));
console.log('isTrue', GBooleanUtils.isTrue(NaN));
console.log('isTrue', GBooleanUtils.isTrue("skdfjdksjf"));
console.log('isTrue', GBooleanUtils.isTrue([1,2,3]));
console.log('isTrue', GBooleanUtils.isTrue({name: 'ddd'}));
console.log('isTrue', GBooleanUtils.isTrue(() => {}));
console.log('isTrue', GBooleanUtils.isTrue(undefined));
console.log('isTrue', GBooleanUtils.isTrue(null));
console.log('isTrue', GBooleanUtils.isTrue(true));
console.log('isTrue', GBooleanUtils.isTrue(false));
