<template>
  <div class="header">
    <img src="@/assets/images/logo.png" />
    <HeaderSearch />
    <HeaderCart />
    <span v-if="!user"
      >您好，请<router-link to="/login">登录</router-link> 免费<router-link
        to="/register"
        >注册</router-link
      ></span
    >
    <span v-else
      >欢迎您，{{ user.useranme }},
      <a href="javascript:;" @click="/logout">退出登录</a></span
    >
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  components: {
    HeaderSearch,
    HeaderCart,
  },
  computed: {
    // usrer模块带有命名空间
    ...mapSatte("user", [
      // 将this.user 映射为this.$store.state.user.user
      "user",
    ]),
  },
  methods: {
    logout() {
      this.deleteUser();
    },
    ...mapMutations("user", [
      // 将this.user映射为this.$store.commit('user/deleteUser')
      "deleteUser",z
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
