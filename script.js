"use strict"

// window.document.documentElement.body
// Поиск элементов 
//-----------------  Устаревшие медоды  ------------------------------------------
/*let coffeeMachine = document.getElementById("coffee"); // Поиск эелемента по ID
console.log(coffeeMachine);
let images = document.getElementsByTagName ("img"); // Поиск по тегу
console.log(images);
let coffeeItems = document.getElementsByClassName ("coffee-item"); //Поиск по классу
console.log(coffeeItems);
let firstImage = coffeeItems[0].getElementsByTagName ("img");
console.log(firstImage[0]);*/
//--------------------------------------------------------------------------------
//-----------------  Современные медоды  ------------------------------------------
/*let coffeeMachine = document.querySelector("#coffee");
console.log(coffeeMachine);
let image =document.querySelector("img");
console.log(image);
let coffeeItems = document.querySelectorAll(".coffee-item");
console.log(coffeeItems);
let itemImages = document.querySelectorAll(".coffee-item img");
console.log(itemImages);
let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img");
console.log(cupImages);*/
//--------------------------------------------------------------------------------
//-----------------  Работа с элементами  ----------------------------------------
// Изменение CSS свойств
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "4px solid darkblue";
coffeeMachine.style.borderRadius = "25px";
coffeeMachine.style.position = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";
let coffeeMachineTop = coffeeMachine.style.top;
console.log (parseInt(coffeeMachineTop));
// Изменение атрибутов
let balance = document.querySelector ("input[type='text']");
let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute ("type", "date");

console.log (balance.hasAttribute ("placeholder"));
balance.removeAttribute("aria-label");
balance.value = 500; // == balance.setAtribute ("value", 500);
console.log(balance.value); // == balance.getAttribute("value");
// обращаться к атрибутам таким образом мжно только к заранее заложенным в HTML
// к атрибутам, которые задали сами, так обратиться нельзя
*/

//Изменение классов
/*let changeButton = document.querySelector(".btn");
console.log (changeButton.classList);
changeButton.classList.remove("btn-primary");
changeButton.classList.add("btn-success");*/
//changeButton.classList.toggle("ml-5"); // Вкл.  / Выкл.

// Изменение содержимого элементов
/*let displayText = document.querySelector (".display-text");
console.log (displayText.innerHTML);
console.log (displayText.innerText);
//displayText.innerText = "<b>Готовим кофе</b>";
displayText.innerHTML = "<b>Готовим кофе</b>";*/

// This возвращает объект к которому обращено свойство или обращен метод
// <div class="coffee-item" onclick="buyCoffee('Американо', 50, this)">
// Тоже самое что 
/*let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function () {
  buyCoffee('Американо', 50, this);
}
*/
// ------------------- Планирование ----------------------------
// таймаут

/*setTimeout(function() {
  paintBody('aqua');
}, 5000);*/

/*let timeout = setTimeout(paintBody, 5000, "aqua");

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(timeout);
}
function paintBody(color) {
  document.body.style.background = color;
}
*/

let interval = setInterval(trachConsole, 1000);

let changeButton = document.querySelector(".btn");
changeButton.onclick = function() {
  clearInterval(interval);
}
function trachConsole() {
  console.log(Math.random());
}