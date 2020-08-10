document.addEventListener("DOMContentLoaded", () => {
  // INPUTS =====================================
  const inputs = document.querySelectorAll("input");
  //   VALUE OF INPUT ===========================
  const weight = document.querySelector(".body__input_active"),
    pice = document.querySelector(".pice_input"),
    insurance = document.querySelector(".sum_input"),
    courier = document.querySelector(".courier__input_active");
  // OUT OF INPUT ================================
  const outFooterText = document.querySelector(".footer__text"),
    outFooterResult = document.querySelector(".footer__res ");
  // outFooterTextWarning = document.querySelector(".footer__out");
  //  CONDITIONS ===================================
  let weightValue = 0,
    courierValue = 0,
    insuranceValue = 0;

  for (let input of inputs) {
    input.addEventListener("input", () => {
      let value = input.value,
        name = input.name;
      if (name == `weight` && value == 5) {
        weightValue = +weight.value;
      } else if (name == `weight` && value == 10) {
        weightValue = +pice.value;
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
      weightValue = pice.value;
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
