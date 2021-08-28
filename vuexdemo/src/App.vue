<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

Vue.component("ButtonCounter", {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    handleClicke() {
      this.$store.commit("increment");
    },
  },
  template:'<button @click="handleclick">You click me {{count}} times.</button>'
});

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  store,
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
