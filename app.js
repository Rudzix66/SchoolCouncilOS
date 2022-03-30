
(function () {
  localStoreageCheck();
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
      document.querySelector("body").addEventListener("click", () => {
        btn.classList.remove("active");
      });
    })
  );
})();

function rememberButton(button) {
  localStorage.setItem("buttonID", button.id);
  console.log(button.id);
}

function restoreActiveBtn() {
  const buttonID = localStorage.getItem("buttonID");
  const activeBtn = document.getElementById(buttonID);
  console.log(activeBtn.classList);
  activeBtn.classList.add("active");
}

function localStoreageCheck () {
  if (!localStorage.getItem("buttonID")) {
    localStorage.setItem("buttonID", "status-3");
    document.querySelector('.status-btn.active').classList.remove('active');
    document.querySelector("#status-3").classList.add("active");
  }
}