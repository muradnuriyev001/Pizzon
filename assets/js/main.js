//Second-Main-Visible

const secondMainAnimation = document.getElementById("second-main-animation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    secondMainAnimation.style.display = "flex";
  }
});


//Third-Main-Visible

const thirdMainAnimation = document.getElementById("third-main-animation")
const thirdMainAnimation2 = document.getElementById("third-main-animation2")

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    thirdMainAnimation.style.display = "flex";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 900) {
    thirdMainAnimation2.style.display = "flex";
  }
});

