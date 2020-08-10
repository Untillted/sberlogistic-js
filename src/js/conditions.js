//  "Максимальная объявленная стоимость посылок в Сберлогистике 150 000 ₽"; и
//  ... посылки с объявленной стоимостью 150 000 ₽ будет стоить всего";
// допустим макс.сумма изменилась - придется ходить по коду, искать строки, заменять.
// подобные вещи лучше выносить в константы и использовать везде. 
// Тут макс.сумму обявив один раз можно использовать и в тексте, и в расчетах.

document.addEventListener("DOMContentLoaded", () => {
  // INPUT VARIABLES ========================

  const inputs = document.querySelectorAll(".input"),
    divPiceActive = document.querySelector(".input-pice"),
    inputPiceActive = document.querySelector(".pice_input"),
    inputSum = document.querySelector(".sum_input"),
    inputSumText = document.querySelector(".sum_text"),
    inputSumActive = document.querySelector(".input__sum_active");

  //  OUT VARIABLES ==========================

  const bodyOutText = document.querySelector(".out__text"),
    outFooterTextWarning = document.querySelector(".footer__out"),
    outFooterText = document.querySelector(".footer__text"),
    outFooterResult = document.querySelector(".footer__res ");

  //  OUT BODY TEXT WARNING ======================

  inputPiceActive.addEventListener("input", () => {
    if (inputPiceActive.value > 2) {
      changeColorOrange(inputPiceActive);
      outFooterTextWarning.textContent =
        "К сожалению, мы не сможем отправить вашу посылку через Сберлогистику.";
      resultHide(outFooterText);
      resultHide(outFooterResult);
    } else {
      changeColorGreen(inputPiceActive);
      outFooterTextWarning.textContent = "";
      resultShow(outFooterText);
      resultShow(outFooterResult);
    }
  });

  inputSum.addEventListener("input", () => {
    if (inputSum.value > 150000) {
      changeColorOrange(inputSum);
      changeColorOrange(inputSumText);
      bodyOutText.textContent =
        "Максимальная объявленная стоимость посылок в Сберлогистике 150 000 ₽";
      outFooterText.textContent =
        "Отправка застрахованной посылки с объявленной стоимостью 150 000 ₽ будет стоить всего";
    } else {
      changeColorGreen(inputSum);
      changeColorGreen(inputSumText);
      bodyOutText.textContent = "";
    }
  });

  // FOOTER TEXT WARNING  ==============
  function footerTextShow() {
    outFooterTextWarning.textContent =
      "К сожалению, мы не сможем отправить вашу посылку через Сберлогистику.";
    resultHide(outFooterText);
    resultHide(outFooterResult);
  }
  function footerTextHide() {
    outFooterTextWarning.textContent = "";
    resultShow(outFooterText);
    resultShow(outFooterResult);
  }
  // FOOTER RESULT SHOW ============================
  function resultShow(elem) {
    elem.style.display = "inline-block";
  }
  // FOOTER RESULT HIDE ============================
  function resultHide(elem) {
    elem.style.display = "none";
  }
  // COLOR STYLE WARNING ===========================
  function changeColorOrange(elem) {
    elem.style.color = "#ff7f00";
  }
  // COLOR STYLE SUCCESSFULLY ======================
  function changeColorGreen(elem) {
    elem.style.color = "#00a200";
  }
  // INPUT PICE SHOW ===============================

  function inputActive() {
    divPiceActive.classList.add("input-pice_active");
    inputPiceActive.removeAttribute("readonly");
  }
  function inputHide() {
    inputPiceActive.value = "";
    divPiceActive.classList.remove("input-pice_active");
    inputPiceActive.setAttribute("readonly", "readonly");
  }
  // INPUT SUM ACTIVE ==============================
  inputSum.addEventListener("click", () => {
    inputSumActive.checked = "true";
  });

  //  CONDITIONS ===================================

  for (let input of inputs) {
    input.addEventListener("input", () => {
      // споров про такое объявление переменных много
      // считаю что лучше использовать точку с запятой
      // т.е. 
      // let value = input.value;
      // let name = input.name;
      // такой код проще читать, в некоторых случаях поможет избежать ошибок
      // при этом объявление через запятую не дает никаких выгод
      let value = input.value,
        name = input.name;
        
      if (name == "weight" && value == "10") {
        inputActive();
      } else if (name == "more-2" && value == "more-yes") {
        // если посылка разбивается на части
        // должен включится выбор От 5 до 10 кг + укзано кол-во частей. Этого не происходит.
        // сценарий
        // 1. выбор больше 10кг
        // 2. разбить на части - Да
        // Результат - отправка стоит 0 рублей
        // 3. меняю выбор на От 5 до 10 кг
        // Результат - одновременно выбрано выбрано больше 10 кг и От 5 до 10 кг,
        // стоимость отправки по прежнему 0 руб.
        footerTextHide();
      } else if (name == "more-2" && value == "more-no") {
        footerTextShow();
        inputHide();
      } else if (name == "weight" && value == "more-10") {
        inputHide();
      } else if (name == "weight" && value == "5") {
        inputHide();
        footerTextHide();
      } else if (name == "sum" && value == "0") {
        bodyOutText.textContent = "";
        changeColorGreen(inputSum);
        changeColorGreen(inputSumText);
      }
    });
  }
  //  CONDITIONS ===================================
});
