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
  seletctedType.classList.add("active-li");
};

const menuBox = document.getElementById("menu-box");

// pizza1 = `<div class="menu-box-element">
// <img src="assets/img/Menu-Images/pizza/pizza-1.png" alt="" />
// <p>Chicken Pizza</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// pizza2 = `<div class="menu-box-element">
// <img src="assets/img/Menu-Images/pizza/pizza-2.png" alt="" />
// <p>Chicken Pizza</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// pizza3 = `<div class="menu-box-element">
// <img src="assets/img/Menu-Images/pizza/pizza-3.png" alt="" />
// <p>Chicken Pizza</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// pizza4 = `<div class="menu-box-element">
// <img src="assets/img/Menu-Images/pizza/pizza-4.png" alt="" />
// <p>Chicken Pizza</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// pizza5 = `<div class="menu-box-element">
// <img src="assets/img/Menu-Images/pizza/pizza-5.png" alt="" />
// <p>Chicken Pizza</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// pizzaArray = [pizza1 + pizza2 + pizza3 + pizza4 + pizza5];

// salad1 = `            <div class="menu-box-element">
// <img src="assets/img/Menu-Images/salad/salad-1.png" alt="" />
// <p>Caesar Salad</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// salad2 = `            <div class="menu-box-element">
// <img src="assets/img/Menu-Images/salad/salad-2.png" alt="" />
// <p>Caesar Salad</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// saladArray = [salad1 + salad2];

// desert1 = `                        <div class="menu-box-element">
// <img src="assets/img/Menu-Images/desert/desert-1.png" alt="" />
// <p>Cheescake</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// desert2 = `                        <div class="menu-box-element">
// <img src="assets/img/Menu-Images/desert/desert-2.png" alt="" />
// <p>Cheescake</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// desertArray = [desert1 + desert2];

// drink1 = `     <div class="menu-box-element">
// <img src="assets/img/Menu-Images/drinks/coca-cola.png" alt="" />
// <p>Coca-Cola</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// drink2 = `     <div class="menu-box-element">
// <img src="assets/img/Menu-Images/drinks/orange.png" alt="" />
// <p>Coca-Cola</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// drink3 = `     <div class="menu-box-element">
// <img src="assets/img/Menu-Images/drinks/redbull.png" alt="" />
// <p>Coca-Cola</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// drink4 = `     <div class="menu-box-element">
// <img src="assets/img/Menu-Images/drinks/sprite.png" alt="" />
// <p>Coca-Cola</p>
// <span class="menu-box-element-span1"
//   >Lorem Ipsum is simply dummy text of the printing and
//   typesetting industry.</span
// >
// <span class="menu-box-element-span2">$20.99</span>
// </div>`;

// drinkArray = [drink1 + drink2 + drink3 + drink4];

// allArray = [pizzaArray + saladArray + desertArray + drinkArray];

// menuBox.innerHTML = allArray;

// for (let i = 0; i < menuListArray.length; i++) {
//   menuListArray[i].addEventListener("click", () => {
//     type = menuListArray[i].innerText;
//     switch (type) {
//       case "ALL":
//         menuBox.innerHTML = allArray;
//         break;
//       case "PIZZAS":
//         menuBox.innerHTML = pizzaArray;
//         break;
//       case "SALADS":
//         menuBox.innerHTML = saladArray
//         break
//       case "DESERTS":
//         menuBox.innerHTML = desertArray
//         break;
//       case "DRINKS":
//         menuBox.innerHTML = drinkArray
//         break
//     }
//   });
// }

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

// menuBoxContentPizzaData = [
//   {
//     img: "Menu-Images/pizza/pizza-1.png",
//     text: "Chicken Pizza",
//   },
//   {
//     img: "Menu-Images/pizza/pizza-2.png",
//     text: "Caesar Pizza",
//   },
//   {
//     img: "Menu-Images/pizza/pizza-3.png",
//     text: "4 Cheese Pizza",
//   },
//   {
//     img: "Menu-Images/pizza/pizza-4.png",
//     text: "Barbeque Pizza",
//   },
//   {
//     img: "Menu-Images/pizza/pizza-5.png",
//     text: "Margherita Pizaa",
//   },
// ];

// menuBoxContentSaladData = [
//   {
//     img:"Menu-Images/salad/salad-1.png",
//     text: "Caesar"
//   },
//   {
//     img: "Menu-Images/salad/salad-2.png",
//     text: "Chicken"
//   }
// ]

// menuBoxContentDesertData = [
//   {
//     img:"Menu-Images/desert/desert-1.png",
//     text: "Cheescake"
//   },
//   {
//     img: "Menu-Images/desert/desert-2.png",
//     text: "Ice-cream"
//   }
// ]

// menuBoxContentDrinkData = [
//   {
//     img:"Menu-Images/drinks/drink-1.png",
//     text: "Coca-Cola"
//   },
//   {
//     img: "Menu-Images/drink/drink-2.png",
//     text: "Orange Juice"
//   },
//   {
//     img: "Menu-Images/drink/drink-3.png",
//     text: "Red-Bull"
//   },
//   {
//     img: "Menu-Images/drink/drink-4.png",
//     text: "Sprite"
//   }
// ]

menuBoxAllContent = [
  {
    img: "Menu-Images/pizza/pizza-1.png",
    text: "Chicken Pizza",
  },
  {
    img: "Menu-Images/pizza/pizza-2.png",
    text: "Caesar Pizza",
  },
  {
    img: "Menu-Images/pizza/pizza-3.png",
    text: "4 Cheese Pizza",
  },
  {
    img: "Menu-Images/pizza/pizza-4.png",
    text: "Barbeque Pizza",
  },
  {
    img: "Menu-Images/pizza/pizza-5.png",
    text: "Margherita Pizaa",
  },
  {
    img: "Menu-Images/salad/salad-1.png",
    text: "Caesar",
  },
  {
    img: "Menu-Images/salad/salad-2.png",
    text: "Chicken",
  },
  {
    img: "Menu-Images/desert/desert-1.png",
    text: "Cheescake",
  },
  {
    img: "Menu-Images/desert/desert-2.png",
    text: "Ice-cream",
  },
  {
    img: "Menu-Images/drinks/drink-1.png",
    text: "Coca-Cola",
  },
  {
    img: "Menu-Images/drinks/drink-2.png",
    text: "Orange Juice",
  },
  {
    img: "Menu-Images/drinks/drink-3.png",
    text: "Red-Bull",
  },
  {
    img: "Menu-Images/drinks/drink-4.png",
    text: "Sprite",
  },
];

for (let i = 0; i < menuBoxAllContent.length; i++) {
  menuBox.innerHTML += menuBoxContent(menuBoxAllContent[i]);
}

for (let i = 0; i < menuListArray.length; i++) {
  menuListArray[i].addEventListener("click", () => {
    type = menuListArray[i].innerText;
    
  });
}
