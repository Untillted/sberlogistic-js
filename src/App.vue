<template lang="pug">
  <div id="app">
    <Calculate/>
  </div>
</template>

<script>
import "@/js/calculate.js";
import "@/js/popup.js";
import "@/js/conditions.js";
import Calculate from "@/components/Calculate.vue";
export default {
  name: "App",
  components: {
    Calculate,
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: "Lora", serif;
  color: #000;
  font-size: 1.1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
