"use strict";

let giftset__link = document.querySelectorAll(".giftset__slide-bar-item");

for (let i = 0; i < giftset__link.length; i++) {

  giftset__link[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      for (var i = 0; i < giftset__link.length; i++) {
      giftset__link[i].classList.remove("giftset__slide-bar-item_active");
      }

  })
}
