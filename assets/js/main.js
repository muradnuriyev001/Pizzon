//Scroll-Top
const scrollTop = document.getElementById("scroll-top");

scrollTop.style.display = "none";
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    scrollTop.style.display = "flex";
  } else {
    scrollTop.style.display = "none";
  }
});

scrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Second-Main-Visible

const secondMainAnimation = document.getElementById("second-main-animation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    secondMainAnimation.style.display = "flex";
  }
});

//Third-Main-Visible

const thirdMainAnimation = document.getElementById("third-main-animation");
const thirdMainAnimation2 = document.getElementById("third-main-animation2");

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

//Fifth-Main-Visible

const fifthMainAnimation = document.getElementById(
  "fifth-main-content-animation"
);

window.addEventListener("scroll", () => {
  if (window.scrollY > 2900) {
    fifthMainAnimation.style.display = "flex";
  }
});
