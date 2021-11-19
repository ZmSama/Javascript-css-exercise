/*
 * @Descripttion:
 * @version:
 * @Author: ZmSama
 * @Date: 2021-11-19 10:52:12
 */
let container = document.querySelector(".container");
let card = document.querySelector(".card");
let title = document.querySelector(".title");
let logo = document.querySelector(".logo img");
let des = document.querySelector("h3");
let size = document.querySelector(".size");
let buy = document.querySelector(".buy");

// 鼠标移动时
container.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// 鼠标进入时
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  logo.style.transform = "translateZ(200px) rotateZ(-45deg)";
  title.style.transform = "translateZ(150px)";
  des.style.transform = "translateZ(130px)";
  size.style.transform = "translateZ(120px)";
  buy.style.transform = "translateZ(90px)";
});

// 鼠标离开时
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all ease 0.5s";
  card.style.transform = "rotateX(0) rotateY(0)";
  title.style.transform = "translateZ(0)";
  logo.style.transform = "translateZ(0)";
  des.style.transform = "translateZ(0)";
  size.style.transform = "translateZ(0)";
  buy.style.transform = "translateZ(0)";
});
