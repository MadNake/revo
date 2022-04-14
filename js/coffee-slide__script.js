"use strict";

let btn_prev = document.querySelector(".coffee__slide-btn_prev");

let btn_next = document.querySelector(".coffee__slide-btn_next");

let items = document.querySelectorAll(".coffee__grid-item"),
beforeZone = document.querySelector(".side-zone_before"),
itemsLength = items.length;

//--------------------------------

function test() {
  for (let i = 0; i < itemsLength.length; i++) {
  beforeZone.insertBefore(items[0],items[i * 2 + 1])
};
};
test();

//---- Код вверху не работает-----------

//btn_next.addEventListener("click", function(evt) {
//  evt.preventDefault();
//  items[0].
//})
