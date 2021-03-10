// NAVIGATION MENU ##############################################
const navToggle = document.querySelector("#toggle");
const navPosition = document.querySelector(".nav");
const mediaQuery = window.matchMedia("(min-width: 1200px)");

// Make sure it's unchecked by default
navToggle.checked = false;

// If checked, move the nav menu into view, else hide the nav menu
navToggle.addEventListener("change", function () {
  if (this.checked) {
    navPosition.style.right = "0";
  } else {
    navPosition.style.right = `-100%`;
  }
});

// Make sure the navigation properly transitions and resets on design change
mediaQuery.addEventListener("change", function () {
  if (this.matches) {
    navPosition.style.right = "0";
    // navPosition.style.transition = "right 0.0s";
  } else {
    navToggle.checked = false;
    navPosition.style.right = `-100%`;
    // navPosition.style.transition = "right 0.5s";
  }
});
