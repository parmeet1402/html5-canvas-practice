    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Mouse object for keeping coordinates
    let mouse = {
    x: undefined,
    y: undefined
    };

    // Maximum radius and Minimum radius
    const maxRadius = 50;

    const colorArray = ["#EA959D", "#DB534D", "#D53025", "#B4061F", "#950926"];

    // event handlers
    window.addEventListener("mousemove", event => {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
    });

    window.addEventListener("resize", () => {
    // Alter width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
    });

    class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[parseInt(Math.random() * colorArray.length)];
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
        context.fillStyle = this.color;
        context.fill();
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

        // interactivity

        if (
        mouse.x - this.x < 50 && // Right
        mouse.x - this.x > -50 && // Left
        mouse.y - this.y < 50 && // Bottom
        mouse.y - this.y > -50 // Top
        ) {
        if (this.radius < maxRadius) {
            this.radius++;
        }
        } else if (this.radius > this.minRadius) {
        this.radius--;
        }
    }
    }

    let circleArray = [];
    let init = () => {
    circleArray = [];
    for (let i = 0; i < 600; i++) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (window.innerWidth - 2 * radius) + radius;
        let y = Math.random() * (window.innerHeight - 2 * radius) + radius;

        //velocity
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
    };

    let animate = () => {
    requestAnimationFrame(animate);

    //used to clear frame
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        circleArray[i].draw();
    }
    };
    init();
    animate();
