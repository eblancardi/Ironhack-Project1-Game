class Scoop {
  constructor(address, x, y){
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

    const imgRatio = img.naturalWidth/img.naturalHeight;

    this.w = 100;
    this.h = this.w/imgRatio;

    this.x = x;
    this.y = y;
  };
  img.src = address;
  };

  draw() {
    if (!this.img) return; 
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
};

// Fonction d'aide

function random(from, to) {
  return Math.floor(from + Math.random()*(to - from));
};
function random(from, to) {
  return Math.floor(from + Math.random()*(to - from));
}

