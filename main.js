// Variables

let cup;
let scoops;
let gameover;

const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

// afficher les éléments

function draw() {
	ctx.clearRect(0, 0, W, H);

	ctx.fillStyle = 'white';
	ctx.font = '18px serif';

	// la coupe de glace
	cup.draw();

	//Obstacles avec la coupe
	if (frames % 150 === 0) {
		var scoop = new Scoop();
		scoops.push(scoop);
	}

	scoops.forEach(function(scoop) {
		scoop.y += 5;
		scoop.draw();
	});

	for (scoop of scoops) {
		if (scoop.hits(cup)) {
			console.log('miam');
			//  gameover = true;
		}
	}
}

// les éléments bougent

document.onkeydown = function(e) {
	if (!cup) return;

	switch (e.keyCode) {
		case 37:
			cup.moveLeft();
			console.log('left', cup);
			break;
		case 39:
			cup.moveRight();
			console.log('right', cup);
			break;
	}
};

// function clearCanvas() {
// 	ctx.clearRect(0, 0, 1200, 600);
// }

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
var frames = 0;
function animLoop() {
	frames++;

	draw();

	if (!gameover) {
		requestAnimationFrame(animLoop);
	}
}

function startGame() {
	gameover = false;
	cup = new Cup();
	scoops = [];

	requestAnimationFrame(animLoop);
}

// lance le jeu
document.getElementById('start-button').onclick = function() {
	startGame();
};
