var bodyX = 200;
var bodyY = 220;
var bodyW = 100;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(0, 0, 0);
    ellipse(bodyX-23, bodyY-97,20,20);//left ear
    ellipse(bodyX+23, bodyY-97,20,20);//right ear
        ellipse(bodyX, bodyY, bodyW, 111); // body?
    fill(255, 255, 255);
    ellipse(bodyX, bodyY, bodyW,80);
    ellipse(bodyX, bodyY-74, bodyH, 57); // face?
    fill(0, 0, 0);
    ellipse(bodyX-10, bodyY-79,10,13);//left eye
    ellipse(bodyX+10, bodyY-79,10,13);//right eye
    
    ellipse(bodyX, bodyY-69,7,7);//nouse
    
    fill(255, 0, 0);
    ellipse(bodyX, bodyY-59,20,5);//mouth
    
    fill(0, 0, 0);
    ellipse(bodyX-29, bodyY-23,23,39); //left hand
    ellipse(bodyX+29, bodyY-23,23,39); //right hand
    
    ellipse(bodyX-31, bodyY+54,30,20); //left feet
    ellipse(bodyX+31, bodyY+54,30,20); //right feet
};
