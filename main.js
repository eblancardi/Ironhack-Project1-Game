const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
ctx.fillStyle = 'white';
ctx.font = '18px serif';

// Variables

var cup;
var scoop1;
var scoop2;
var scoop3;
var gameover;
var yumyum;
var raf;
var frames = 0;
var y1 = 0;
var y2 = 0;
var y3 = 0;
scoop1 = new Scoop ("./Images/scoop1.png", 50, 50);
scoop2 = new Scoop ("./Images/scoop2.png", 100, 100);
scoop3 = new Scoop ("./Images/scoop3.png", 150, 150);
var scoops = [];

// lance le jeu

document.getElementById("start-button").onclick = function() {
  startGame();
};

// afficher les éléments

function draw() {
  ctx.clearRect(0,0,W,H);

  scoops.forEach(function (oneScoop) {
    oneScoop.y += 2;
    oneScoop.draw();
  });
  cup.draw();
}; 

function animLoop(){
  frames++;
  if(frames % 30 === 0) {
    var chiffre = Math.random()*1000;
    var unScoop = new Scoop ("./Images/scoop1.png", chiffre, 0);
    scoops.push(unScoop);
  };
  
  draw();

  requestAnimationFrame(animLoop);
};

function startGame() {
  gameover = false;
  cup = new Cup()

  requestAnimationFrame(animLoop);
};

// les éléments bougent

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: cup.moveLeft();  console.log('left', cup); break;
    case 39: cup.moveRight(); console.log('right', cup); break;
  }
};

function clearCanvas() {
  ctx.clearRect(0,0,1200,600);
};

// Obstacles avec la cup
/* if (frames % 150 === 0) {
    var scoops = new Scoop();
    scoops.push(scoops);
  };

 obstacles.forEach(function (cup) {
    cup.y += 5;
    cup.draw();
  };

 for (cup of scoops) {
   (cup.hits(scoops)) {
      console.log('miam');
      gameover = true;
    };
  }; 

/* function detectCollision(a , b) {
    return a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  };

function gestcollisions (){
  scoops.forEach(function (scoop, i){
  if (detectCollision(scoop, cup)){
    scoops.splice (i,1);
    console.log("ok")
  }
})
};*/ 
