<template>
  <div class="headerCart">
    <a href="javascript:;" @click.prevent="handleCart"></a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderCart",
  components: {},
  computed: {
    // cart模块带有命名空间
    ...mapGetters("cart", {
      cartItemCount: "itemsCount",
    }),
  },
  methods: {
    handleCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
