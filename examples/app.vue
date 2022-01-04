<template>
  <div id="app">
    <zj-button></zj-button>
  </div>
</template>

<script>
import ZjButton from "../packages/components/zj-button/index.vue";

export default {
  name: "App",
  components: { ZjButton },
};
</script>

<style>
#app {
  padding: 100px;
  text-align: center;
}
</style>
