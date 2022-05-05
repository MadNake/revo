"use strict";

let btn_prev = document.querySelector(".coffee__slide-btn_prev");

let btn_next = document.querySelector(".coffee__slide-btn_next");

let items = document.querySelectorAll(".coffee__grid-item"),
beforeZone = document.querySelector(".side-zone_before"),
itemsLength = items.length;




// let login = prompt("Введите логин","");
// let password;
//
// function passwordChek() {
//   password = prompt("Введите пароль", "");
//   if (password == "Я главный") {
//     alert("Здравствуйте")
//   } else if (password === "" || password === null) {
//     alert("Отменено")
//   } else {
//      alert("Неверный пароль");
//      passwordChek();
//   }
// }
//
// if (login === "admin") {
//   passwordChek();
// } else if (login === "" || login === null) {
//   alert("Отменено")
// } else {
//   alert("Я вас не знаю")
// };
