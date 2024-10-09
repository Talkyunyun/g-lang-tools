import NetClient, {NET_METHOD} from "../src/net";

const client = NetClient.getInstance({
    baseURL: "https://mdap-fb-api.huolala.work",
    timeout: 10000
}, "sdfsfsdfdsfdsf");

const req = client.createNet().setUrl("/getAppConfig?lang=cn")
    .setMethod(NET_METHOD.GET)
    .setQuery({
        age: 23, name: "dsfsdf",
        identifier: "gCB91mLY8BC0hjvQjnnubjIAm8iCedVL6u5vCZCFlfhygpuPU8qWFYw+qlYhCzVHIFuIa0rwiGb9Mb0M2i/hbiJvUAZ/2G1v/sX9m/9xmUwlbAJc12kL7j6ftYqs19rqrAbDGoDaHAltDIgM+/cuM/NyfwtCz9RqllcbOt09GGE="
    })
    .setBody({
        appId: "com.huolala.drive",
        identifier: "dddd"
    });

req.send();
req.send();
req.send();
req.send();
setTimeout(() => {
    NetClient.cancelAllRequests();
}, 10);

