<template>
  <div id="app">
    <!-- <Hello /> -->

    <p>
      <router-link to="/news" tag="li">新闻</router-link>
      <router-link to="/books" tag="li">图书</router-link>
      <router-link to="/videos" tag="li">视频</router-link>
      <!-- 动态段 -->
      <router-link to="/book/1" tag="li">图书1</router-link>
      <router-link to="/book/2" tag="li">图书2</router-link>  
      <!-- 查询参数 -->
      <router-link to="/book?id=1" tag="li">图书query 1</router-link>
      <router-link to="/book?id=2" tag="li">图书query 2</router-link>
    </p>
    <!-- 路由出口，路由匹配到的组件将在这里渲染 -->
    <router-view></router-view>
  </div>
</template>


<script>
import Hello from "@/components/Hello";

export default {
  name: "app",
  components: {
    Hello,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
