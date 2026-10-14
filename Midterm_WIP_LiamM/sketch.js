/*
Liam M.
"Growing Tomato Plants (name subject to change) ver. 3.5"
(midterm WIP, better description later)

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
let imgbuttonGame;
let imgbuttonShop
let imgbuttonManual;
let imgbuttonReset;
let imgbuttonMenu;
let imgwell;
let imgarrow;
let imglv1;
let imglv2;
let imglv3;
//Timer
let timerOn = 0;
let timer = 0;
let currentTime = 0;
let savedTime = 0;
let state = "title";
let level = "no selection";
//Selectors
let MainMenuArrow = 0;
let LevelSelectArrow = 0;
let ShopArrow = 1;
//gamestate
let gamelevel = 0;

//Upgrade Tracker
WatercanType = "normal";
SeedType = "normal";
CapacityType = "normal";
BasketType = "normal";
Cat = "locked";

async function setup()
{
    createCanvas(800, 600);
    
    imgwatercan = await loadImage("assets/WateringCan.png");
    imgbasket = await loadImage("assets/Basket.png");
    imgtomato = await loadImage("assets/TempTomato.png");
    imgnote = await loadImage("assets/Note.png");
    imgtimer = await loadImage("assets/Timer.png");
    imgbuttonGame = await loadImage("assets/ButtonGame.png");
    imgbuttonShop = await loadImage("assets/ButtonShop.png");
    imgbuttonManual = await loadImage("assets/ButtonManual.png");
    imgbuttonReset = await loadImage("assets/ButtonReset.png");
    imgbuttonMenu = await loadImage("assets/ButtonMenu.png");
    imgwell = await loadImage("assets/Well.png");
    imgarrow = await loadImage("assets/Arrow.png");
    imglv1 = await loadImage("assets/Level1.png");
    imglv2 = await loadImage("assets/Level2.png");
    imglv3 = await loadImage("assets/Level3.png");

    imageMode(CENTER);
    textAlign(CENTER);

    column1 = width * 0.30;
    column2 = width * 0.70;
    row1 = height * 0.20;
    row2 = height * 0.55;

}

function draw()
{
    if (state == "title")
    {
        title();
    }
    else if (state == "mainMenu")
    {
        mainMenu();
    }
    else if (state == "levelSelect")
    {
        levelSelect();
    }
    else if (state == "game")
    {
        game();
    }
    else if (state == "gameOver")
    {
        gameOver();
    }
    else if (state == "shop")
    {
        shop();
    }
    else if (state == "manual")
    {
        manual();
    }
}

function keyPressed()
{
    if (state == "game")
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

    if (state == "mainMenu")
    {
        if(key === 'a' || key === 'A' || key === "ArrowLeft")
        {
            MainMenuArrow --;
        }
        else if(key === 'd' || key === 'D' || key === "ArrowRight")
        {
            MainMenuArrow ++;
        }
        else if(key === "Enter" || key === "z" || key === "Z")
        {
            if(MainMenuArrow == 1)
            {
                state = "levelSelect"
            }
            else if(MainMenuArrow == 2)
            {
                
            }
            else if(MainMenuArrow == 3)
            {
                
            }
            else if(MainMenuArrow == 4)
            {
                
            }

        }
        

    }
        if (state == "levelSelect")
    {
        if(key === 'a' || key === 'A' || key === "ArrowLeft")
        {
            LevelSelectArrow --;
        }
        else if(key === 'd' || key === 'D' || key === "ArrowRight")
        {
            LevelSelectArrow ++;
        }
        else if(key === "Enter" || key === "z" || key === "Z")
        {
            if(LevelSelectArrow == 1)
            {
                state = "game"
                gamelevel = 1;
            }
            else if(LevelSelectArrow == 2)
            {
                
            }
            else if(LevelSelectArrow == 3)
            {
                
            }
        }
    }
}

function mousePressed()
{
    if (state == "game")
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

}

function title()
{
    treedraw();
    noStroke();
    fill(0);
    text("click mouse or press any button to start", width/2, height/2);

    if(mouseIsPressed)
    {state = "mainMenu"}
    else if(keyIsPressed)
    {state = "mainMenu"}
}

function mainMenu()
{
   
    treedraw();

    fill(244, 230, 187);
    strokeWeight(3);
    stroke(200, 186, 143);
    rectMode(CENTER);
    rect(width / 2 , height * 0.88, width, height * 0.25);

    fill(0)
    text("main menu, work in progress, (only start game is functional as of now)", width/2, height/2);
    text("current UI elements are placeholders" , width/2, height * 0.52);

    //Menu Buttons
    image(imgbuttonGame, width * 0.20, height * 0.90, imgbuttonGame.width*1.15, imgbuttonGame.height*1.15);
    image(imgbuttonShop, width * 0.40, height * 0.90, imgbuttonShop.width*1.15, imgbuttonShop.height*1.15);
    image(imgbuttonManual, width * 0.60, height * 0.90, imgbuttonManual.width*1.15, imgbuttonManual.height*1.15);
    image(imgbuttonReset, width * 0.80, height * 0.90,  imgbuttonReset.width*1.15, imgbuttonReset.height*1.15);

    //Button Selector
    if(MainMenuArrow > 4)
    {
        MainMenuArrow = 0;
    }
    else if (MainMenuArrow < 0)
    {
        MainMenuArrow = 4;
    }
    if(MainMenuArrow == 1)
    {
        image(imgarrow, width * 0.20, height * 0.80, imgarrow.width *0.75,  imgarrow.height *0.75);
    }
    else if(MainMenuArrow == 2)
    {
        image(imgarrow, width * 0.40, height * 0.80, imgarrow.width *0.75,  imgarrow.height *0.75);
    }
    else if(MainMenuArrow == 3)
    {
        image(imgarrow, width * 0.60, height * 0.80, imgarrow.width *0.75,  imgarrow.height *0.75);
    }
    else if(MainMenuArrow == 4)
    {
        image(imgarrow, width * 0.80, height * 0.80, imgarrow.width *0.75,  imgarrow.height *0.75);
    }
    else if(MainMenuArrow == 0)
    {
        noStroke();
        text("Move with WASD or Arrow Keys, Select with Enter or Z", width /2 ,height * 0.98);
    }

}

function levelSelect()
{
    background(155);
    fill(0)
    text("level select, work in progress, (only level 1 is functional as of now)", width/2, height * 0.2);
    text("level themes may change in final version, images are placeholders", width/2, height * 0.3);

    if(LevelSelectArrow > 3)
    {
        LevelSelectArrow = 0;
    }
    else if (LevelSelectArrow < 0)
    {
        LevelSelectArrow = 3;
    }
    if(LevelSelectArrow == 1)
    {
        image(imgarrow, width * 0.23, height * 0.28);
    }
    else if(LevelSelectArrow == 2)
    {
        image(imgarrow, width * 0.50, height * 0.28);
    }
    else if(LevelSelectArrow == 3)
    {
        image(imgarrow, width * 0.77, height * 0.28);
    }
    else if(LevelSelectArrow == 0)
    {
        noStroke();
        text("Move with WASD or Arrow Keys, Select with Enter or Z", width /2 ,height * 0.75);
    }

    image(imglv1, width * 0.23, height /2);
    image(imglv2, width * 0.50, height /2);
    image(imglv3, width * 0.77, height /2);

    if(mouseIsPressed)
    {state = "game"}
}

function game()
{
        //Backround
    background(203, 255, 190);

    //Game rule
        if(p1stage > 100)
    {
        p1stage = 100
    }
        if(p2stage > 100)
    {
        p2stage = 100
    }
        if(p3stage > 100)
    {
        p3stage = 100
    }
        if(p4stage > 100)
    {
        p4stage = 100
    }

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
    strokeWeight(3);
    stroke(188,169,143);
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
    s1x1 = column1 - psize/2 - 5;
    s1y1 = row1 - psize/2 - 5;
    s1x2 = column1 + psize/2 + 5;
    s1y2 = row1 - psize/2 - 5;
    s1x3 = column1 + psize/2 + 5;
    s1y3 = row1  + psize/2 + 5;
    s1x4 = column1 - psize/2 - 5;
    s1y4 = row1 + psize/2 +5;
    if(mouseX >= s1x1 && mouseX <= s1x3 && mouseY >= s1y1 && mouseY <= s1y3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(s1x1, s1y1, s1x2, s1y2, s1x3, s1y3, s1x4, s1y4);
    }
    //plot 2 selector
    s2x1 = column2 - psize/2 - 5;
    s2y1 = row1 - psize/2 - 5;
    s2x2 = column2 + psize/2 + 5;
    s2y2 = row1 - psize/2 - 5;
    s2x3 = column2 + psize/2 + 5;
    s2y3 = row1  + psize/2 + 5;
    s2x4 = column2 - psize/2 - 5;
    s2y4 = row1 + psize/2 +5;
    if(mouseX >= s2x1 && mouseX <= s2x3 && mouseY >= s2y1 && mouseY <= s2y3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(s2x1, s2y1, s2x2, s2y2, s2x3, s2y3, s2x4, s1y4);
    }
    //plot 3 selector
    s3x1 = column1 - psize/2 - 5;
    s3y1 = row2 - psize/2 - 5;
    s3x2 = column1 + psize/2 + 5;
    s3y2 = row2 - psize/2 - 5;
    s3x3 = column1 + psize/2 + 5;
    s3y3 = row2  + psize/2 + 5;
    s3x4 = column1 - psize/2 - 5;
    s3y4 = row2 + psize/2 +5;
    if(mouseX >= s3x1 && mouseX <= s3x3 && mouseY >= s3y1 && mouseY <= s3y3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(s3x1, s3y1, s3x2, s3y2, s3x3, s3y3, s3x4, s3y4);
    }
    //plot 4 selector
    s4x1 = column2 - psize/2 - 5;
    s4y1 = row2 - psize/2 - 5;
    s4x2 = column2 + psize/2 + 5;
    s4y2 = row2 - psize/2 - 5;
    s4x3 = column2 + psize/2 + 5;
    s4y3 = row2  + psize/2 + 5;
    s4x4 = column2 - psize/2 - 5;
    s4y4 = row2 + psize/2 +5;
    if(mouseX >= s4x1 && mouseX <= s4x3 && mouseY >= s4y1 && mouseY <= s4y3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(s4x1, s4y1, s4x2, s4y2, s4x3, s4y3, s4x4, s4y4);
    }

    //plants
    plant(column1, row1, p1stage, t1r, t1g, t1b, tsize1);
    plant(column2, row1, p2stage, t2r, t2g, t2b, tsize2);
    plant(column1, row2, p3stage, t3r, t3g, t3b, tsize3);
    plant(column2, row2, p4stage, t4r, t4g, t4b, tsize4);

    timerFun(30);

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

function gameOver()
{

}

function shop()
{

}

function manual()
{

}

function treedraw()
{
    background(194, 237, 242);
    //This is the ground
        strokeWeight(0);
        fill(203, 255, 190);
        ellipse(400, 600, 1500, 350);

    //This is the tree's shadow
        fill(0, 0, 0, 100);
        quad(475, 500, 600, 500, 675, 600, 505, 600);

    //This is the tree's trunk
        fill(186, 166, 149);
        quad(475, 500, 600, 500, 550, 350, 500, 350);
        quad(550, 350, 500, 350, 485, 265, 575, 265);

    //These are the branches of the tree
        triangle(485, 265, 425, 150, 525, 265);
        triangle(525, 265, 655, 150, 575, 265);

    //These are the leaves of the tree
        strokeWeight(3);
        stroke(242, 127, 104, 215);
        fill(242, 127, 104, 225);
        ellipse(525, 200, 175, 130);
        ellipse(425, 150, 195, 170);
        ellipse(655, 150, 195, 170);
        ellipse(525, 100, 225, 190);
}

function timerFun(tgoal)
{
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
        if(timerscore >= tgoal)
        {
        fill(189, 186, 244);
        textSize(30);
        text("YOU WIN!!!", width * 0.5, height * 0.25);
        }
    }
}

function plant(column, row, stageID, rID, gID, bID, sizeID)
{
    //plant1
    strokeWeight(3);
    stroke(74, 166, 73);
    line(column, row - 50, column, row + 50);

    line(column, row - 20, column - 10, row - 10);
    line(column, row + 20, column + 10, row + 30);

    //p1 tomato
    noStroke();

    if (stageID == 0)
    {
        rID = 150;
        gID = 230;
        bID = 150;
        sizeID = 0; 
    }
    if (stageID  >= 25 && stageID <= 50) 
    {
        rID = 150;
        gID = 230;
        bID = 150;
        sizeID = 6;
    }
    if (stageID >= 50 && stageID <= 75)
    {
        rID = 180;
        gID = 200;
        bID = 120;
        sizeID = 9;
    }
    if (stageID >= 75 && stageID <= 100)
    {
        rID = 200;
        gID = 160;
        bID = 100;
        sizeID = 12;
    }
    if (stageID == 100)
    {
        rID = 255;
        gID = 100;
        bID = 50;
        sizeID = 15;
    }
    fill(rID, gID, bID);
    ellipse(column - 10, row - 10, sizeID, sizeID);
    ellipse(column + 10, row + 30, sizeID, sizeID);
}