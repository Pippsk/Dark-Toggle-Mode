const toggleBtn = document.querySelector("input[name = 'theme']");
const htmlElement = document.documentElement;

toggleBtn.addEventListener("click", function () {
  if (toggleBtn.checked) {
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "light");
  }
});
