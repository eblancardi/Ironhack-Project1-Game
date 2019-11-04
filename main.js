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

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();
  
  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  };

  gameover = false;

  scoop1 = new Scoop ();
  scoop2 = new Scoop ();
  scoop3 = new Scoop ();
  cup = [];

  raf = requestAnimationFrame(animLoop);
};

document.getElementById("start-button").onclick = function() {
  startGame();
  window.requestAnimationFrame(updateCanvas);
};

startGame();

function draw() {
  ctx.clearRect(0,0,W,H);

scoop1.draw();
scoop2.draw();
scoop3.draw();

draw(cup);

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
  ctx.fillRect(scoop1);
  ctx.fillRect(scoop2);
  ctx.fillRect(scoop3);  
  window.requestAnimationFrame(updateCanvas);
}

window.requestAnimationFrame(updateCanvas);
};

hits(cup){
  return (
    (cup.x+cup.w >= this.x && cup.x <= this.x+this.w)
    &&
    (cup.y <= this.y+this.h && cup.y+cup.h >= this.y)
  );
};


