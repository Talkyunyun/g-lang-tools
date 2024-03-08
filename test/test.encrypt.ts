import EncryptUtils from "../src/util/EncryptUtils";


console.log('md5', EncryptUtils.md5("123456"));
console.log('sha1', EncryptUtils.sha1("123456"));
console.log('getUniqueSu', EncryptUtils.getUniqueValue());


let aa = EncryptUtils.signForObject({
    name: "gene.yang",
    age: "23"
}, "333333333");

let ddd = new Map<string, string>();
ddd.set("name", "gene.yang");
ddd.set("age", "23");

console.log('====', aa, EncryptUtils.sign(ddd, "333333333"));


