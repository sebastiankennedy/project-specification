# HTML 规范

基于 W3C、苹果开发者等官方文档，并结合团队业务和开发过程中总结的规范约定，让页面 HTML 代码更具语义性。以下规范是团队约定的内容，必须严格遵循。

## HTML 代码规范

### DOCTYPE

HTML 文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

``` html
<!DOCTYPE html>
```

### LANG

Lang 属性的取值应该遵循互联网工程任务组–IETF（The Internet Engineering Task Force）制定的关于语言标签的文档 [BCP 47 - Tags for Identifying Languages](http://tools.ietf.org/html/bcp47)

``` html
<!-- 推荐使用，表示「简体, 中国大陆」 -->
<html lang="cmn-Hans-CN">

<!-- 考虑兼容 -->
<html lang="zh-CN">
```

### CHARSET

统一使用 "UTF-8" 编码

``` html
<meta charset="UTF-8">
```

### 元素、属性、特殊字符

* 所有具有开始标签和结束标签的元素都要写上起止标签。
* 空元素标签都不加 "/" 字符。
* HTML 元素、元素属性统一使用小写。
* HTML 元素属性值使用双引号写法。
* HTML 元素属性值不使用省略写法。
* 无需为 CSS、JS 指定类型属性，HTML 5 默认包含
* 特殊字符使用引用实现

``` html
<!--  HTML 元素、元素属性统一使用小写 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<!-- 所有具有开始标签和结束标签的元素都要写上起止标签 -->
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>

<!-- 空元素标签都不加 "/" 字符 -->
<br>

<!-- HTML 元素属性值不使用省略写法 -->
<input type="radio" name="name" checked="checked" readonly="readonly" disable="disable">

<!-- 无需为 CSS、JS 指定类型属性，HTML 5 默认包含 -->
<link rel="stylesheet" href="">
<script src=""></script>

<!-- 特殊字符必须使用字符引用实现，等同于「more>>」 -->
<a href="#">more&gt;&gt;</a>
```

### 代码缩进、代码嵌套

* 统一使用四个空格进行代码缩进。
* 元素嵌套规范，每个块状元素独立一行，内联元素可选。
* 段落元素与标题元素只能嵌套内联元素。

``` html
<div>
    <h1></h1>
    <p></p>
</div>

<p><span></span><span></span></p>
```

## HTML 注释规范

### 单行注释

``` html
<!-- Comment Text -->
<div>...</div>
```

### 多行注释

``` html
<!--
    <div>...</div>
    <div>...</div>
    <div>...</div>
-->
```

### 模块注释

释内容前后各一个空格字符，<!-- S Comment Text --> 表示模块开始，<!-- E Comment Text --> 表示模块结束，模块与模块之间相隔一行。

``` html
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->

<!-- S Comment Text B -->
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

## HTML 文件模板

HTML 模版指的是团队使用的初始化 HTML 文件，里面会根据不同平台、框架而采用不一样的设置，一般主要不同的设置就是 meta 标签的设置，以下是 Web PC 和 Web App 的 HTML 模版。

``` html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <title>HTML5 标准模版</title>
</head>

<body>

</body>

</html>
```

### Web PC 模板

``` html
<!DOCTYPE html>Î
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="your keywords">
    <meta name="description" content="your description">
    <meta name="author" content="author, email address">
    <meta name="robots" content="index, follow">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">
    <meta name="renderer" content="ie-stand">
    <title>Web PC HTML5 模版</title>
    ​
    <!-- S DNS预解析 -->
    <link rel="dns-prefetch" href="">
    <!-- E DNS预解析 -->
    ​
</head>

<body>
    ​
</body>

</html>
```

### Web App 模板

``` html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no">
    <title>Web App HTML5 模版</title>

    <!-- S DNS预解析 -->
    <link rel="dns-prefetch" href="">
    <!-- E DNS预解析 -->

</head>

<body>
    ​
</body>

</html>
```
