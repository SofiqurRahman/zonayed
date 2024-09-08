"use strict";

const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const myImg = document.getElementById("myImg");

btnOn.addEventListener("click", () => {
  myImg.src = "./images/pic_bulbon.gif";
  btnOn.style.color = "cyan";
  btnOff.style.color = "black";
});

btnOff.addEventListener("click", () => {
  myImg.src = "./images/pic_bulboff.gif";
  btnOff.style.color = "red";
  btnOn.style.color = "black";
});

// const showBtn = document.getElementById("showBtn");
// const hideBtn = document.getElementById("hideBtn");
// const para1 = document.getElementById("para1");

// const showfunc = () => para1.style.display= 'block';
// const hidefunc = () => para1.style.display= 'none';

// showBtn.addEventListener("click", showfunc);
// hideBtn.addEventListener("click", hidefunc);

// const showBtn = document.getElementById("showBtn");
// const hideBtn = document.getElementById("hideBtn");
// const para1 = document.getElementById("para1");

// showBtn.addEventListener("click", () => {
//   para1.style.display= 'block';
// });

// hideBtn.addEventListener("click", () => {
//   para1.style.display= 'none';
// });

(function() {
  const showBtn = document.getElementById("showBtn");
  const hideBtn = document.getElementById("hideBtn");
  const para1 = document.getElementById("para1");

  showBtn.addEventListener("click", () => {
    para1.style.display= 'block';
  });

  hideBtn.addEventListener("click", () => {
    para1.style.display= 'none';
  });
})();


const changeBtn = document.getElementById("changeBtn");
const noChangeBn = document.getElementById("noChangeBn");
const para2 = document.getElementById("para2");

changeBtn.addEventListener("click", () => {
  para2.innerHTML = "Paragraph changed";
});

noChangeBn.addEventListener("click", () => {
  para2.innerHTML = "Paragraph";
});


const cars = ["BMW", "Lamborghini", "Mercedes", "Audi", "Ferrari"];

// for (let i = 0; i < cars.length; i++) {
//   const line = document.createElement("p");
//   line.className = "line";
//   document.body.appendChild(line).innerHTML = `${cars[i]}`;
//   document.querySelectorAll('.line')[i].style.color = 'red';
//   document.querySelectorAll('.line')[i].style.background = '#ddd';
// }

cars.forEach(val => {
  const line = document.createElement("p");
  line.className = "line";
  document.body.appendChild(line).innerHTML = val;
});

const person = {fname:"John", lname:"Doe", age:25}; 

for (let obj in person) {
  const line = document.createElement("h3");
  line.className = "line";
  document.body.appendChild(line).innerHTML = person[obj];
}