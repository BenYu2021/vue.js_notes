<template>
  <div class="headerSearch">
      <input type="search" v-model.trim="keyword">
      <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      if (this.keyword != this.$route.query.wd) {
        this.$router.push({ path: "/search", query: { wd: this.keyword } });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
