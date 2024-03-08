/**
 * 文件处理工具
 *
 * @author  : Gene Yang <729170207@qq.com>
 * @date    : 2019/06/01
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */
import GEncryptTools from "./GEncryptTools";

export default class GFileTools {

    /**
     * FILE to blob
     * @param file
     * @deprecated 已作废，请使用2.0工具
     */
   public static getBlobByFile(file: File): Promise<any> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = function() {
                if (this.result) {
                    // @ts-ignore
                    resolve(new Blob([new Uint8Array(this.result)]));
                }
            };

            reader.onerror = function(err) {
                reject('解析失败, err: ' + err);
            };

            reader.readAsArrayBuffer(file);
        });
    }

    /**
     * 根据base64获取blob内容
     * @param data
     * @param mimeType
     * @deprecated 已作废，请使用2.0工具
     */
    public static getBlobByBase64(data: string, mimeType: string): Blob {
        let arr   = data.split(','),
            bStr  = atob(arr[1]),
            len   = bStr.length,
            u8Arr = new Uint8Array(len);

        while (len--) {
            u8Arr[len] = bStr.charCodeAt(len);
        }

        return new Blob([u8Arr], {type: mimeType});
    }

    /**
     * 根据base64获取file对象
     * @param data
     * @deprecated 已作废，请使用2.0工具
     */
    public static getFileByBase64(data: string): File | null {
        const dataInfo = data.split(',');
        if (dataInfo.length < 1) {
            return null;
        }
        const slashSeat = dataInfo[0].indexOf(':');
        const semicolon = dataInfo[0].indexOf(';');
        const mimeType  = dataInfo[0].substring(slashSeat + 1, semicolon);
        const extName   = mimeType.substring(mimeType.indexOf('/') + 1);

        return new File([this.getBlobByBase64(data, mimeType)],
            GEncryptTools.getUniqueSu() + '.' + extName, {
            type: mimeType
        });
    }

    /**
     * 文件大小转换/单位换算
     * @param value 文件大小
     * @param pointLength 转换完，保留几位小数（选填，默认保存2位）
     * @return {string}
     * @deprecated 已作废，请使用2.0工具
     */
    public static formatSize(value: number, pointLength: number = 2): string {
        let unit;
        const units = [ 'B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y' ];
        while ( (unit = units.shift()) && value > 1024 ) {
            value = value / 1024;
        }

        // @ts-ignore
        return (unit === 'B' ? size : size.toFixed( pointLength === undefined ? 2 : pointLength)) + unit;
    }
}
