var xBike = 552;
var yBike = 189;
var xRange = 200;
var yRange = 200;


draw = function() {

background(179, 179, 179);

fill(255, 255, 0);
rect(xRange,yRange,50,17);
rect(xRange-100,yRange,50,17);
rect(xRange+100,yRange,50,17);
rect(xRange-200,yRange,50,17);
rect(xRange+200,yRange,50,17);
rect(xRange-300,yRange,50,17);
rect(xRange-400,yRange,50,17);
rect(xRange-500,yRange,50,17);
rect(xRange-600,yRange,50,17);
rect(xRange-700,yRange,50,17);

noFill();
stroke(0, 0, 0);
strokeWeight(16);
ellipse(xBike-98,yBike+50,90,90);//pneu
ellipse(xBike+87,yBike+50,90,90);//pneu

noStroke();
fill(0, 0, 0);
quad(xBike+17, yBike-21, xBike+41, yBike-33, xBike+24, yBike+64, xBike, yBike+64);//back leg
quad(xBike, yBike-30, xBike+18, yBike-23, xBike-16, yBike-4, xBike-48, yBike-4);//front leg
quad(xBike-48, yBike-4, xBike-16, yBike-4, xBike+7, yBike+15, xBike-7, yBike+27);//front leg
quad(xBike-53, yBike-59, xBike-40, yBike-77, xBike+41, yBike-33, xBike+33, yBike-11);//upper body
quad(xBike-78, yBike-21, xBike-51, yBike-61, xBike-37, yBike-51, xBike-61, yBike-16);//arm
ellipse(xBike+-70,yBike+-81,45,45);//head


fill(0, 0, 0);
textSize(40);
text("MOVE YOUR BODY", 14, 51);
textSize(20);
text("PRACTICE SPORT", 20, 380);
fill(255, 0, 0);
textSize(30);
text("TRAINING", 223, 383);

if(xBike < -130) {
    xBike = 553;
}

if(xRange > 500) {
    xRange=200;
}

xBike -=4;
xRange += 3;


};
