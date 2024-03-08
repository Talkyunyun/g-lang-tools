
import {GCookieTools} from "../src/index";


console.log('----GCookieTools---------------------');
GCookieTools.set('name', 'dddd');
GCookieTools.set('age', 12);


console.log('isBoolean', GCookieTools.get('name'));
console.log('isBoolean', GCookieTools.get('age'));
