class Cup {
	constructor() {
		const img = document.createElement('img');
		img.onload = () => {
			this.img = img;

			const imgRatio = img.naturalWidth / img.naturalHeight;

			this.w = 100;
			this.h = this.w / imgRatio;

			this.x = this.w / 2 - this.w / 2;
			this.y = H - this.h - 100;
			this.speed = 75;
		};
		img.src = './Images/cup.png';
	}

	draw() {
		if (!this.img) return;
		ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
	}

	moveLeft() {
		this.x += -10;
	}

	moveRight() {
		this.x += 10;
	}
}
