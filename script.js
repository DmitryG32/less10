const bookList = document.querySelectorAll(".books");
const lists = document.querySelectorAll(".book");
console.log(bookList);
console.log(lists);

//1
lists[0].before(lists[1]);
bookList[0].append(lists[2]);
lists[4].after(lists[3]);

//2
const body = document.querySelector("body");
//console.dir(body);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

//3
let title = lists[4].childNodes[1];
title.innerText = "Книга 3. this и Прототипы Объектов";
console.log(title.innerText);

//4
const advItem = document.querySelector(".adv");
advItem.style.display = "none";
//console.dir(advItem);

//5
//console.log(lists[0].childNodes[3].children);
lists[0].childNodes[3].children[3].after(lists[0].childNodes[3].children[6]);
lists[0].childNodes[3].children[5].before(lists[0].childNodes[3].children[8]);

//console.log(lists[5].childNodes[3].children);
lists[5].childNodes[3].children[1].after(lists[5].childNodes[3].children[9]);
lists[5].childNodes[3].children[4].after(lists[5].childNodes[3].children[3]);
lists[5].childNodes[3].children[3].after(lists[5].childNodes[3].children[5]);

//6
//console.dir(lists[2].childNodes[3].children);
const newElem = document.createElement("li");
newElem.textContent = "Глава 8: За пределами ES6";
//console.log(newElem);
lists[2].childNodes[3].append(newElem);
lists[2].childNodes[3].children[8].after(lists[2].childNodes[3].children[10]);
