/* creating a canvas */
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

let image = new Image();
image.onload = function(){
    console.log('Loaded image!');
    context.drawImage(image,0,0,100,100);
}
image.src="https://instagram.fixc2-1.fna.fbcdn.net/vp/018266e1121cef06604b87c7e04e9982/5CBFDF95/t51.2885-19/s150x150/47581365_990929974450308_5660450271138938880_n.jpg?_nc_ht=instagram.fixc2-1.fna.fbcdn.net";

context.strokeRect(300, 400, 100, 150);
context.fillRect(200,200,50,200);


context.beginPath();
context.moveTo(300,100);
context.lineTo(300,200);
context.lineTo(400,100);
context.lineTo(300,100);
/* context.fill(); */
context.stroke();
