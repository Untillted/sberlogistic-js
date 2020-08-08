<template lang="pug">
.wrapper
  include ../pug/header.pug
  .calculate__body        
    .calculate__container
      .body__content  
        .body__col.left 
          include ../pug/inputWeight.pug
          include ../pug/inputCourier.pug
          include ../pug/inputSum.pug
        .body__col.right
          include ../pug/inputMore.pug
        p.body__out Максимальная объявленная стоимость посылок в Сберлогистике 150 000 ₶
  .calculate__footer
    .calculate__container  
      span будет стоить всего
      span 449
      img(src="../assets/item2.png")
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
</style>
