/**
 *
 * File tools
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
import EncryptUtils from "./EncryptUtils";

export default class FileUtils {

    /**
     * File to blob
     * @param file
     */
    public static fileToBlob(file: File): Promise<Blob> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = function() {
                if (this.result) {
                    // @ts-ignore
                    resolve(new Blob([new Uint8Array(this.result)]));
                }
            };

            reader.onerror = function(err) {
                reject('Parse fail, err: ' + err);
            };

            reader.readAsArrayBuffer(file);
        });
    }

    /**
     * 根据base64获取blob内容
     * @param data
     * @param mimeType
     */
    public static base64ToBlob(data: string, mimeType: string): Blob {
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
     */
    public static base64ToFile(data: string): File | undefined {
        const dataInfo = data.split(',');
        if (dataInfo.length < 1) {
            return undefined;
        }
        const slashSeat = dataInfo[0].indexOf(':');
        const semicolon = dataInfo[0].indexOf(';');
        const type      = dataInfo[0].substring(slashSeat + 1, semicolon);
        const extName   = type.substring(type.indexOf('/') + 1);

        return new File([this.base64ToBlob(data, type)], EncryptUtils.getUniqueValue() + '.' + extName, {type});
    }

    /**
     * 文件大小转换/单位换算
     * @param value 文件大小
     * @param pointLength 转换完，保留几位小数（选填，默认保存2位）
     * @return {string}
     */
    public static format(value: number, pointLength: number = 2): string {
        let unit;
        const units = [ 'B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y' ];
        while ( (unit = units.shift()) && value > 1024 ) {
            value = value / 1024;
        }

        // @ts-ignore
        return (unit === 'B' ? value : value.toFixed( pointLength === undefined ? 2 : pointLength)) + unit;
    }
}
