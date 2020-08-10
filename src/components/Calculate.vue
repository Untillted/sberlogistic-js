<template lang="pug">
// Формально это vue-компонент. Но только формально.
// Здесь не используется vue, только для формирования DOM - и дальше js коде который с ним работает.
// При таком подходе vue и не нужен
// в этом компонент не хватает секции script в которой должна была написана вся логика
// а в template - вывод состояния компонента
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
