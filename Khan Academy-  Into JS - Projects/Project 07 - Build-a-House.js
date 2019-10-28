background(219, 255, 255);

for (var wallX = 2; wallX < 10; wallX++) {
    for (var wallY = 4; wallY < 12; wallY++) {
        image(getImage("cute/BrownBlock"),wallX*32, wallY*32, 54, 55);
    }
}

fill(219, 150, 46);
triangle(200, 28, 350, 150, 50, 150);

image(getImage("cute/DoorTallClosed"), 170, 250, 60, 122);
image(getImage("creatures/Winston"), 14, -11, 122, 122);

for (var wallX = 0; wallX < 20; wallX++) {
    for (var wallY = 11; wallY < 12; wallY++) {
        image(getImage("cute/GrassBlock"),wallX*32, wallY*32, 32, 55);
    }
}

for (var wallX = 0; wallX < 14; wallX++) {
    for (var wallY = 10; wallY < 11; wallY++) {
        image(getImage("cute/TreeUgly"),wallX*31, wallY*32, 41, 64);
    }
}

var windowsX =80;
while (windowsX < 300) {
    image(getImage("cute/WindowTall"), windowsX, 155, 59, 112);
    windowsX += 178;
}
