document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".input__text_active"),
    bodyRight = document.querySelector(".right__content_active"),
    bodyRightActive = document.querySelector(".right__content_hidden");
  // SHOW POPUP==================
  btn.addEventListener("click", () => {
    bodyRight.parentNode.removeChild(bodyRight);
    bodyRightActive.classList.remove("right__content_hidden");
  });
});
