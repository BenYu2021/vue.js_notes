<template>
  <div>
    <h3>图书列表</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="'/book/' + book.id">{{ book.title }}</router-link>
      </li>
    </ul>
    <!-- Book组件的渲染 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Books from "@/assets/books";

export default {
  data() {
    return {
      message: "hello vue.js",
      books: Books,
    };
  },
};
</script>