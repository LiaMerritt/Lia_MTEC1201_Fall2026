//Lia M
//Autumn Tree at Sunset
/*
Over the semester a concept I'd like to explore the natural world through code
This sketch ties into that theme by presenting a simple landscape with a tree in it's autumn colors
*/

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255, 149, 117);

//This is the sun
    strokeWeight(10);
    stroke(237, 150, 55, 85);
    fill(237, 135, 40);
    ellipse(200, 430, 270, 255);

//This is the ground
    strokeWeight(0);
    fill(71, 52, 32);
    ellipse(400, 600, 1500, 350);

//This is the tree's shadow
    fill(0, 0, 0, 100);
    quad(475, 500, 600, 500, 675, 600, 505, 600);

//This is the tree's trunk
    fill(33, 21, 17);
    quad(475, 500, 600, 500, 550, 350, 500, 350);
    quad(550, 350, 500, 350, 485, 265, 575, 265);

//These are the branches of the tree
    triangle(485, 265, 425, 150, 525, 265);
    triangle(525, 265, 655, 150, 575, 265);

//These are the leaves of the tree
    strokeWeight(3);
    stroke(156, 40, 34, 235);
    fill(156, 40, 34, 235);
    ellipse(525, 200, 175, 130);
    ellipse(425, 150, 195, 170);
    ellipse(655, 150, 195, 170);
    ellipse(525, 100, 225, 190);
}
