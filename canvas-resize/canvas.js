const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
// Alter width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }
  draw() {
    context.beginPath();
    context.arc(
      this.x,
      this.y,
      this.radius,
      (Math.PI / 180) * 0,
      (Math.PI / 180) * 360,
      true
    );
    context.strokeStyle = "yellow";
    context.stroke();
  }

  update() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}
let circleArray = [];

for (let i = 0; i < 100; i++) {
  const radius = 25;
  let x = Math.random() * (window.innerWidth - 2 * radius) + radius;
  let y = Math.random() * (window.innerHeight - 2 * radius) + radius;

  //velocity
  let dx = (Math.random() - 0.5)*4;
  let dy =( Math.random() - 0.5 )*4;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);

  //used to clear frame
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }
}
animate();
