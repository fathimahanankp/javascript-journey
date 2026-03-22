"use strict";

let count = 0;

const countEl = document.querySelector("#count");

document.querySelector(".inc").addEventListener("click", function () {
  count++;
  countEl.textContent = count;
});

document.querySelector(".dec").addEventListener("click", function () {
  count--;
  countEl.textContent = count;
});

document.querySelector(".reset").addEventListener("click", function () {
  count = 0;
  countEl.textContent = count;
});
