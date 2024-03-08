

# 开发手册
> 本文档只供开发预览，不会发布至npmjs库

## 开发流程

1、构建&编译
```
yarn build
```

## 发布流程
> 发布时，一定要进入到dist目录发布
```
# 1. 登录
npm login

# 2. 发布
npm publish
```

## 其他流程
```
# 删除版本
npm deprecate [packageName]@[version] "delete desc"
```
