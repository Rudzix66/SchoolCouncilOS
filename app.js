"use strict";

(function () {
  const statusBtn = document.querySelectorAll(".status-btn");

  restoreActiveBtn();

  statusBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      // remove the active class from all buttons to avoid bugs
      statusBtn.forEach((btn) => btn.classList.remove("active"));

      // add the active class to the clicked button
      btn.classList.add("active");

      // store the button id in local storage as buttonID item
      if (btn.classList.contains("active")) {
        rememberButton(btn);
      }
      // to remove the active class from buttons when body clicked
      // usuwam klasy active z buttonów kiedy kliknięto body
      document.querySelector("body").addEventListener("click", () => {
        btn.classList.remove("active");
      });
    })
  );
})();

function rememberButton(button) {
  localStorage.setItem("buttonID", button.id);
}

function restoreActiveBtn() {
  const buttonID = localStorage.getItem("buttonID");
  const activeBtn = document.getElementById(buttonID);
  activeBtn.classList.add("active");
}