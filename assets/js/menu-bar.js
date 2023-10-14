//Menu-list
const menuListArray = document.querySelectorAll(".menu-bar-ul li");

let type = "ALL";

for (let i = 0; i < menuListArray.length; i++) {
  menuListArray[i].addEventListener("click", () => {
    type = menuListArray[i].innerText;
    onChangeType(menuListArray[i]);
  });
}

const onChangeType = (seletctedType) => {
  for (let i = 0; i < menuListArray.length; i++) {
    const list = menuListArray[i];
    list.classList.remove("active-li");
  }
  seletctedType.classList.add("active-li")
};


