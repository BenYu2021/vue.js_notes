<template>
  <div>
    <h3>图书id:{{ $route.params.id }}</h3>
    <h3>图书query id:{{ $route.query.id }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello vue.js",
    };
  },
};
</script>