var canvas = document.getElementById('game-board');
var ctx = canvas.getContext('2d');

let cup;
let scoop1;
let scoop2;
let scoop3;
let gameover;
let yumyum;

const W = ctx.canvas.width;
const H = ctx.canvas.height;
ctx.fillStyle = 'white';
ctx.font = '18px serif';

document.getElementById("start-button").onclick = function() {
  startGame();
}

function draw() {
  ctx.clearRect(0,0,W,H);

scoop1.draw();
scoop2.draw();
scoop3.draw();

draw(cup)
  
hits(cup){
  return (
    (cup.x+cup.w >= this.x && cup.x <= this.x+this.w) // ---|🚗|---
    &&
    (cup.y <= this.y+this.h && cup.y+cup.h >= this.y)
  );
}
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
var y1 = 0;
var y2 = 0;
var y3 = 0;

function clearCanvas() {
  ctx.clearRect(0,0,700,450);
}

function updateCanvas(){
  y1 += 1;
  y2 += 2;
  y3 += 3;
  clearCanvas();
  ctx.fillRect( 50,y1,50,50);
  ctx.fillRect(150,y2,50,50);
  ctx.fillRect(250,y3,50,50);  window.requestAnimationFrame(updateCanvas);
}

window.requestAnimationFrame(updateCanvas);





