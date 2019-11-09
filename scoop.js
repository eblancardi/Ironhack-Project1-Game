let iceScoop = ['./Images/scoop1.png', './Images/scoop2.png', './Images/scoop3.png'];

// Fonction d'aide pour le random

function random(from, to) {
	return Math.floor(from + Math.random() * (to - from));
}

class Scoop {
	constructor() {
		const img = document.createElement('img');
		img.onload = () => {
			this.img = img;

			const imgRatio = img.naturalWidth / img.naturalHeight;

			this.w = 100;
			this.h = this.w / imgRatio;

			this.x = random(0, W - this.w);
			this.y = 0;
		};
		img.src = iceScoop[Math.floor(Math.random() * iceScoop.length)];
	}

	draw() {
		if (!this.img) return;
		ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
	}

	hits(cup) {
		return (
			cup.x + cup.w >= this.x && cup.x <= this.x + this.w && (cup.y <= this.y + this.h && cup.y + cup.h >= this.y)
		);
	}
}
