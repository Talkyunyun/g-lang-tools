import DateUtils from "../src/util/DateUtils";


console.log('----GDateTools---------------------');
console.log('1', DateUtils.format(1709804236000, DateUtils.FILL));
console.log('2', DateUtils.getCurrentTimestamp());
console.log('2', DateUtils.getCurrentTimestamp(true));
