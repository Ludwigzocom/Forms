const title = document.querySelector("#title");
const liItems = document.querySelectorAll("li");
const box = document.querySelector("#box");
const ul = document.querySelector("#ul");
const btn = document.querySelector("#removeBtn");
const keyPress = document.querySelector("#keyPress");
console.log(title);
console.log(liItems[3]);
const ul2 = document.querySelectorAll("ul")[1];
title.textContent = "Min hemsida";
title.textContent = "Nu ändrar jag title igen";

box.classList.toggle("showBox");
box.classList.toggle("showBox");
box.classList.add("showBox");
box.classList.remove("showBox");

const li = document.createElement("li");

li.textContent = "vitlök";

ul.appendChild(li);

li.addEventListener("mouseover", function () {
  li.style = "color: red;";
});
li.addEventListener("mouseout", function () {
  li.style = "color: white;";
});

btn.addEventListener("click", function () {
  console.log("Button clicked");
  box.classList.toggle("showBox");
});
let input = "";
window.addEventListener("keyup", function (event) {
  input += event.key;
  keyPress.textContent = input;
});

const listShopping = ["bröd", "chips", "dill"];

for (const item of listShopping) {
  const itemEle = document.createElement("li");
  itemEle.textContent = item;
  itemEle.addEventListener("mouseover", function () {
    itemEle.style = "color: red;";
  });
  itemEle.addEventListener("mouseout", function () {
    itemEle.style = "color: white;";
  });

  ul.appendChild(itemEle);
}
