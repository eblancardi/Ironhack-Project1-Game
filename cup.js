class Cup {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

    const imgRatio = img.naturalWidth/img.naturalHeight;

    this.w = 100;
    this.h = this.w/imgRatio; // use ratio to compute `carHeight`

    this.x = W/2-this.w/2;
    this.y = H-this.h-100;
  }
  img.src = "./Images/cup2.png"; 
};

draw() {
  if (!this.img) return; 
  ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

moveLeft() {
  this.x += -20;
}

moveRight() {
  this.x += 20;
}

var cup = new Cup();

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: cup.moveLeft();  console.log('left',  cup); break;
    case 39: cup.moveRight(); console.log('right', cup); break;
  }
  
  ctx.clearRect(0,0, 400,300);
  cup.draw();
};


