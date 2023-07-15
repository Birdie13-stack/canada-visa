document.addEventListener("DOMContentLoaded", function() {
  // Toggle the menu on click of the hamburger icon
  document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".nav").classList.toggle("active");
  });
});