// creating a canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

/* *******************************
     BASICS
******************************** */

/*
// Loading an image
let image = new Image();
image.onload = function() {
  console.log("Loaded image!");
  context.drawImage(image, 0, 0, 100, 100);
};
image.src =
  "https://instagram.fixc2-1.fna.fbcdn.net/vp/018266e1121cef06604b87c7e04e9982/5CBFDF95/t51.2885-19/s150x150/47581365_990929974450308_5660450271138938880_n.jpg?_nc_ht=instagram.fixc2-1.fna.fbcdn.net";

// Drawing Rectangle
context.strokeRect(300, 400, 100, 150);
context.fillRect(200, 200, 50, 200);

// Drawing Polygon
context.beginPath();
context.moveTo(300, 100);
context.lineTo(300, 200);
context.lineTo(400, 100);
context.lineTo(300, 100);
// context.fill(); 
context.stroke();

// Drawing Text
context.font = "36pt Impact";

context.strokeStyle = "black";
context.lineWidth = 3;
context.strokeText("CANVAS MEMES!", 400, 300);

context.fillStyle = "white";
context.fillText("CANVAS MEMES!", 400, 300);

 */
/* *********************************
        Photo Manipulation
*********************************** */
// Convert every 10th pixel green

/* 
const imageData = context.getImageData(0, 0, 1000, 1000);
const numberOfPixels = imageData.data.length / 4;
for (let i = 0; i < numberOfPixels; i++) {
  if (i % 10 === 0) {
    //sets green value
    imageData.data[i * 4 + 1] = 255;
    //sets aplha value
    imageData.data[i * 4 + 3] = 255;
  }
}
context.putImageData(imageData, 0, 0);
 */


 // convert image to grayscale
 

