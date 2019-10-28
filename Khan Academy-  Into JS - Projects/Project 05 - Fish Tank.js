background(89, 216, 255);

// large oxygen bubbles
var drawBubblesLarge = function(centerX, centerY){
noFill();
stroke(97, 162, 242);
strokeWeight(0.5);
ellipse(centerX, centerY, 50, 50);
};

// medium oxygen bubbles
var drawBubblesMedium = function(centerX, centerY){
noFill();
stroke(97, 162, 242);
strokeWeight(0.5);
ellipse(centerX, centerY, 25, 25);
};

// small oxygen bubbles
var drawBubblesSmall = function(centerX, centerY){
noFill();
stroke(97, 162, 242);
strokeWeight(0.5);
ellipse(centerX, centerY, 12.5, 12.5);
};

//fish1
var drawFish1 = function(centerX, centerY){
var bodyLength = 94;
var bodyHeight = 100;
var bodyColor = color(162, 0, 255);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

//fish2
var drawFish2 = function(centerX, centerY){
var bodyLength = 47;
var bodyHeight = 23;
var bodyColor = color(187, 255, 0);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/-4;
var tailHeight = bodyHeight/-2;
triangle(centerX-bodyLength/-2, centerY,
         centerX-bodyLength/-2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/-2-tailWidth, centerY+tailHeight);
// eye
fill(0, 0, 255);
ellipse(centerX+bodyLength/-5, centerY, bodyHeight/5, bodyHeight/5);
};

//fish3
var drawFish3 = function(centerX, centerY){
var bodyLength = 94;
var bodyHeight = 60;
var bodyColor = color(158, 214, 139);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

//fish4
var drawFish4 = function(centerX, centerY){
var bodyLength = 94;
var bodyHeight = 100;
var bodyColor = color(240, 105, 72);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/-4;
var tailHeight = bodyHeight/-2;
triangle(centerX-bodyLength/-2, centerY,
         centerX-bodyLength/-2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/-2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/-4, centerY, bodyHeight/-5, bodyHeight/5);
};
var drawCoral = function(centerX, centerY){

};
         
drawBubblesLarge(136, 155);
drawBubblesMedium(33, 248);
drawBubblesSmall(349,100);
drawBubblesLarge(244, 66);
drawBubblesMedium(33, 248);
drawBubblesLarge(322, 19);
drawBubblesLarge(149, 66);
drawBubblesLarge(46, 136);
drawBubblesLarge(347, 309);
drawBubblesLarge(244, 400);
drawBubblesSmall(392,151);
drawBubblesSmall(326,240);
drawBubblesSmall(100,151);
drawBubblesSmall(120,70);
drawBubblesSmall(80,300);
drawBubblesSmall(50,50);
drawBubblesSmall(10,366);
drawBubblesSmall(225,199);
drawBubblesLarge(228, 274);
drawBubblesLarge(100, 322);
drawBubblesLarge(78, 17);
drawBubblesMedium(59, 351);
drawBubblesSmall(349,100);
drawBubblesMedium(99, 369);
drawBubblesSmall(290,148);
drawBubblesMedium(293, 369);
drawBubblesSmall(246,333);
drawBubblesMedium(124, 254);
drawBubblesSmall(176,324);
drawFish1(230, 241);
drawFish1(121, 339);
drawFish2(363, 200);
drawFish2(323, 227);
drawFish2(302, 190);
drawFish3(272, 104);
drawFish3(345, 35);
drawFish4(117, 59);
drawFish4(59, 165);
