import {GNet} from "../src";

const client = GNet.getInstance({
    baseURL: "https://test-api.gene.work",
    timeout: 10000
});
client.createNet().setUrl("/getAppConfig?lang=cn")
    .setMethod(GNet.METHOD.POST)
    .setQuery({
        age: 23, name: "dsfsdf",
        identifier: "xxxx+xxx/hbiJvUAZ/2G1v/xxx/xxx+/cuM/xxxx="
    })
    .setBody({
        appId: "cn.gene.user",
        identifier: "dddd"
    }).send();

