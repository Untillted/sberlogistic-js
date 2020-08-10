document.addEventListener("DOMContentLoaded", () => {
  // INPUTS =====================================

  const inputs = document.querySelectorAll("input");

  // VALUE OF INPUT ===========================

  const weight = document.querySelectorAll(".weight__input_active");
  const pice = document.querySelector(".pice_input");
  const insurance = document.querySelector(".sum_input");
  const courier = document.querySelector(".courier__input_active");

  // OUT OF INPUT ================================

  const outFooterText = document.querySelector(".footer__text");
  const outFooterResult = document.querySelector(".footer__res");

  // CONDITIONS ===================================

  let weightValue = 0;
  let courierValue = 0;
  let insuranceValue = 0;

  for (let input of inputs) {
    input.addEventListener("input", () => {
      let value = input.value;
      let name = input.name;
      if (name == `weight` && value == 5) {
        weightValue = +weight[0].value;
      } else if (name == `weight` && value == 10) {
        weightValue = +weight[1].value;
      } else if (name == `weight` && value == "more-10") {
        weightValue = 0;
      } else if (name == `more-2` && value == "more-yes") {
        weightValue = +pice.value * +weight[1].value;
      } else if (name == `courier` && value == 100) {
        courierValue = +courier.value;
      } else if (name == `courier` && value == 0) {
        courierValue = 0;
      } else if (name == `sum` && value == 0) {
        insuranceValue = 0;
        insurance.value = "";
      }
      insuranceValue = insurance.value;
      calculation(weightValue, courierValue, insuranceValue);
    });
    pice.addEventListener("input", () => {
      weightValue = pice.value * +weight[1].value;
    });
  }

  // CALCULATOR ====================
  function calculation(weight = 0, courier = 0, insurance = 0) {
    let result;
    result = courier + weight * 2.5 + (insurance / 100) * 0.2;
    const resultAround = Math.round(result);
    if (resultAround >= 0) {
      outFooterResult.textContent = `${resultAround} ₽`;
      outFooterText.textContent = "Отправка будет стоить всего";
    }
  }
});
