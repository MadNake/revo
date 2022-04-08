"use strict";

let giftset__link = document.querySelectorAll(".giftset__slide-bar-item");
let giftset__content = document.querySelectorAll(".giftset__content")

for (let i = 0; i < giftset__link.length; i++) {

  giftset__link[i].addEventListener("click", function(evt) {
      evt.preventDefault();
     if (this.classList.contains("giftset__slide-bar-item_active")) {

     } else {
       for (var i = 0; i < giftset__link.length; i++) {
         giftset__link[i].classList.remove("giftset__slide-bar-item_active");
         giftset__content[i].classList.remove("giftset__content_active");
       };
       this.classList.add("giftset__slide-bar-item_active");
       for (var i = 0; i < giftset__link.length; i++) {
         if (giftset__link[i].classList.contains("giftset__slide-bar-item_active")) {
           giftset__content[i].classList.add("giftset__content_active")
         }
       }
     }
  });
}
