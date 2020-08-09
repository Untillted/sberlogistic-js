document.addEventListener("DOMContentLoaded", () => {
  // INPUT VARIABLES ========================

  const inputs = document.querySelectorAll(".input"),
    divPiceActive = document.querySelector(".input-pice"),
    inputPiceActive = document.querySelector(".pice_input"),
    inputSum = document.querySelector(".sum_input"),
    inputSumText = document.querySelector(".sum_text");

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
      bodyOutText.innerHTML = "";
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

  //  CONDITIONS ===================================

  for (let input of inputs) {
    input.addEventListener("input", () => {
      let value = input.value;
      if (value == "10") {
        inputActive();
      } else if (value == "more-yes") {
        inputActive();
        footerTextHide();
      } else if (value == "more-no") {
        footerTextShow();
        inputHide();
      } else if (value == "5") {
        inputHide();
        footerTextHide();
      } else if (value == "more-10") {
        inputHide();
      }
    });
  }
  //  CONDITIONS ===================================

  // INPUT PICE SHOW ====================

  function inputActive() {
    divPiceActive.classList.add("input-pice_active");
    inputPiceActive.removeAttribute("readonly");
  }
  function inputHide() {
    inputPiceActive.value = "";
    divPiceActive.classList.remove("input-pice_active");
    inputPiceActive.setAttribute("readonly", "readonly");
  }
  // INPUT PICE ==========================
});
