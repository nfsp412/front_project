// 使用xxx.js的内容
import * as m1 from "./xxx.js";

console.log(`output->m1.PI`, m1.PI);

let res = m1.sum(2, 3);
console.log(`output->res`, res);

let p1 = new m1.Person("zs", 22);
p1.eat("hot pot");
