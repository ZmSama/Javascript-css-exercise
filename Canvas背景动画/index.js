/*
 * @Descripttion:
 * @version:
 * @Author: ZmSama
 * @Date: 2021-12-18 11:24:15
 */
// 获取画布
const canvas = document.querySelector("#canvas");
// 得到实例
const ctx = canvas.getContext("2d");

let w = document.documentElement.scrollWidth;
let h = document.documentElement.scrollHeight;

canvas.setAttribute("width", w);
canvas.setAttribute("height", h);

// 随机半径
function r(num) {
  return Math.random() * num;
}

// 小球类
class Ball {
  constructor() {
    //   x,y都加60的目的在于让他们出生的位置不会卡在墙里面
    this.x = r(w) + 60;
    this.y = r(h) + 60;
    this.r = r(50) + 10; //[10-100]
    this.color = `#${parseInt(Math.random() * 0xffffff).toString(16)}`;

    this.xSpeed = r(3) + 2; //[2,5];
    this.ySpeed = r(3) + 1; //[1-4]
  }

  //    显示方法
  show() {
    this.run();
    ctx.beginPath();
    ctx.globalAlpha = 0.3;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  //   运动方法
  run() {
    //   碰撞检测，其实就是圆心与半径相比边界的判定
    // if (this.x - this.r <= 0 || this.x + this.r >= w) {
    //   //    速度取反即可相反运动
    //   this.xSpeed = -this.xSpeed;
    // }
    // this.x += this.xSpeed;
    // 竖直方向的判定
    // if (this.y - this.r <= 0 || this.y + this.r >= h) {
    //   this.ySpeed = -this.ySpeed;
    // }
    this.y -= this.ySpeed;
    if (this.y <= -30) {
      this.y = h + 60;
    }
  }
}

// 创建一个用于收集所有小球实例的数组,不然后期无法控制
let ballArr = [];

// new Ball().show();
// 创造多个不同的小球
for (let index = 0; index < 50; index++) {
  let ball = new Ball();
  ballArr.push(ball);
  ball.show();
}

// 让每个小球运动
// setInterval(() => {
//   // 每次开始前都要重置一下画布
//   ctx.clearRect(0, 0, w, h);
//   for (let index = 0; index < ballArr.length; index++) {
//     let ball = ballArr[index];
//     ball.show();
//   }
// }, 60);

requestAnimationFrame(() => {
  setInterval(() => {
    // 每次开始前都要重置一下画布
    ctx.clearRect(0, 0, w, h);
    for (let index = 0; index < ballArr.length; index++) {
      let ball = ballArr[index];
      ball.show();
    }
  }, 60);
});
