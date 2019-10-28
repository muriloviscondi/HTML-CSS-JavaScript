var font = createFont("Arial Bold");

fill(0, 0, 0);
ellipse(200, 200, 375, 375);

fill(0, 163, 71);
textSize(30);
text("TEST YOUR LUCK", 70, 84);

textSize(12);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 3) {
    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);
    textFont(font, 18);
    fill(255, 204, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    strokeWeight(5);
    text("WOOOWW", 153, 200);
    text("YOU HAVE", 153, 230); 
    textSize(32);
    fill(255, 0, 0);
    text("FIND IT", 145, 265); 
    image(getImage("creatures/Hopper-Cool"), 287, 250, 97, 128);
    image(getImage("creatures/Hopper-Cool"), 15, 15, 97, 128);
    image(getImage("creatures/Hopper-Jumping"), 287, 15, 97, 128);
    image(getImage("creatures/Hopper-Jumping"), 15, 250, 97, 128);
    
} else {
    textFont(font, 14);
    text("PUSH THE", 165, 192);
    textSize(21);
    fill(255, 0, 0);
    text("RESTART", 152, 216);
    textSize(14);
    fill(255, 255, 255);
    text("AND TRY TO", 161, 235);
    text("FIND THE NUMBER", 137, 255);
    text("THREE", 177, 275);
}


if (answer === 2 || answer === 4 || answer === 5) {
    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);
    textFont(font, 18);
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    textSize(21);
    fill(255, 0, 0);
    text("TRY AGAIN", 142, 199);
    textSize(14);
    fill(255, 255, 255);
    text("FIND THE NUMBER", 137, 238);
    text("THREE", 177, 261);
} else {
        image(getImage("creatures/Hopper-Jumping"), 15, 250, 97, 128);
}
