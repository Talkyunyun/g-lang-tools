
# g-lang-tools

![install_size](https://packagephobia.com/badge?p=g-lang-tools)
![npm_downloads](https://img.shields.io/npm/dm/g-lang-tools.svg?style=flat-square)
![npm version](https://img.shields.io/npm/v/g-lang-tools.svg?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)

## 简介

> 该库是基于TypeScript开发，主要集成了日常开发常用的工具，让开发更便捷。提供类型安全的实用工具函数，涵盖字符串、数组、对象、日期、加密、网络请求等常用功能。

## 特性

- 🚀 **TypeScript支持**: 完整的类型定义，提供更好的开发体验
- 📦 **模块化设计**: 按需导入，减少包体积
- 🛡️ **类型安全**: 严格的类型检查，减少运行时错误
- 🌐 **浏览器兼容**: 支持现代浏览器
- 📝 **完整文档**: 详细的API文档和使用示例

## 安装

```bash
# npm
npm install g-lang-tools

# yarn  
yarn add g-lang-tools

# pnpm
pnpm add g-lang-tools
```

## 快速开始

```typescript
import { GStringUtils, GDateUtils, GHttpUtils } from 'g-lang-tools';

// 字符串工具
GStringUtils.isBlank('  '); // true
GStringUtils.humpToLine('userName'); // 'user_name'

// 日期工具
GDateUtils.format(new Date(), 'YYYY-MM-DD'); // '2024-03-07'

// HTTP请求
GHttpUtils.get('https://api.example.com/data')
  .then(response => console.log(response));
```

## API 文档

### 字符串工具 (GStringUtils)

```typescript
// 判断字符串是否为空
GStringUtils.isBlank(content?: string | null): boolean
GStringUtils.isNotBlank(content?: string | null): boolean

// 字符串转换
GStringUtils.humpToLine(value: string): string  // 驼峰转下划线
GStringUtils.lineToHump(value: string): string  // 下划线转驼峰

// 类型检查
GStringUtils.isString(value: any): boolean
GStringUtils.contain(value: string, target: string): boolean
```

### 数组工具 (GListUtils)

```typescript
// 数组操作
GListUtils.isEmpty(list: any[]): boolean
GListUtils.isNotEmpty(list: any[]): boolean
GListUtils.remove(list: any[], item: any): any[]
GListUtils.unique(list: any[]): any[]
```

### 对象工具 (GObjectUtils)

```typescript
// 对象操作
GObjectUtils.isEmpty(obj: object): boolean
GObjectUtils.deepClone(obj: any): any
GObjectUtils.merge(target: object, source: object): object
```

### 日期工具 (GDateUtils)

```typescript
// 日期格式化和操作
GDateUtils.format(date: Date, pattern: string): string
GDateUtils.parse(dateString: string, pattern: string): Date
GDateUtils.addDays(date: Date, days: number): Date
```

### HTTP工具 (GHttpUtils)

```typescript
// HTTP请求
GHttpUtils.get(url: string, config?: any): Promise<any>
GHttpUtils.post(url: string, data?: any, config?: any): Promise<any>
GHttpUtils.put(url: string, data?: any, config?: any): Promise<any>
GHttpUtils.delete(url: string, config?: any): Promise<any>
```

### 加密工具 (GEncryptUtils)

```typescript
// 加密解密
GEncryptUtils.md5(content: string): string
GEncryptUtils.base64Encode(content: string): string
GEncryptUtils.base64Decode(content: string): string
```

## 完整工具列表

| 工具类 | 说明 | 主要功能 |
|--------|------|----------|
| GStringUtils | 字符串工具 | 验证、转换、格式化 |
| GListUtils | 数组工具 | 操作、过滤、去重 |
| GObjectUtils | 对象工具 | 深拷贝、合并、验证 |
| GDateUtils | 日期工具 | 格式化、计算、解析 |
| GNumberUtils | 数字工具 | 验证、格式化、计算 |
| GBooleanUtils | 布尔工具 | 类型检查、转换 |
| GHttpUtils | HTTP工具 | 网络请求、响应处理 |
| GEncryptUtils | 加密工具 | 加密、解密、哈希 |
| GUrlUtils | URL工具 | 解析、构建、验证 |
| GCookieUtils | Cookie工具 | 读取、设置、删除 |
| GCacheUtils | 缓存工具 | 本地存储、会话存储 |
| GFileUtils | 文件工具 | 文件操作、类型检查 |
| GHtmlUtils | HTML工具 | DOM操作、转义 |

## 浏览器支持

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
|:---:|:---:|:---:|:---:|:---:|
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## 开发

```bash
# 克隆项目
git clone https://github.com/Talkyunyun/g-lang-tools.git

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建项目
npm run build

# 类型检查
npm run typecheck
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

[MIT](LICENSE)
