# 📦 npm 测试包发布策略指南

### 操作步骤
#### 发布 Beta 测试版
```bash
# 更新到 beta 版本
npm version prerelease --preid=beta --no-git-tag-version
# 结果：3.5.3 → 3.5.4-beta.0

# 发布 beta 版本
npm publish --tag beta
```

#### 发布正式版本
```bash
# 从 beta 版本升级到正式版本
npm version patch --no-git-tag-version
# 结果：3.5.4-beta.1 → 3.5.4

npm publish
# 默认发布到 latest tag
```
---
