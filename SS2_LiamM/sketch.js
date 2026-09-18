/*
Liam M.
"Growing Tomato Plants"
I wanted to use this sketch to explore plant growth through code with a simple representation of the groth of tomatos, this connects to my theme of expolring the natural world.

**Instructions**
    Move mouse from the left side of the sketch to the right to see the tomatos grow, moving right to left with make them shink.
    Press mouse to reset ripeness (color of tomato).
*/

let grow = 15;
let r = 147;
let g = 227;
let b = 136;

function setup() {
    createCanvas(800, 600);
   
}

function draw() {
    //Sky
    background(154, 209, 245);
    //Sun
    fill(250, 237, 50);
    stroke(250, 237, 50, 75);
    strokeWeight(15);
    ellipse(width * 0.90, height * 0.15, 75, 75);
    //Cloud
    //color
    fill(255, 255, 255, 230);
    strokeWeight(15);
    stroke(255, 255, 255, 100);
    //shape
    ellipse(width * 0.10, height * 0.25, 150, 75);
    ellipse(width * 0.20, height * 0.25, 140, 85);
    ellipse(width * 0.15, height * 0.20, 160, 85);
    ellipse(width * 0.25, height * 0.20, 160, 85);

    //Stems
    //color
    stroke(75, 179, 61);
    strokeWeight(5);
    //location
    line(width * 0.25, height, width * 0.25, height / 5);
    line(width * 0.50, height, width * 0.50, height / 5);
    line(width * 0.75, height, width * 0.75, height / 5);

    //Vines
    strokeWeight(3);
    //vines1
    line(width * 0.23, 200, width * 0.25, 190);
    line(width * 0.27, 300, width * 0.25, 290);
    line(width * 0.23, 400, width * 0.25, 390);
    //vines2
    line(width * 0.48, 200, width * 0.50, 190);
    line(width * 0.52, 300, width * 0.50, 290);
    line(width * 0.48, 400, width * 0.50, 390);
    //vines3
    line(width * 0.73, 200, width * 0.75, 190);
    line(width * 0.77, 300, width * 0.75, 290);
    line(width * 0.73, 400, width * 0.75, 390);

    //Tomato
    noStroke()
    fill(r, g, b);
    //plant1
    ellipse(width * 0.23, 200, mouseX / grow, mouseX / grow);
    ellipse(width * 0.27, 300, mouseX / grow, mouseX / grow);
    ellipse(width * 0.23, 400, mouseX / grow, mouseX / grow);
    //plant2
    ellipse(width * 0.48, 200, mouseX / grow, mouseX / grow);
    ellipse(width * 0.52, 300, mouseX / grow, mouseX / grow);
    ellipse(width * 0.48, 400, mouseX / grow, mouseX / grow);
    //plant3
    ellipse(width * 0.73, 200, mouseX / grow, mouseX / grow);
    ellipse(width * 0.77, 300, mouseX / grow, mouseX / grow);
    ellipse(width * 0.73, 400, mouseX / grow, mouseX / grow);
    
    //Planter Box  
    stroke(125, 63, 53);
    strokeWeight(25);  
    fill(150, 93, 77);
    rect(-15, height - height / 5, width + 30);
   
    r += 0.6;
    g -= 0.6;
    b -= 0.3;
}

function mousePressed() {
    //Change tomato color to look more ripe on mouse press
    r = 147;
    g = 227;
    b = 136;

}