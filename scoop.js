function random(from, to) {
  return Math.floor(from + Math.random()*(to - from));
}

class Scoop 
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
img.src = "./Images/scoop1.png";
img.src= "./Images/scoop2.png";
img.src= "./Images/scoop3.png";
};












  


