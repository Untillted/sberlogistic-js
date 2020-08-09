document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".input"),
    divPiceActive = document.querySelector(".input-pice"),
    inputPiceActive = document.querySelector(".pice_input"),
    inputSum = document.querySelector(".sum_input"),
    bodyOutText = document.querySelector(".out__text");
  inputSum.addEventListener("input", () => {
    if (inputSum.value > 150000) {
      inputSum.style.color = "#ff7f00";
      bodyOutText.innerHTML =
        "Максимальная объявленная стоимость посылок в Сберлогистике 150 000 ₽";
    } else {
      bodyOutText.innerHTML = "";
    }
  });
  console.log(inputs);
  for (let input of inputs) {
    console.log(input.value);
    input.addEventListener("change", () => {
      console.log(input.checked);
      if (input.value === "more-yes") {
        divPiceActive.classList.add("input-pice_active");
        inputPiceActive.removeAttribute("readonly");
      } else {
        divPiceActive.classList.remove("input-pice_active");
      }
    });
  }
  //   SHOW VARIABLES
  // document.body.addEventListener("change", (e) => {

  //   switch (e.target.value) {
  //     case "more-yes":
  //       divPiceActive.classList.add("input-pice_active");
  //       inputPiceActive.removeAttribute("readonly");
  //       break;
  //     case "more-no":
  //       document.querySelector(".footer__out").textContent =
  //         "К сожалению, мы не сможем отправить вашу посылку через Сберлогистику.";
  //       break;
  //     default:
  //       divPiceActive.classList.remove("input-pice_active");
  //       document.querySelector(".footer__out").textContent = "";
  //       break;
  //   }
  // });
});
