<template lang="pug">
  <div id="app">
    <Calculate/>
  </div>
</template>

<script>
import Calculate from "@/components/Calculate.vue";
export default {
  name: "App",
  components: {
    Calculate,
  },
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
