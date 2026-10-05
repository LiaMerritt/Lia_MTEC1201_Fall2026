/*
Liam M.
"Growing Tomato Plants (name subject to change) ver. 3"
I wanted to use this sketch to expand on my prevous assignment by having an actual win condtion and a degree of challenge with a "time challenge" feature.

**Instructions**
Press and hold H for directions
Click the tomato plants while Watering Can is equipped to increase its growth percentage.
When it reaches 100% equip the basket and click the plant to harvest the tomatoes.
To equip the Watering Can press E (case doesn't matter).
To equip the Basket press R (case doesn't matter).
Press T to start the time challenge, a timer will appear counting down from 60, if you get 30 or more in that time a win message will appear.
*/

const psize = 150;
//row variables
let row1 = 0;
let row2 = 0;
//column variables
let column1 = 0;
let column2 = 0;
//plant stage variables
let p1stage = 0;
let p2stage = 0;
let p3stage = 0;
let p4stage = 0;
//tomato size variables
let tsize1 = 0;
let tsize2 = 0;
let tsize3 = 0;
let tsize4 = 0;
//tomato color variables
let t1r = 0;
let t1g = 0;
let t1b = 0;
let t2r = 0;
let t2g = 0;
let t2b = 0;
let t3r = 0;
let t3g = 0;
let t3b = 0;
let t4r = 0;
let t4g = 0;
let t4b = 0;
//plot1location
let s1x1 = 0;
let s1x2 = 0;
let s1x3 = 0;
let s1x4 = 0;
let s1y1 = 0;
let s1y2 = 0;
let s1y3 = 0;
let s1y4 = 0;
//plot2location
let s2x1 = 0;
let s2x2 = 0;
let s2x3 = 0;
let s2x4 = 0;
let s2y1 = 0;
let s2y2 = 0;
let s2y3 = 0;
let s2y4 = 0;
//plot3location
let s3x1 = 0;
let s3x2 = 0;
let s3x3 = 0;
let s3x4 = 0;
let s3y1 = 0;
let s3y2 = 0;
let s3y3 = 0;
let s3y4 = 0;
//plot3location
let s4x1 = 0;
let s4x2 = 0;
let s4x3 = 0;
let s4x4 = 0;
let s4y1 = 0;
let s4y2 = 0;
let s4y3 = 0;
let s4y4 = 0;
//menu on/off
let watercan = 0;
let basket = 0;
let tscore= 0;
let timerscore= 0;
//images
let imgwatercan;
let imgbasket;
let imgtomato;
let imgnote;
let imgtimer;
//Timer
let timerOn = 0;
let timer = 0;
let currentTime = 0;
let savedTime = 0;



async function setup() {
    createCanvas(800, 600);

    imgwatercan = await loadImage("assets/WateringCan.png");
    imgbasket = await loadImage("assets/Basket.png");
    imgtomato = await loadImage("assets/TempTomato.png");
    imgnote = await loadImage("assets/Note.png");
    imgtimer = await loadImage("assets/Timer.png");
    imageMode(CENTER);
    textAlign(CENTER);

}

function draw() {
    //Backround
    background(203, 255, 190);

    //Directions Text
    textSize(20);
    fill(90, 76, 64);
    text('Hold "H" for directions',120, 30);

    //Menu
    fill(244, 230, 187);
    strokeWeight(3);
    stroke(200, 186, 143);
    rectMode(CENTER);
    rect(width / 2 , height * 0.88, width, height * 0.25);
    textSize (75);
    image(imgwatercan, 140, 520);
    image(imgbasket, 330, 520);   
    image(imgtomato, 500, 525, imgtomato.width * 0.8, imgtomato.height * 0.8);
    textSize(40);
    fill(90, 76, 64);
    noStroke();
    text("Harvested: " + tscore, 650, 560);
    if(timerscore >= 30)
    {
        fill(189, 186, 244);
    }
    else
    {
       fill(90, 76, 64);     
    }
    text("Score: " + timerscore, 650, 525);

    fill(90, 76, 64);
    textSize(12);
    if(watercan == 1)
    {
        text('Equipped', 140, 570);
    }
    else
    {
        text('Eqiup Watering Can With "E"', 140, 570);
    }
    if(basket == 1)
    {
        text('Equipped', 330, 570);
    }
    else
    {
        text('Eqiup Basket With "R"', 330, 570);
    }

    //Land plots
    fill(208, 187, 158);
    //noStroke();
    strokeWeight(3);
    stroke(188,169,143);

    column1 = width * 0.30;
    column2 = width * 0.70;
    row1 = height * 0.20;
    row2 = height * 0.55;

    rect(column1, row1, psize, psize, 30);
    rect(column2, row1, psize, psize, 30);
    rect(column1, row2, psize, psize, 30);
    rect(column2, row2, psize, psize, 30);

    //Growth Tracker
    fill(213, 255, 240);
    stroke(74, 166, 73);
    strokeWeight(1);
    textSize(20);
    //plant1
    text(p1stage + "%" , column1, row1 + 95);
    //plant2
    text(p2stage + "%", column2, row1 + 95);
    //plant3
    text(p3stage + "%", column1, row2 + 95);
    //plant4
    text(p4stage + "%", column2, row2 + 95);

    //plot 1 selector
    s1x1 = 160;
    s1y1 = 40;
    s1x2 = 320;
    s1y2 = 40;
    s1x3 = 320;
    s1y3 =200;
    s1x4 = 160;
    s1y4 = 200;
    if(mouseX >= s1x1 && mouseX <= s1x3 && mouseY >= s1y1 && mouseY <= s1y3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(s1x1, s1y1, s1x2, s1y2, s1x3, s1y3, s1x4, s1y4);
    }

    //plant1
    strokeWeight(3);
    stroke(74, 166, 73);
    line(column1, row1 - 50, column1, row1 + 50);

    line(column1, row1 - 20, column1 - 10, row1 - 10);
    line(column1, row1 + 20, column1 + 10, row1 + 30);

    //p1 tomato
    noStroke();

    if(p1stage > 100)
    {
        p1stage = 100
    }

    if (p1stage == 0)
    {
        t1r = 150;
        t1g = 230;
        t1b = 150;
        tsize1 = 0; 
    }
    if (p1stage  >= 25 && p1stage <= 50) 
    {
        t1r = 150;
        t1g = 230;
        t1b = 150;
        tsize1 = 6;
    }
    if (p1stage >= 50 && p1stage <= 75)
    {
        t1r = 180;
        t1g = 200;
        t1b = 120;
        tsize1 = 9;
    }
    if (p1stage >= 75 && p1stage <= 100)
    {
        t1r = 200;
        t1g = 160;
        t1b = 100;
        tsize1 = 12;
    }
    if (p1stage == 100)
    {
        t1r = 255;
        t1g = 100;
        t1b = 50;
        tsize1 = 15;
    }
    fill(t1r, t1g, t1b);
    ellipse(column1 - 10, row1 - 10, tsize1, tsize1);
    ellipse(column1 + 10, row1 + 30, tsize1, tsize1);

    //plot 2 selector
    s2x1 = 480;
    s2y1 = 40;
    s2x2 = 640;
    s2y2 = 40;
    s2x3 = 640;
    s2y3 =200;
    s2x4 = 480;
    s2y4 = 200;
    if(mouseX >= s2x1 && mouseX <= s2x3 && mouseY >= s2y1 && mouseY <= s2y3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(s2x1, s2y1, s2x2, s2y2, s2x3, s2y3, s2x4, s2y4);
    }

    //plant2
    strokeWeight(3);
    stroke(74, 166, 73);
    line(column2, row1 - 50, column2, row1 + 50);

    line(column2, row1 - 20, column2 - 10, row1 - 10);
    line(column2, row1 + 20, column2 + 10, row1 + 30);

    //p2 tomato
    noStroke();

    if(p2stage > 100)
    {
        p2stage = 100
    }

    if (p2stage == 0)
    {
        t2r = 150;
        t2g = 230;
        t2b = 150;
        tsize2 = 0; 
    }
    if (p2stage  >= 25 && p2stage <= 50) 
    {
        t2r = 150;
        t2g = 230;
        t2b = 150;
        tsize2 = 6;
    }
    if (p2stage >= 50 && p2stage <= 75)
    {
        t2r = 180;
        t2g = 200;
        t2b = 120;
        tsize2 = 9;
    }
    if (p2stage >= 75 && p2stage <= 100)
    {
        t2r = 200;
        t2g = 160;
        t2b = 100;
        tsize2 = 12;
    }
    if (p2stage == 100)
    {
        t2r = 255;
        t2g = 100;
        t2b = 50;
        tsize2 = 15;
    }
    fill(t2r, t2g, t2b);
    ellipse(column2 - 10, row1 - 10, tsize2, tsize2);
    ellipse(column2 + 10, row1 + 30, tsize2, tsize2);

    //plot 3 selector
    s3x1 = 160;
    s3y1 = 250;
    s3x2 = 320;
    s3y2 = 250;
    s3x3 = 320;
    s3y3 = 410;
    s3x4 = 160;
    s3y4 = 410;
    if(mouseX >= s3x1 && mouseX <= s3x3 && mouseY >= s3y1 && mouseY <= s3y3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(s3x1, s3y1, s3x2, s3y2, s3x3, s3y3, s3x4, s3y4);
    }

    //plant3
    strokeWeight(3);
    stroke(74, 166, 73);
    line(column1, row2 - 50, column1, row2 + 50);

    line(column1, row2 - 20, column1 - 10, row2 - 10);
    line(column1, row2 + 20, column1 + 10, row2 + 30);

    //p3 tomato
    noStroke();

    if(p3stage > 100)
    {
        p3stage = 100
    }

    if (p3stage == 0)
    {
        t3r = 150;
        t3g = 230;
        t3b = 150;
        tsize3 = 0; 
    }
    if (p3stage  >= 25 && p3stage <= 50) 
    {
        t3r = 150;
        t3g = 230;
        t3b = 150;
        tsize3 = 6;
    }
    if (p3stage >= 50 && p3stage <= 75)
    {
        t3r = 180;
        t3g = 200;
        t3b = 120;
        tsize3 = 9;
    }
    if (p3stage >= 75 && p3stage <= 100)
    {
        t3r = 200;
        t3g = 160;
        t3b = 100;
        tsize3 = 12;
    }
    if (p3stage == 100)
    {
        t3r = 255;
        t3g = 100;
        t3b = 50;
        tsize3 = 15;
    }
    fill(t3r, t3g, t3b);
    ellipse(column1 - 10, row2 - 10, tsize3, tsize3);
    ellipse(column1 + 10, row2 + 30, tsize3, tsize3);

    //plot 4 selector
    s4x1 = 480;
    s4y1 = 250;
    s4x2 = 640;
    s4y2 = 250;
    s4x3 = 640;
    s4y3 = 410;
    s4x4 = 480;
    s4y4 = 410;
    if(mouseX >= s4x1 && mouseX <= s4x3 && mouseY >= s4y1 && mouseY <= s4y3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(s4x1, s4y1, s4x2, s4y2, s4x3, s4y3, s4x4, s4y4);
    }

    //plant4
    strokeWeight(3);
    stroke(74, 166, 73);
    line(column2, row2 - 50, column2, row2 + 50);

    line(column2, row2 - 20, column2 - 10, row2 - 10);
    line(column2, row2 + 20, column2 + 10, row2 + 30);

    //p4 tomato
    noStroke();

    if(p4stage > 100)
    {
        p4stage = 100
    }

    if (p4stage == 0)
    {
        t4r = 150;
        t4g = 230;
        t4b = 150;
        tsize4 = 0; 
    }
    if (p4stage  >= 25 && p4stage <= 50) 
    {
        t4r = 150;
        t4g = 230;
        t4b = 150;
        tsize4 = 6;
    }
    if (p4stage >= 50 && p4stage <= 75)
    {
        t4r = 180;
        t4g = 200;
        t4b = 120;
        tsize4e = 9;
    }
    if (p4stage >= 75 && p4stage <= 100)
    {
        t4r = 200;
        t4g = 160;
        t4b = 100;
        tsize4 = 12;
    }
    if (p4stage == 100)
    {
        t4r = 255;
        t4g = 100;
        t4b = 50;
        tsize4 = 15;
    }
    fill(t4r, t4g, t4b);
    ellipse(column2 - 10, row2 - 10, tsize4, tsize4);
    ellipse(column2 + 10, row2 + 30, tsize4, tsize4);

    //This section of the draw funcion will be related to the timer
    currentTime = millis();
    if(timerOn == 1)
    {
        image(imgtimer, width * 0.93, height * 0.12, imgtimer.width * 2.5, imgtimer.height * 2.5);
        fill(204, 197, 158);
        textSize(30)
        text(timer, width * 0.93, height * 0.155);

        if (currentTime - savedTime > 1000)
        {
            timer --
            savedTime = currentTime

        }
        if(timer <= 0)
        {
            timerOn = 0;
        }
        if(timerscore >= 30)
        {
        fill(189, 186, 244);
        textSize(30);
        text("YOU WIN!!!", width * 0.5, height * 0.25);
        }

    }

        //Image cursor based on tool
    if(watercan == 1)
    {
        image(imgwatercan, mouseX, mouseY, imgwatercan.width * 0.5, imgwatercan.height * 0.5);
    }
        if(basket == 1)
    {
        image(imgbasket, mouseX, mouseY, imgbasket.width * 0.5, imgbasket.height * 0.5);
    }


    
    //Tracks if h is held down to show direction image
    if(keyIsPressed)
    {
        if(key === 'h' || key === 'H')
        {
            image(imgnote, width / 2, height / 2)
        }
    }
}

//uses specific keys
function keyPressed()
{
    //uses e to equip watering can
    if(key === 'e' || key === 'E')
    {
        watercan = 1;
        basket = 0;
    }
    
    //uses r to show basket
    if(key === 'r' || key === 'R')
    {
        watercan = 0;
        basket = 1;
    }

    //uses t to start timer event
    if(key === 't' || key === 'T')
    {
        if(timerOn == 0)
        {
            timerOn = 1;
            timerscore = 0;
            savedTime = currentTime;
            timer = 60;
        }

    }
}

function mousePressed()
{
    //tracks mouse postion to know what plot it is over, if watercan is 1 then adds to growth, if basket is 1 and growth is 100% then resets growth and adds to score
    //plant 1
    if(mouseX >= s1x1 && mouseX <= s1x3 && mouseY >= s1y1 && mouseY <= s1y3)
    {
        if(watercan == 1)
        {
            if(p1stage < 100)
            {
                p1stage += random(1,20);
                p1stage = round(p1stage);
            }
            
        }

        if(basket == 1 && p1stage == 100)
        {
            tscore += 2;
            if(timerOn == 1)
            {
                timerscore +=2;
            }
            p1stage = 0;
        }
    }

    //plant2
    if(mouseX >= s2x1 && mouseX <= s2x3 && mouseY >= s2y1 && mouseY <= s2y3)
    {
        if(watercan == 1)
        {
            if(p2stage < 100)
            {
                p2stage += random(1,20);
                p2stage = round(p2stage); 
            }
            
        }

        if(basket == 1 && p2stage == 100)
        {
            tscore += 2;
            if(timerOn == 1)
            {
                timerscore +=2;
            }
            p2stage = 0;
        }
    }

        //plant 3
        if(mouseX >= s3x1 && mouseX <= s3x3 && mouseY >= s3y1 && mouseY <= s3y3)
    {
        if(watercan == 1)
        {
            if(p3stage < 100)
            {
                p3stage += random(1,20);
                p3stage = round(p3stage); 
            }
            
        }

        if(basket == 1 && p3stage == 100)
        {
            tscore += 2;
            if(timerOn == 1)
            {
                timerscore +=2;
            }
            p3stage = 0;
        }

        
    }

    //plant 4
    if(mouseX >= s4x1 && mouseX <= s4x3 && mouseY >= s4y1 && mouseY <= s4y3)
    {
        if(watercan == 1)
        {
            if(p4stage < 100)
            {
                p4stage += random(1,20);
                p4stage = round(p4stage) 
            }
            
        }

        if(basket == 1 && p4stage == 100)
        {
            tscore += 2;
            if(timerOn == 1)
            {
                timerscore +=2;
            }
            p4stage = 0;
        }
    }
}