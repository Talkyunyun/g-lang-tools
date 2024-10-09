
import GBooleanTools from "./lib/GBooleanTools";
import GCookieTools from "./lib/GCookieTools";
import GCacheTools from "./lib/GCacheTools";
import GDateTools from "./lib/GDateTools";
import GDeviceTools from "./lib/GDeviceTools";
import GEncryptTools from "./lib/GEncryptTools";
import GFileTools from "./lib/GFileTools";
import GHtmlTools from "./lib/GHtmlTools";
import GListTools from "./lib/GListTools";
import GMapTools from "./lib/GMapTools";
import GNumberTools from "./lib/GNumberTools";
import GStringTools from "./lib/GStringTools";
import GUrlTools from "./lib/GUrlTools";
import GEmptyTools from "./lib/GEmptyTools";

export {
    GBooleanTools, GCookieTools, GCacheTools,
    GDateTools, GDeviceTools, GEncryptTools,
    GFileTools, GHtmlTools, GListTools, GMapTools,
    GNumberTools, GStringTools, GUrlTools, GEmptyTools
}

/************ [以下导出为2.0新增，上面的将在后续版本中逐渐移除] ************/

export {default as GBooleanUtils} from "./util/BooleanUtils";
export {default as GCacheUtils} from "./util/CacheUtils";
export {default as GClientUtils} from "./util/ClientUtils";
export {default as GCookieUtils} from "./util/CookieUtils";
export {default as GDateUtils} from "./util/DateUtils";
export {default as GEncryptUtils} from "./util/EncryptUtils";
export {default as GFileUtils} from "./util/FileUtils";
export {default as GFunctionUtils} from "./util/FunctionUtils";
export {default as GHtmlUtils} from "./util/HtmlUtils";
export {default as GHttpUtils} from "./util/HttpUtils";
export {default as GListUtils} from "./util/ListUtils";
export {default as GMapUtils} from "./util/MapUtils";
export {default as GNullUtils} from "./util/NullUtils";
export {default as GNumberUtils} from "./util/NumberUtils";
export {default as GObjectUtils} from "./util/ObjectUtils";
export {default as GStringUtils} from "./util/StringUtils";
export {default as GUndefinedUtils} from "./util/UndefinedUtils";
export {default as GUrlUtils} from "./util/UrlUtils";


/********* [Net client] ********/
export {default as GNetClient} from "./net";

import NetworkError from "./error/NetworkError";
import { OS_ENUM, NETWORK_METHOD_ENUM, BOOLEAN_ENUM } from "./enum";

export default {NetworkError, OS_ENUM, NETWORK_METHOD_ENUM, BOOLEAN_ENUM};
