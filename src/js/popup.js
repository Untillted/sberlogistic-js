document.addEventListener("DOMContentLoaded", () => {
  // VARIABLES ========================
  const inputRightMore = document.querySelectorAll(".right__input_more");
  const inputRight = document.querySelector(".right__input_active");
  const bodyRight = document.querySelector(".right__content_active");
  const bodyRightActive = document.querySelector(".right__content_hidden");
  const inputBodyHide = document.querySelector(".weight__input_active");
  const ContentHiden = "right__content_hidden";

  // SHOW POPUP =======================
  inputRight.addEventListener("click", () => {
    bodyRight.classList.add(ContentHiden);
    bodyRightActive.classList.remove(ContentHiden);
  });

  // HIDDEN POPUP ======================
  inputBodyHide.addEventListener("click", () => {
    bodyRightActive.classList.add(ContentHiden);
    bodyRight.classList.remove(ContentHiden);
    for (let input of inputRightMore) {
      input.checked = false;
    }
  });
});
