<template lang="pug">
.wrapper
  .calculate__header
    include ../pug/header.pug
  .calculate__body 
    include ../pug/body.pug
  .calculate__footer
    include ../pug/footer.pug
</template>

<style lang="scss">
// RESET ===================================
@import "@/style/reset.scss";
// MAIN STYLE - CONTAINER ==================
@import "@/style/main.scss";
// HEADER  =================================
@import "@/style/header.scss";
// LEFT BODY ===============================
@import "@/style/body-left.scss";
// RIGHT BODY ==============================
@import "@/style/body-right.scss";
// FOOTER  =================================
@import "@/style/footer.scss";
</style>
