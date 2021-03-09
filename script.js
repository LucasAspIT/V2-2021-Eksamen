// NAVIGATION MENU ##############################################
const navToggle = document.querySelector("#toggle");
const navPosition = document.querySelector(".nav");

// Make sure it's unchecked by default
navToggle.checked = false;

// If checked, move the nav menu into view, else hide the nav menu
navToggle.addEventListener("change", function () {
  if (this.checked) {
    navPosition.style.right = "0";
  } else {
    navPosition.style.right = `-${navPosition.offsetWidth}px`;
  }
});
