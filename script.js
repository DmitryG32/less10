"use strict";
const buttonTop = document.getElementById("btn");
const buttonBottom = document.getElementById("e_btn");
const input = document.getElementById("text");
const inputRange = document.getElementById("range");
const circle = document.getElementById("circle");
console.dir(circle);

const clickFunc = function () {
  buttonTop.style.backgroundColor = input.value;
  /* console.log(buttonTop.style.backgroundColor);
  console.dir(input.value); */
};

const clickFuncBottom = function (event) {
  buttonBottom.style.display = "none";
  /* console.log(event.target);
  console.log(event.currenTarget); */
};

const rangeFunc = function (event) {
  circle.style.width = inputRange.value + "%";
  circle.style.height = inputRange.value + "%";
  /* console.log(circle.style.width);
  console.log(inputRange.value); */
};

buttonTop.addEventListener("click", clickFunc);
buttonBottom.addEventListener("click", clickFuncBottom);
inputRange.addEventListener("input", rangeFunc);
