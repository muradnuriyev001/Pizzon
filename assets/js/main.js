//Second-Main-Visible

const secondMainAnimation = document.getElementById("second-main-animation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    secondMainAnimation.style.display = "flex";
  }
});
