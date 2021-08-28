# 第 13 章 Vue Cli

## 13.1 简介

Vue Cli 三个组件：

1. CLI（@vue/cli）
2. CLI 服务（@vue/servie）
  - CLI服务是一个开发环境依赖。
  - 一个npm包，本地安装到@vue/cli创建的每个项目中
  - CLI服务
3. CLI 插件

## 13.2 安装
```
    # -g 全局
    npm uninstall vue-cli -g
    npm install -g @vue/cli

    vue --version
```

## 13.3 创建项目

    # 项目名不能大写
    vue create helloword

    Use history mode for router? (Requires proper server setup for index fallback in production)

    router
        * hash
            hash —— 即地址栏 URL 中的 # 符号（此 hash 不是密码学里的散列运算）。比如这个 URL：http://www.abc.com/#/hello hash 的值为 #/hello。
        * history
            history —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。
            因此可以说，hash 模式和 history 模式都属于浏览器自身的特性，Vue-Router 只是利用了这两个特性（通过调用浏览器提供的接口）来实现前端路由.

## 13.4 项目结构


## 13.6 package.json

    NPM安装依赖模块
    # 需要生产环境
    -S --save
    npm install element-ui -S
    -D --save-dev

```javascript
{
  "name": "helloword",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^2.6.11",
    "vue-router": "^3.2.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "vue-template-compiler": "^2.6.11"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}

```
