const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");
let ticks = 0;
let snowflackes = [];
let snownees = 0;

let snowdriftQuality = 25;
let snowdrift = [];
for (let i = 0; i < snowdriftQuality; i++) {
    snowdrift.push(0);
}

function snowdirftIndex(x) {
    return Math.floor(x/(500/snowdriftQuality));
}



function drawSquare(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.lineTo(x - r, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.fill()
    //ctx.stroke();
}
// //clearRect(200, 300, 100, 50)
// ctx.lineWidth=5;
// ctx.strokeStyle = "blue";
// ctx.fillStyle = "#123123";
// ctx.lineJoin = "bevel"
// ctx.setLineDash([2, 3, 4, 5, 6, 7])
// let img = new Image();
// img.src = "../assets/icons/favicon.ico";
// // img.onload = function(){
// //     const pattern = ctx.createPattern(img, "repeat");
// //     ctx.fillStyle = pattern;
// //     ctx.lineWidth=20;
// //     ctx.strokeStyle = pattern;
// //     ctx.fillRect(200, 200, 300, 300);
// //     ctx.strokeRect(200, 200, 300, 300);
// // }
// let gradient = ctx.createLinearGradient(0, 0, 500, 500);
// gradient.addColorStop(0.1, "#ff0000");
// gradient.addColorStop(0.3, "#ffff00");
// gradient.addColorStop(0.5, "#00ff00");
// gradient.addColorStop(0.7, "#00ffff");
// gradient.addColorStop(0.9, "#0000ff");
// ctx.fillStyle = gradient;
// ctx.fillRect(0, 0, 500, 500);



// for (let i=0; i<6; i++)
//     //ctx.fillRect(0+i*50, 0+i*50, 300, 100, 50);
//     ctx.strokeRect(0+i*100, 0, 100, 50);

// ctx.strokeStyle = "black"
// ctx.font = "82px Verdana";
// ctx.strokeText("Я мусулман", 0, 150);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateSnow() {
    ctx.fillStyle = "#fefefe";
    while (snowflackes.length <= 60) {
        snowflackes.push({ x: getRandomInt(-10, 510), y: getRandomInt(500, -10), vel: getRandomInt(3, 10), size: getRandomInt(3, 10)});
    }
    for (s in snowflackes) {
        let snow = snowflackes[s];
        snow.y += snow.vel;
        if (snow.y > 510) {
            snowdrift[snowdirftIndex(snow.x)]++;
            snow.y = getRandomInt(-100, -10);
            snow.x = getRandomInt(-10, 510);
            snow.vel = getRandomInt(3, 10);
            snow.size = getRandomInt(3, 10);
        }
        ctx.beginPath();
        ctx.arc(snow.x, snow.y, 12-snow.size, 0, 2 * Math.PI, false);
        ctx.fill()
        //drawSquare(snow.x, snow.y, 12-snow.size);
    }
}

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#444444";
    ctx.fillRect(0, 0, 500, 500);
    ctx.fillStyle = "#79fcff";
    let start_y = 150;
    drawSquare(250, 125, 30);
    drawSquare(250, 125 + 30 + 40 + 3, 40);
    drawSquare(250, 125 + 30 + 40 * 2 + 50 + 6, 50);
    ctx.setLineDash([0])
    ctx.lineWidth = 3;
    ctx.fillStyle = "orange";
    ctx.fillRect(230, 125, -20, 3);
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(235, 115)
    ctx.lineTo(225, 110)
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(262, 117)
    ctx.lineTo(275, 110)
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(257, 140)
    ctx.lineTo(235, 142)
    ctx.stroke();

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(400, 150);
    ctx.lineTo(480, 150);
    ctx.lineTo(440, 70);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(400, 150 + 80);
    ctx.lineTo(480, 150 + 80);
    ctx.lineTo(440, 70 + 80);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(385, 150 + 160);
    ctx.lineTo(495, 150 + 160);
    ctx.lineTo(440, 70 + 160);
    ctx.fill();

    ctx.fillStyle = "#964B00";
    r = 15
    ctx.fillRect(440 - r, 310, r * 2, 30);

    ctx.strokeStyle = "#964B00";
    ctx.beginPath();
    ctx.fillRect(0, 340, 500, 500)
    ctx.moveTo(0, 340)
    ctx.lineTo(500, 340)
    ctx.stroke();
    updateSnow();

    ctx.fillStyle = "white";
    ctx.beginPath();
    // let y = Math.round(snownees/10);
    ctx.moveTo(0, 500);
    //ctx.lineTo(0, 500-y);


    for (let i = 0; i < snowdriftQuality; i++){
        let p = 500/(snowdriftQuality-1)
        
        ctx.lineTo(p*i, 500-snowdrift[i])    
    }
    // ctx.lineTo(0, 510-y);
    // ctx.lineTo(150, 540-y);
    // ctx.lineTo(200, 520-y);
    // ctx.lineTo(300, 525-y);

    //ctx.lineTo(500, 500-y);
    ctx.lineTo(500, 500);
    ctx.fill();
    updateSnow();
}

setInterval(drawScene, 25);
//ctx.stroke();