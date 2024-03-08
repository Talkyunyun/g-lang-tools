
import CacheUtils from "../src/util/CacheUtils";

const cache = CacheUtils.getInstance().setAppId("MDAP_FEEDBACK").setEnv("dev").setEngine(localStorage);


// console.log('-----set--------------------');
cache.setNumber('number', 12333);
cache.setString('string', "gene");
cache.setBoolean('boolean1', false);
cache.setBoolean('boolean2', true);
cache.setList('list', [1,3,2]);
cache.setObject('object', {name:'dddd'});


let aa = new Map<string, any>();
aa.set("name", "dddd");
aa.set("age", 23);

cache.setMap('map', aa);


// console.log('-----get--------------------');
console.log('number', cache.getNumber('number'));
console.log('string', cache.getString('string'));
console.log('boolean1', cache.getBoolean('boolean1'));
console.log('boolean2', cache.getBoolean('boolean2'));
console.log('list', cache.getList('list'));
console.log('object', cache.getObject('object'));
console.log('map', cache.getMap('map'));


console.log('-----remove--------------------');
// cache.removeAll();

