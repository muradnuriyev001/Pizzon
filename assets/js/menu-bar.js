//Menu-list
const menuListArray = document.querySelectorAll(".menu-bar-ul li");

let type = "ALL";

for (let i = 0; i < menuListArray.length; i++) {
  menuListArray[i].addEventListener("click", () => {
    const oldType = type;
    type = menuListArray[i].innerText;
    if (oldType !== type) {
      menuBoxFilteredContentHTML();
      onChangeType(menuListArray[i]);
    }
  });
}
const onChangeType = (seletctedType) => {
  for (let i = 0; i < menuListArray.length; i++) {
    const list = menuListArray[i];
    list.classList.remove("active-li");
  }
  seletctedType.classList.add("active-li");
};

const menuBox = document.getElementById("menu-box");

const menuBoxContent = (props) => {
  return `<div class="menu-box-element">
              <img src="assets/img/${props.img}" alt="" />
              <p>${props.text}</p>
              <span class="menu-box-element-span1"
                    >Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.</span
                    >
              <span class="menu-box-element-span2">$20.99</span>
          </div>`;
};

const menuBoxAllContent = [
  {
    img: "Menu-Images/pizza/pizza-1.png",
    text: "Chicken Pizza",
    type: "PIZZAS",
  },
  {
    img: "Menu-Images/pizza/pizza-2.png",
    text: "Caesar Pizza",
    type: "PIZZAS",
  },
  {
    img: "Menu-Images/pizza/pizza-3.png",
    text: "4 Cheese Pizza",
    type: "PIZZAS",
  },
  {
    img: "Menu-Images/pizza/pizza-4.png",
    text: "Barbeque Pizza",
    type: "PIZZAS",
  },
  {
    img: "Menu-Images/pizza/pizza-5.png",
    text: "Margherita Pizaa",
    type: "PIZZAS",
  },
  {
    img: "Menu-Images/salad/salad-1.png",
    text: "Caesar",
    type: "SALADS",
  },
  {
    img: "Menu-Images/salad/salad-2.png",
    text: "Chicken",
    type: "SALADS",
  },
  {
    img: "Menu-Images/desert/desert-1.png",
    text: "Cheescake",
    type: "DESERTS",
  },
  {
    img: "Menu-Images/desert/desert-2.png",
    text: "Ice-cream",
    type: "DESERTS",
  },
  {
    img: "Menu-Images/drinks/drink-1.png",
    text: "Coca-Cola",
    type: "DRINKS",
  },
  {
    img: "Menu-Images/drinks/drink-2.png",
    text: "Orange Juice",
    type: "DRINKS",
  },
  {
    img: "Menu-Images/drinks/drink-3.png",
    text: "Red-Bull",
    type: "DRINKS",
  },
  {
    img: "Menu-Images/drinks/drink-4.png",
    text: "Sprite",
    type: "DRINKS",
  },
];

const menuBoxFilteredContentHTML = () => {
  const menuBoxFilteredContent = menuBoxAllContent.filter((e) => {
    return type === "ALL" || e.type === type;
  });
  menuBox.innerHTML = "";
  for (let Props of menuBoxFilteredContent) {
    menuBox.innerHTML += menuBoxContent(Props);
  }
};

menuBoxFilteredContentHTML();
