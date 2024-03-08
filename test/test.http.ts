import HttpUtils from "../src/util/HttpUtils";


HttpUtils.getInstance({baseURL: "", timeout: 100, fileUploadTimeout: 23}).get<any>("").then((res) => {
    console.log('dddd', res);
}).catch((e) => {
    console.log('dddd', e);
});
