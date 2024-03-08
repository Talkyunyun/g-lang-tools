/**
 *
 * Network error
 *
 * @author Gene Yang<729170207@qq.com>
 * @date  2024-03-07 15:02
 * @link  https://github.com/Talkyunyun <https://www.tool-box.vip>
 * @since 2.0
 */
export default class NetworkError extends Error {
    public httpCode?: number;
    public isNetworkError: boolean = false;

    public constructor(isNetworkError: boolean, httpCode?: number, message?: any) {
        super(message);
        this.httpCode = httpCode;
        this.isNetworkError = isNetworkError;
    }
}
