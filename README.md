## 项目介绍

> 通常我们使用Vue就是直接vue-cli搭建一个项目开始写，最近突发奇想，能不能在AMD环境下写Vue，于是就有了这个demo

首先是使用spring boot快速搭建一个项目，后台路由到index.html，其他就交给前端了。

初始搭建参考：[spring-boot入门（三）前后端分离使用HTML作为展示视图](https://blog.csdn.net/qq447995687/article/details/78760546)

### 引入element-ui

```javascript
'ELEMENT': URL_LIB + 'element-ui/index'
```

注意：在加载ELEMENT插件的时候，必须是大写。

原因：因为在element中使用的是具名模块，定义的模块名叫做ELEMENT，所以我们在requirejs加载这个模块的时候，也必须和这个名字一致，才能找到对应的js