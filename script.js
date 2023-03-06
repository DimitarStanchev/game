let canvas = document.getElementById("gameCanvas");
let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
let sqsize = 50;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;

let context = canvas.getContext("2d");

let herox = 1;
let heroy = 2;
let prasex = 0;
let prasey = 1;

let img = new Image();
img.src = "hero.png";
let img1 = new Image();
img1.src = "prase.png";

context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize, sqsize);
context.drawImage(img1, prasex * sqsize, prasey * sqsize, sqsize, sqsize);

function drawMapAndHero() {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvasWidth * sqsize, canvasHeight * sqsize);
    
    context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize, sqsize);
    context.drawImage(img1, prasex * sqsize, prasey * sqsize, sqsize, sqsize);
    
    for (let i = 0; i < canvasWidth; i++) {
	    for (let j = 0; j < canvasHeight; j++) {
		    context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
	    }
    }
}

drawMapAndHero();

canvas.onclick = function(e) {
    let mousePosX = e.x - e.originalTarget.offsetLeft;
    let mousePosY = e.y - e.originalTarget.offsetTop;
    herox = Math.floor(mousePosX / sqsize);
    heroy = Math.floor(mousePosY / sqsize);

    drawMapAndHero();
}

function moveUp() {
    heroy--;
    drawMapAndHero();
}
function moveDown() {
    heroy++;
    drawMapAndHero();
}
function moveLeft() {
    herox--;
    drawMapAndHero();
}
function moveRight() {
    herox++;
    drawMapAndHero();
}
document.onkeypress = function(e) {
    let key = e.key;
    switch(key) {
        case "w": moveUp(); break;
        case "s": moveDown(); break;
        case "a": moveLeft(); break;
        case "d": moveRight(); break;
    }
}