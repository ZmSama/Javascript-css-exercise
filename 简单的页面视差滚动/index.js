/*
 * @Descripttion:
 * @version:
 * @Author: ZmSama
 * @Date: 2021-11-19 16:14:35
 */
// 获取目标元素
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let des = document.getElementById("des");

// 为整个页面绑定滚动事件
window.addEventListener("scroll", (e) => {
  // 获取页面滚动的距离
  let scrollY = window.scrollY;

  //   根据滚动距离动态计算这些图片的位置
  bg.style.top = scrollY * 0.5 + "px";
  moon.style.left = -scrollY * 0.5 + "px";
  mountain.style.top = -scrollY * 0.15 + "px";
  road.style.top = scrollY * 0.15 + "px";
  text.style.top = scrollY * 1 + "px";

  //   计算文字的显示时机，这个1500就是整个页面的长度，body里面设置的1500px，得到一个0-1变化的百分值
  des.style.opacity = scrollY / (1500 - des.offsetTop);

  //   console.log(des.offsetTop, des.style.height, scrollY);
});
