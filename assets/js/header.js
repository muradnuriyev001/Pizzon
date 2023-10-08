//Chaning color or header on scorlling down

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    header.classList.add("header-color");
  } else {
    header.classList.remove("header-color");
  }
});

//Shop-list Dropdown
const shopList = document.getElementById("shopList");
const shopListIcon = document.getElementById("shopListIcon");
const shopListDropdown = document.getElementById("shopListDropdown");
const blurShopList = document.getElementById("shop-bg-blur");

shopList.addEventListener("click", () => {
  shopListDropdown.classList.toggle("df");
  blurShopList.classList.toggle("dn");
  burgerContent.classList.remove("df");
  if (shopListIcon.style.color != "white") {
    shopListIcon.style.color = "white";
  } else {
    shopListIcon.style.color = "#fd9d3e";
  }
});

blurShopList.addEventListener("click", () => {
  shopListDropdown.classList.toggle("df");
  blurShopList.classList.toggle("dn");
});

//Burger

const burger = document.getElementById("nav-burger");
const burgerContent = document.getElementById("burger-content");

burger.addEventListener("click", () => {
  burgerContent.classList.toggle("df");
});
