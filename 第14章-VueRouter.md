# 第14章 VueRouter
[关于Vue中main.js，App.vue，index.html之间关系进行总结](https://www.cnblogs.com/chenleideblog/p/10484554.html)  

## 14.1 感受前端路由
### 14.1.1 HTML页面使用路由
### 14.1.2 模块化开发使用路由

## 14.2 动态路由匹配

- /book/:id 动态值保存到this.$route.params中，可以在组件内使用
- 

### 在同一个路由中可以有多个动态段

|             模式             |     匹配路径      |         $route.params          |
| :--------------------------: | :---------------: | :----------------------------: |
|       /user/:username        |    /user/evan     |       {username:'evan'}        |
| /user/:username/post/:postid | /user/evan/post/1 | {username : 'evan', post_id:1} |



### 14.2.1 查询参数

### 14.2.2 通配符匹配

## 14.3 嵌套路由
## 14.4 命名路由

## 14.5 命名视图
## 14.6 编程式导航
```js
    router.push(location, onComplete?, onAbort?);

```


## 14.6 HTML5 history模式

## 14.8 导航守卫
- 全局守卫
- 路由独享守卫
- 组件内守卫

### 14.8.1 全局守卫
### 14.8.3 组件内守卫

- beforeRouteEnter
- beforeRouteLeave
## 14.9 延迟加载路由


