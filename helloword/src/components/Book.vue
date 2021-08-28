<template>
  <div>
    <!-- <h3>图书id:{{ $route.params.id }}</h3>
    <h3>图书query id:{{ $route.query.id }}</h3> -->

    <p>图书id:{{ book.id }}</p>
    <p>书名:{{ book.title }}</p>
    <p>说明:{{ book.desc }}</p>
  </div>
</template>

<script>
import Books from "@/assets/books";

export default {
  data() {
    return {
      message: "hello vue.js",
      book: {},
    };
  },
  methods: {
    setBook(book) {
      this.book = book;
    },
  },
  // created() {
  //   this.book = Books.find((item) => item.id == this.$route.params.id);
  // },
  // watch: {
  //   // $route对象监听器
  //   $route(to) {
  //     this.book = Books.find((item) => item.id == to.params.id);
  //   },
  //   // 监听开始后立即执行，可以去掉created
  //   // immediate: true,
  // },

  // watch: {
  //   // $route对象监听器
  //   $route: {
  //     handler: function (to) {
  //       this.book = Books.find((item) => item.id == to.params.id);
  //     },
  //   },
  //   // 监听开始后立即执行，可以去掉created
  //   immediate: true,
  // },

  beforeRouteEnter(to, from, next) {
    let book = Books.find((item) => item.id == to.params.id);
    next((vm) => vm.setBook(book));
  },
  beforeRouuteUpdate(to, from, next) {
    this.book = null;
    this.book = Books.find((item) => (item.id == to.params.id));
    next();
  },
};
</script>