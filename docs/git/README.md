# Git 规范

Git 规范分为 Git Workflow 规范和 Git Commit 规范。

## Git Workflow 规范

![branches](/img/branches.svg)

首先，项目至少存在两个长期分支，分别是 main、develop 分支；其次，项目可以存在两种短期分支，分别是 feature、hotfix 分支。在项目不大、团队开发成员小于 5 人的情况下，线上只需维护 main、develop 分支即可，其中 main 分支为保护分支，只做合并和生产环境使用，合并分支时需打上标签且注明版本号与版本功能，develop 用于团队成员的日常开发，feature、hotfix 分支根据实际情况决定是否在线上使用，本地开发可以自由使用，建议根据项目任务卡片编号进行命名。

## Git Commit 规范

### 公式

``` 

<type>(<scope>): <subject> # 标题行
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

上述公式分为三个部分：

* 标题行：必填，描述 commit 内容与类型
* 内容行：选填，具体描述为什么开发、开发了什么、开发的思路
* 底部行：选择，任务卡片链接、参考文献、注意事项
* scope：commit 影响的范围，例如：route，component，utils，build
* subject：commit 的概述

### 类型

|表头|表头|
|----|----|
|feat|新功能、新特性|
|fix|修复缺陷|
|perf|修改代码，以提高性能|
|refactor|代码重构（重构，在不影响代码内部行为、功能下的代码修改）|
|docs|文档修改|
|style|代码格式修改, 注意不是 css 修改（例如分号修改）|
|test|测试用例新增、修改|
|build|影响项目构建或依赖项修改|
|revert|恢复上一次提交|
|ci|持续集成相关文件修改|
|chore|其他修改（不在上述类型中的修改）|
|release|发布新版本|
|workflow|工作流相关文件修改|

### 示例

``` 

feat: 后台 - 订单管理
feat(order): 接口 - 新增创建订单接口
feat(common): #10 前端 - 顶部导航栏组件封装
```

### 自动化约束

因为人类总有懒惰、懈怠、随意、守旧的时候，所以需要工具来对 Git Commit 进行统一的自动化约束。

#### Web 前端项目

``` 

npm i -D husky
```

在 `package.json` 加上下面代码：

``` json
"husky": {
  "hooks": {
    // Git Commit 之前执行代码风格检查
    "pre-commit": "npm run lint",
    // 检查 Git Commit 
    "commit-msg": "node script/verify-commit.js",
    // 推送之前运行测试单元
    "pre-push": "npm test"
  }
}
```

新建文件 `verify-commit.js` ，输入下面代码：

``` js
const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs')
    .readFileSync(msgPath, 'utf-8')
    .trim()

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
    console.log()
    console.error(`
        不合法的 commit 消息格式。
        请查看 git commit 提交规范：https://sebastiankennedy.github.io/project-specification/git/
    `)

    process.exit(1)
}
```

#### Web 后端项目（PHP）
