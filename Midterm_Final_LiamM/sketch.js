/*
Liam M.
"Tomato Farmer ~of the Twilight Fields"
This is the fully realized verson of my past 2 short sutdy assignments. Now it's a fully functioning game with multiple levels, upgrades, and many different states. 

**Instructions**
Intsructions are in the in-game manual, all files for manual are also in the assets folder.
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
//well location
let wx1 = 0;
let wx2 = 0;
let wx3 = 0;
let wx4 = 0;
let wy1 = 0;
let wy2 = 0;
let wy3 = 0;
let wy4 = 0;
//menu on/off
let watercan = 0;
let basket = 0;
//gamestats
let tscore= 0;
let timerscore= 0;
let money = 0;
//images
let imgtitle;
let imggameover;
let imglevelselect;
let imgwatercan;
let imgwatercan2;
let imgwatercan3;
let imgwatercane;
let imgwatercan2e;
let imgwatercan3e;
let imgwatercan0;
let imgbasket;
let imgbasket2;
let imgbasket3;
let imgnobasket;
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
let imglv1c;
let imglv2c;
let imglv3c;
let imgshop;
let imgshopkeep;
let imgsoldout;
let imgcoin;
let imgseeds;
let imgseeds2;
let imgfertilizer;
let imgfertilizer2;
let imgcat;
let imgbar1;
let imgbar2;
let imgbar3;
let imgbar4;
let imgbar5;
let imgbar6;
let imgmanual1;
let imgmanual2;
let imgmanual3;
let imgmanual4;
let imgmanual5;
let imgconfetti;
let imgcongrats;
//Timer
let timerOn = 0;
let timer = 0;
let currentTime = 0;
let savedTime = 0;
let savedTimeB = 0;
//states
let state = "title";
let gamelevel = 0;
//level changes
let br = 0;
let bg = 0;
let bb = 0;
let lv1status = "incomplete"
let lv2status = "incomplete"
let lv3status = "incomplete"
//Selectors
let MainMenuArrow = 0;
let LevelSelectArrow = 0;
let ShopArrow = 0;
//shop
let shoptext = "This is a test text."
let shop1;
let shop2;
let shop3;
let shop4;
let shop5;
//watercanbar
let bar;
let waterlevel = 0;
//Upgrade Tracker
let WatercanType = "normal";
let SeedType = "normal";
let FertilizerType = "normal";
let BasketType = "normal";
let cat = "locked";
//upgradedata
let watercanimg;
let unfullwatercanimg;
let basketimg;
let bwait = 1000;
let maxwaterlevel = 15;
let growr1 = 1;
let growr2 = 20;
let tnum = 0;
let tnum1 = 1;
let tnum2 =3;
//manual
let manualimg;
let manualpg = 1;

async function setup()
{
    createCanvas(800, 600);
    
    imgtitle = await loadImage("assets/Title.png");
    imggameover = await loadImage("assets/GameOver.png");
    imglevelselect = await loadImage("assets/LSelect.png");
    imgwatercan = await loadImage("assets/WateringCan.png");
    imgwatercan2 = await loadImage("assets/WateringCan2.png");
    imgwatercan3 = await loadImage("assets/WateringCan3.png");
    imgwatercane = await loadImage("assets/WateringCanE.png");
    imgwatercan2e = await loadImage("assets/WateringCan2E.png");
    imgwatercan3e = await loadImage("assets/WateringCan3E.png");
    imgwatercan0 = await loadImage("assets/WateringCan0.png");
    imgbar1 = await loadImage("assets/Bar1.png");
    imgbar2 = await loadImage("assets/Bar2.png");
    imgbar3 = await loadImage("assets/Bar3.png");
    imgbar4 = await loadImage("assets/Bar4.png");
    imgbar5 = await loadImage("assets/Bar5.png");
    imgbar6 = await loadImage("assets/Bar6.png");
    imgbasket = await loadImage("assets/Basket.png");
    imgbasket2 = await loadImage("assets/Basket2.png");
    imgbasket3 = await loadImage("assets/Basket3.png");
    imgnobasket = await loadImage("assets/Basket0.png");
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
    imglv1c = await loadImage("assets/Level1C.png");
    imglv2c = await loadImage("assets/Level2C.png");
    imglv3c = await loadImage("assets/Level3C.png");
    imgshop = await loadImage("assets/Shop.png");
    imgshopkeep = await loadImage("assets/Shopkeep.png");
    imgsoldout = await loadImage("assets/SoldOut.png");
    imgcoin = await loadImage("assets/Coin.png")
    imgseeds = await loadImage("assets/Seeds.png");
    imgseeds2 = await loadImage("assets/Seeds2.png");
    imgfertilizer = await loadImage("assets/Fertilizer.png");
    imgfertilizer2 = await loadImage("assets/Fertilizer2.png");
    imgcat = await loadImage("assets/Cat.png");
    imgmanual1 = await loadImage("assets/Manual1.png");
    imgmanual2 = await loadImage("assets/Manual2.png");
    imgmanual3 = await loadImage("assets/Manual3.png");
    imgmanual4 = await loadImage("assets/Manual4.png");
    imgmanual5 = await loadImage("assets/Manual5.png");
    imgconfetti = await loadImage("assets/Confetti.png");
    imgcongrats = await loadImage("assets/Congrats.png");

    imageMode(CENTER);
    textAlign(CENTER);

    column1 = width * 0.30;
    column2 = width * 0.70;
    row1 = height * 0.20;
    row2 = height * 0.55;

}

function draw()
{
    upgrades();
    levels();

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
    else if (state == "reset")
    {
        reset();
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
            if(basket == 0)
            {
                watercan = 0;
                basket = 0.5;
                savedTimeB = currentTime;
            }

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

        if(key === "Escape" || key === "x" || key === "X")
        {
            retuenToMenu()
        }
    }


    if (state == "gameOver")
        {
            if(key === "Enter" || key === "z" || key === "Z")
            {retuenToMenu();}
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
                MainMenuArrow = 0
            }
            else if(MainMenuArrow == 2)
            {
                state = "shop";
                if(lv3status == "complete")
                {shoptext = "Hey farmer, I heard you mastered your most difficult field! That’s incredible! With your skills you might not even need any new tools! But still,xhave a look around."}
                else if(lv2status == "complete")
                {shoptext = "Hey there farmer. How’s your farm been? Do you need anything for it? We have plenty of stuff in stock that might help."}
                else if(lv1status == "complete")
                {shoptext = "Welcome back new farmer. Looking for anything in particular? Well if you are then ask me, we might have it in stock."}
                else
                {shoptext = "Hello new farmer, welcome to the Garden Store you can buy better tools, seeds and fertilizers here. Have a look around."}
                MainMenuArrow = 0                
            }
            else if(MainMenuArrow == 3)
            {
                state = "manual";
                MainMenuArrow = 0 
            }
            else if(MainMenuArrow == 4)
            {
                state = "reset"
                MainMenuArrow = 0  
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
                waterlevel = maxwaterlevel;
                gamelevel = 1;
                LevelSelectArrow = 0;
            }
            else if(LevelSelectArrow == 2)
            {
                if(lv1status == "complete")
                {
                state = "game"
                waterlevel = maxwaterlevel;
                gamelevel = 2;
                LevelSelectArrow = 0;
                }
                
            }
            else if(LevelSelectArrow == 3)
            {
                if(lv2status == "complete")
                {
                state = "game"
                waterlevel = maxwaterlevel;
                gamelevel = 3;
                LevelSelectArrow = 0;
                }
            }
        }
    }

        if (state == "shop")
    {
        if(key === 'a' || key === 'A' || key === "ArrowLeft")
        {
            ShopArrow --;
        }
        else if(key === 'd' || key === 'D' || key === "ArrowRight")
        {
            ShopArrow ++;
        }
        else if(key === "Enter" || key === "z" || key === "Z")
        {
            if(ShopArrow == 1)
            {
                ShopArrow = 0
                if (WatercanType == "normal")
                {
                if(money >= 50)
                    {
                    WatercanType = "upgrade1"
                    money -= 50;
                    shoptext = "Thank you! Enjoy your Large Watering Can!"
                    
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for this..."
                    }
                }
                else if((WatercanType == "upgrade1"))
                {
                if(money >= 200)
                    {
                    WatercanType = "upgrade2"
                    money -= 200;
                    shoptext = "Thank you! Enjoy your Huge Watering Can!"
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for this..."
                    }  
                }
            }
            else if(ShopArrow == 2)
            {
                ShopArrow = 0
                if (BasketType == "normal")
                {
                if(money >= 50)
                    {
                    BasketType = "upgrade1"
                    money -= 50;
                    shoptext = "Thank you! Enjoy your Lightweight Basket!"
                    
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for this..."
                    }
                }
                else if((BasketType == "upgrade1"))
                {
                if(money >= 200)
                    {
                    BasketType = "upgrade2"
                    money -= 200;
                    shoptext = "Thank you! Enjoy your Feather Basket!"
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for this..."
                    }  
                }
            }
            else if(ShopArrow == 3)
            {
                ShopArrow = 0
                if (FertilizerType == "normal")
                {
                if(money >= 100)
                    {
                    FertilizerType = "upgrade1"
                    money -= 100;
                    shoptext = "Thank you! Enjoy your General Fertilizer!"
                    
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for this..."
                    }
                }
                else if((FertilizerType == "upgrade1"))
                {
                if(money >= 300)
                    {
                    FertilizerType = "upgrade2"
                    money -= 300;
                    shoptext = "Thank you! Enjoy your Specialized Fertilizer!"
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for this..."
                    }  
                }
                
            }
            else if(ShopArrow == 4)
            {
                ShopArrow = 0
                if (SeedType == "normal")
                {
                if(money >= 200)
                    {
                    SeedType = "upgrade1"
                    money -= 200;
                    shoptext = "Thank you! Enjoy your Quality Seeds!"
                    
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for this..."
                    }
                }
                else if((SeedType == "upgrade1"))
                {
                if(money >= 500)
                    {
                    SeedType = "upgrade2"
                    money -= 500;
                    shoptext = "Thank you! Enjoy your Premium Seeds!"
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for this..."
                    }  
                }
                
            }
            else if(ShopArrow == 5)
            {
            ShopArrow = 0
             if (cat == "locked")
                {
                if(money >= 1000)
                    {
                    cat = "unlocked"
                    money -= 1000;
                    shoptext = "Thank you! Take good care of her!"
                    
                    }
                else
                    {
                    shoptext = "Sorry... You don't have enough money for her..."
                    }
                }   
            }
        }
        else if(key === "Escape" || key === "x" || key === "X")
        {
            state = "mainMenu";
            ShopArrow = 0;
        }
    }

    if(state == "manual")
        if(key === 'a' || key === 'A' || key === "ArrowLeft")
        {
            manualpg --;
        }
        else if(key === 'd' || key === 'D' || key === "ArrowRight")
        {
            manualpg ++;
        }
        else if(key === "Escape" || key === "x" || key === "X")
        {
            state = "mainMenu";
            manualpg = 1;
        }

    if(state == "reset")
        if(key === "Backspace")
            {
                state = "mainMenu"
                watercan = 0;
                basket = 0;
                money = 0;
                tscore = 0;
                timerscore = 0;
                lv1status = "incomplete";
                lv2status = "incomplete";
                lv3status = "incomplete";
                MainMenuArrow = 0;
                waterlevel = 0;
                WatercanType = "normal";
                BasketType = "normal";
                SeedType = "normal";
                FertilizerType = "normal";
                cat = "locked";
            }
        else if(key === "Escape" || key === "x" || key === "X")
            {
                state = "mainMenu";
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
                    p1stage += random(growr1, growr2);
                    p1stage = round(p1stage);
                    waterlevel --;                    
                }
                
            }

            if(basket == 1 && p1stage == 100)
            {
                tnum = random(tnum1,tnum2)
                tnum = round(tnum)
                tscore += tnum;
                if(timerOn == 1)
                {
                    timerscore += tnum;
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
                    p2stage += random(growr1, growr2);
                    p2stage = round(p2stage);
                    waterlevel --;                    
                }
                
            }

            if(basket == 1 && p2stage == 100)
            {
                tnum = random(tnum1,tnum2)
                tnum = round(tnum)
                tscore += tnum;
                if(timerOn == 1)
                {
                    timerscore += tnum;
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
                    p3stage += random(growr1, growr2);
                    p3stage = round(p3stage);
                    waterlevel --;                    
                }
                
            }

            if(basket == 1 && p3stage == 100)
            {

                tnum = random(tnum1,tnum2)
                tnum = round(tnum)
                tscore += tnum;
                if(timerOn == 1)
                {
                    timerscore += tnum;
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
                    p4stage += random(growr1, growr2);
                    p4stage = round(p4stage)
                    waterlevel --;
                }
                
            }

            if(basket == 1 && p4stage == 100)
            {
                tnum = random(tnum1,tnum2)
                tnum = round(tnum)
                tscore += tnum;
                if(timerOn == 1)
                {
                    timerscore += tnum;
                }
                p4stage = 0;
            }
        }
    
    if(mouseX >= wx1 && mouseX <= wx3 && mouseY >= wy1 && mouseY <= wy3)
    {
        if(watercan == 1 || watercan == 0.5)
        {
            waterlevel = maxwaterlevel;
            watercan = 1;
        }
    }



}
}

function title()
{
    treedraw();
    strokeWeight(1);
    stroke(255)
    fill(90, 76, 64);
    textSize(16)
    text("Click the mouse or press any button to start.", width/2, height * 0.75);
    image(imgtitle, width/2, height * 0.40, imgtitle.width * 1.85, imgtitle.height * 1.85)

    if(mouseIsPressed)
    {state = "mainMenu"}
    else if(keyIsPressed)
    {state = "mainMenu"}
}

function mainMenu()
{
   
    treedraw();

    if(lv3status == "complete")
    {
        //textSize(28);
        //fill(255, 99, 99);
        //stroke(244, 229, 175);
           //text("Congratulations!!! You beat every level! Thank you for playing!",width/2, height/2)
        image(imgconfetti, width/2, height/2)
        image(imgcongrats, width/2, height * 0.40)
     }

    fill(244, 230, 187);
    strokeWeight(3);
    stroke(200, 186, 143);
    rectMode(CENTER);
    rect(width / 2 , height * 0.88, width, height * 0.25);

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
        fill(90, 76, 64)
        textSize(12)
        noStroke(90, 76, 64);
        text("Move with WASD or Arrow Keys, Select with Enter or Z", width /2 ,height * 0.98);
    }

}

function levelSelect()
{
    noStroke();
    fill(90, 76, 64)
    textSize(16);

    if(LevelSelectArrow == 1)
    {
        background(223, 255, 210);
    }
    else if(LevelSelectArrow == 2)
    {
        background(177, 235, 244);
    }
    else if(LevelSelectArrow == 3)
    {
        background(255, 238, 175);
    }
    else if(LevelSelectArrow == 0)
    {
        background(200);
    }
    image(imglevelselect, width/2, height * 0.175)

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
        text("Farming at Noon", width /2 ,height * 0.75);
        text("Time Challenge Goal: 30 Tomatoes, Bonus Rate: +25% of Score", width /2 ,height * 0.80);
    }
    else if(LevelSelectArrow == 2)
    {
        image(imgarrow, width * 0.50, height * 0.28);
        text("Farming at Dawn", width /2 ,height * 0.75);
        if(lv1status == "incomplete")
            { text("Locked", width /2 ,height * 0.80);}
        else if(lv1status =="complete")
            { text("Time Challenge Goal: 100 Tomatoes, Bonus Rate: +50% of Score", width /2 ,height * 0.80);}
    }
    else if(LevelSelectArrow == 3)
    {
        image(imgarrow, width * 0.77, height * 0.28);
            text("Farming at Dusk", width /2 ,height * 0.75);
        if(lv2status == "incomplete")
            { text("Locked", width /2 ,height * 0.80);}
        else if(lv2status =="complete")
            { text("Time Challenge Goal: 300 Tomatoes, Bonus Rate: +75% of Score", width /2 ,height * 0.80);}
    }
    else if(LevelSelectArrow == 0)
    {
        text("Move with WASD or Arrow Keys, Select with Enter or Z", width /2 ,height * 0.80);
    }

    if(lv1status == "incomplete")
        {image(imglv1, width * 0.23, height /2);}
    else if(lv1status == "complete")
        {image(imglv1c, width * 0.23, height /2);}

    if(lv2status == "incomplete")
        {image(imglv2, width * 0.50, height /2);}
    else if(lv2status =="complete")
        {image(imglv2c, width * 0.50, height /2);}

    if(lv3status == "incomplete")
        {image(imglv3, width * 0.77, height /2);}
    else if(lv3status == "complete")
        {image(imglv3c, width * 0.77, height /2);}

}

function game()
{
     //Backround
    background(br, bg, bb);

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
        if(waterlevel <= maxwaterlevel && waterlevel > maxwaterlevel * 0.8)
        image(watercanimg, 140, 520);
        else
    image(unfullwatercanimg, 140, 520);
        if(waterlevel <= maxwaterlevel && waterlevel > maxwaterlevel * 0.8)
        {bar = imgbar1}
        else if(waterlevel <= maxwaterlevel * 0.8 && waterlevel > maxwaterlevel * 0.6)
        {bar = imgbar2}
        else if(waterlevel <= maxwaterlevel * 0.6 && waterlevel > maxwaterlevel * 0.4)
        {bar = imgbar3}
        else if(waterlevel <= maxwaterlevel * 0.4 && waterlevel > maxwaterlevel * 0.2)
        {bar = imgbar4}
        else if(waterlevel <= maxwaterlevel * 0.2 && waterlevel > 0)
        {bar = imgbar5}
        else if(waterlevel == 0)
        {bar = imgbar6}
    image(bar, 140, 520);
    image(basketimg, 330, 520);   
    image(imgtomato, 500, 525, imgtomato.width * 0.8, imgtomato.height * 0.8);
    textSize(40);
    fill(90, 76, 64);
    noStroke();
    text("Harvested: " + tscore, 650, 560);
    text("Score: " + timerscore, 650, 525);

    fill(90, 76, 64);
    textSize(12);
    if(watercan == 1 || watercan == 0.5)
    {
        text('Equipped', 140, 570);
    }
    else
    {
        text('Eqiup Watering Can With "E"', 140, 570);
    }
    if(basket == 1 || basket == 0.5)
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
    fill(90, 76, 64);
    stroke(213, 255, 240);
    strokeWeight(2);
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

    image(imgwell, width * 0.1, height * 0.60);

    if(cat == "unlocked")
    image(imgcat, width * 0.9, height * 0.65, imgcat.width /2, imgcat.height /2);

    if(SeedType == "upgrade1")
        {image(imgseeds, width * 0.1112, height * 0.68, imgseeds.width/4, imgseeds.height/4);}
    else if(SeedType == "upgrade2")
        {image(imgseeds2, width * 0.1112, height * 0.68, imgseeds2.width/4, imgseeds2.height/4);}

    if(FertilizerType == "upgrade1")
        {image(imgfertilizer, width * 0.145, height * 0.66, imgfertilizer.width/2, imgfertilizer.height/2);}
    else if(SeedType == "upgrade2")
        {image(imgfertilizer2, width * 0.145, height * 0.66, imgfertilizer2.width/2, imgfertilizer2.height/2);}


    //well selector
    wx1 =  width * 0.1 - 50 - 5;
    wy1 = height * 0.60 - 50 - 5;
    wx2 = width * 0.1 + 50 + 5;
    wy2 = height * 0.60 - 50 - 5;
    wx3 = width * 0.1 + 50 + 5;
    wy3 = height * 0.60  + 50 + 5;
    wx4 = width * 0.1 - 50 - 5;
    wy4 = height * 0.60 + 50 +5;
    if(mouseX >= wx1 && mouseX <= wx3 && mouseY >= wy1 && mouseY <= wy3)
    {
    noFill(0);
    strokeWeight(1.5);
    stroke(73, 234, 178);
    quad(wx1, wy1, wx2, wy2, wx3, wy3, wx4, wy4);
    }



    //plants
    plant(column1, row1, p1stage, t1r, t1g, t1b, tsize1);
    plant(column2, row1, p2stage, t2r, t2g, t2b, tsize2);
    plant(column1, row2, p3stage, t3r, t3g, t3b, tsize3);
    plant(column2, row2, p4stage, t4r, t4g, t4b, tsize4);

    if(gamelevel == 1)
    {
    timerFun(30);
    }
    else if(gamelevel == 2)
    {
    timerFun(100);
    }
    else if(gamelevel == 3)
    {
    timerFun(300);
    }
    
    //tool mechanics
    //basket timer
    if(basket == 0.5)
    {

        if (currentTime - savedTimeB > bwait)
        {
            basket = 1;
        }

    }

    if (waterlevel == 0)
        {
            if (watercan == 1)
            {watercan = 0.5}

        }

    //Image cursor based on tool
    if(watercan == 1)
    {
        image(watercanimg, mouseX, mouseY, watercanimg.width * 0.5, watercanimg.height * 0.5);
        
    }
    else if (watercan == 0.5)
    {
        image(imgwatercan0, mouseX, mouseY, imgwatercan.width  * 0.25, imgwatercan.height * 0.25);
    }
    if(basket == 1)
    {
        image(basketimg, mouseX, mouseY, basketimg.width * 0.5, basketimg.height * 0.5);

    }
    else if (basket == 0.5)
    {
        image(imgnobasket, mouseX, mouseY, imgnobasket.width * 0.25, imgnobasket.height * 0.25);
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
    background(27, 33, 27);
    p1stage = 0;
    p2stage = 0;
    p3stage = 0;
    p4stage = 0;
    textSize(54);
    strokeWeight(1)
    stroke(255)
    fill(225,0,0);
    image(imggameover,  width/2, height * 0.25, imggameover.width * 1.5, imggameover.height * 1.5);
    //text("Game Over", width/2, height * 0.30);
    textSize(30);
    fill(255);
    stroke(0);
    strokeWeight(2);
    text("You lost some of your harvest!", width/2, height * 0.44);
    text("Harvest is now " + tscore + " tomatoes.", width/2, height * 0.50);
    textSize(18);
    text("Click Enter or Z to return to menu.", width/2, height * 0.67);

}

function shop()
{
    image(imgshop, width/2, height/2);
    image(imgshopkeep, width/2, height/2);
    
    fill(244, 230, 187);
    strokeWeight(3);
    stroke(200, 186, 143);
    rectMode(CENTER);
    rect(width *0.1, height * 0.08, 150, 75);
    image(imgcoin, width *0.035, height * 0.08, imgcoin.width * 0.5, imgcoin.height * 0.5);
    shoptextsettings()
    textSize(19)
    text(money, width * 0.1, height * 0.09);

    if(WatercanType == "upgrade2" && BasketType == "upgrade2" && FertilizerType == "upgrade2" && SeedType == "upgrade2" && cat == "unlocked")
    {
    fill(244, 230, 187);
    strokeWeight(3);
    stroke(200, 186, 143);
    rectMode(CENTER);
    rect(665, height * 0.88, 270, height * 0.25);
    shoptextsettings();
    text(shoptext, width * 0.832 , height * 0.88, 230, 140);
    shoptext = "Congratulations, you bought everything I had for sell! Thank you for supporting my shop!"
    noStroke();
    textSize(11)
    text("(Go back to Main Menu with Esc or X)", width * 0.832 , height * 0.98);
    shoptextsettings();
    }
    else
    {
    fill(244, 230, 187);
    strokeWeight(3);
    stroke(200, 186, 143);
    rectMode(CENTER);
    rect(265, height * 0.88, 530, height * 0.25);
    rect(665 , height * 0.88, 270, height * 0.25);
    shoptextsettings();
    text(shoptext, width * 0.832 , height * 0.88, 230, 140);
    //main image switching code
    //watercan upgrades
    if (WatercanType == "normal")
    {
        shop1 = imgwatercan2
    }
    else if (WatercanType == "upgrade1")
    {
        shop1 = imgwatercan3
    }
    else if (WatercanType == "upgrade2")
    {
        shop1 = imgsoldout
    }
    //basket upgrades
    if (BasketType == "normal")
    {
        shop2 = imgbasket2
    }
    else if (BasketType == "upgrade1")
    {
        shop2 = imgbasket3
    }
    else if (BasketType == "upgrade2")
    {
        shop2 = imgsoldout
    }
    //fertilizer upgrades
    if (FertilizerType == "normal")
    {
        shop3 = imgfertilizer
    }
    else if (FertilizerType == "upgrade1")
    {
        shop3 = imgfertilizer2
    }
    else if (FertilizerType == "upgrade2")
    {
        shop3 = imgsoldout
    }
    //seed upgrades
    if (SeedType == "normal")
    {
        shop4 = imgseeds
    }
    else if (SeedType == "upgrade1")
    {
        shop4 = imgseeds2
    }
    else if (SeedType == "upgrade2")
    {
        shop4 = imgsoldout
    }
    //cat
    if(cat == "locked")
    {
        shop5 = imgcat
    }
    else if (cat == "unlocked")
    {
        shop5 = imgsoldout
    }

    //images
    image(shop1, width * 0.07, height * 0.88)
    image(shop2, width * 0.20, height * 0.88,)
    image(shop3, width * 0.33, height * 0.88)
    if(SeedType == "upgrade2")
    {image(shop4, width * 0.46, height * 0.88,)}
    else
    {image(shop4, width * 0.46, height * 0.88, shop4.width * 0.70, shop4.height * 0.70)}
    if(cat == "locked")
    {image(shop5, width * 0.59, height * 0.88, shop5.width * 0.60, shop5.height * 0.60)}
    else if(cat == "unlocked")
    {image(shop5, width * 0.59, height * 0.88)}


    //arrow code
    if(ShopArrow > 5)
    {
        ShopArrow = 0;
    }
    else if (ShopArrow < 0)
    {
        ShopArrow = 5;
    }
    if(ShopArrow == 1)
    {
        image(imgarrow, width * 0.07, height * 0.79, imgarrow.width *0.5,  imgarrow.height *0.5);

        if (WatercanType == "normal")
        {
            shoptext = "This is a Large Watering Can. It can hold more water than the one you have now, so it can be used 20 times before being refilled."
            noStroke();
            textSize(12)
            text("Large Watering Can (Price: 50 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (WatercanType == "upgrade1")
        {
            shoptext = "The Huge Watering Can can hold even more water that the last one! It can be used 25 times before being refilled!"
            noStroke();
            textSize(12)
            text("Huge Watering Can (Price: 200 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (WatercanType == "upgrade2")
        {
            shoptext = "Sorry we don't have any watering cans better that the one you have now..."
        }
    }
    else if(ShopArrow == 2)
    {
        image(imgarrow, width * 0.20, height * 0.79, imgarrow.width *0.5,  imgarrow.height *0.5);

        if (BasketType == "normal")
        {
            shoptext = "This basket is made of much lighter material so it takes less time to pick up and use."
            noStroke();
            textSize(12)
            text("Lightweight Basket (Price: 50 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (BasketType == "upgrade1")
        {
            shoptext = "This basket is light as a feather! You could pick this up and use it in half a second."
            noStroke();
            textSize(12)
            text("Feather Basket (Price: 200 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (BasketType == "upgrade2")
        {
            shoptext = "I don't think they even make baskets lighter than the one you have."
        }
    }
    else if(ShopArrow == 3)
    {
        image(imgarrow, width * 0.33, height * 0.79, imgarrow.width *0.5,  imgarrow.height *0.5);

        if (FertilizerType == "normal")
        {
            shoptext = "This fertilizer is good for all types of plants. It'll make your plants grow more when you water them."
            noStroke();
            textSize(12)
            text("General Fertilizer (Price: 100 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (FertilizerType == "upgrade1")
        {
            shoptext = "This is a fertilizer mixed specifically for tomatoes. You'll be amazed at how much more your plants will grow when they're watered."
            noStroke();
            textSize(12)
            text("Specialized Fertilizer (Price: 300 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (FertilizerType == "upgrade2")
        {
            shoptext = "There's no fertilizer better for tomatoes than the one you have."
        }
    }
    else if(ShopArrow == 4)
    {
        image(imgarrow, width * 0.46, height * 0.79, imgarrow.width *0.5,  imgarrow.height *0.5);

        if (SeedType == "normal")
        {
            shoptext = "These tomato seeds are really high quailty! They'll grow plants that can produce double the produce of normal plants."
            noStroke();
            textSize(12)
            text("Quality Seeds (Price: 200 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (SeedType == "upgrade1")
        {
            shoptext = "These are the best tomato seeds on the market! You'll have more tomatos than you can imagine since they make plants with double the production of Quality Seeds!"
            noStroke();
            textSize(12)
            text("Premium Seeds (Price: 500 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (SeedType == "upgrade2")
        {
            shoptext = "You already have the best seeds on the market so I don't have any better seeds in stock."
        }
    }
    else if(ShopArrow == 5)
    {
        image(imgarrow, width * 0.59, height * 0.79, imgarrow.width *0.5,  imgarrow.height *0.5);

        if (cat == "locked")
        {
            shoptext = "She might not do anything for your farm but isn't this kitty cute? If you buy her she'll lay on your farm."
            noStroke();
            textSize(12)
            text("Cat (Price: 1000 Coins)", width * 0.33 ,height * 0.98);
        }
        else if (cat == "unlocked")
        {
            shoptext = "Hey! How's your cat been doing? I bet she really likes it on your farm!"
        }
    }
    else if(ShopArrow == 0)
    {
        noStroke();
        textSize(12)
        text("Move with WASD or Arrow Keys, Select with Enter or Z, Go back to Main Menu with Esc or X", width * 0.33 ,height * 0.98);
    }
    }

}

function manual()
{
        background(244, 230, 187)
        fill(90, 76, 64)
        textSize(12)
        noStroke(90, 76, 64);
        text("Change page with WASD or Arrow Keys, Go back to Main Menu with Esc or X", width /2 ,height * 0.98);

        if(manualpg == 1)
        {manualimg = imgmanual1}
        else if(manualpg == 2)
        {manualimg = imgmanual2}
        else if(manualpg == 3)
        {manualimg = imgmanual3}
        else if(manualpg == 4)
        {manualimg = imgmanual4}
        else if(manualpg == 5)
        {manualimg = imgmanual5}
        if(manualpg > 5)
        {manualpg = 5;}
        else if(manualpg < 1)
        {manualpg = 1;}

        image(manualimg, width/2, height/2);

}

function reset()
{
    background(100);
    textSize(30);
    noStroke(0);
    fill(0);
    text("Press Backspace to reset", width/2, height * 0.45);
    textSize(20)
    fill(255, 0, 0);
    strokeWeight(1);
    stroke(255);
    text("Warning!!! You will lose all upgrades, money, and level completion data.", width/2, height * 0.65);
    text("If you do not want this press Esc or X to return to Main Menu.", width/2, height * 0.68);

}


function upgrades()
{
    //watercan upgrades
    if(WatercanType == "normal")
    {
        maxwaterlevel = 15;
        watercanimg = imgwatercan;
        unfullwatercanimg = imgwatercane;
    }
    else if(WatercanType == "upgrade1")
    {
        maxwaterlevel = 20;
        watercanimg = imgwatercan2;
        unfullwatercanimg = imgwatercan2e;

    }
    else if(WatercanType == "upgrade2")
    {
        maxwaterlevel = 25;
        watercanimg = imgwatercan3;
        unfullwatercanimg = imgwatercan3e;

    }
    //Basket upgrades
    if (BasketType == "normal")
    {
        bwait = 1000;
        basketimg = imgbasket;
    }
    else if (BasketType == "upgrade1")
    {
        bwait = 750;
        basketimg = imgbasket2;
    }
    else if (BasketType == "upgrade2")
    {
        bwait = 500;
        basketimg = imgbasket3;
    }
    //Seed upgrades
    if (SeedType == "normal")
    {
        tnum1 = 1;
        tnum2 =3;
    }
    else if (SeedType == "upgrade1")
    {
        tnum1 = 3;
        tnum2 = 6;
    }
    else if (SeedType == "upgrade2")
    {
        tnum1 = 6;
        tnum2 = 13;
    }
    //Fertilizer upgrades
    if (FertilizerType == "normal")
    {
        growr1 = 1;
        growr2 = 20;
    }
    else if (FertilizerType == "upgrade1")
    {
        growr1 = 5;
        growr2 = 30;
    }
    else if (FertilizerType == "upgrade2")
    {
        growr1 = 20;
        growr2 = 50;
    }

}

function levels()
{
    if(gamelevel == 1)
    {
        br = 203
        bg = 255
        bb = 190
    }
    if(gamelevel == 2)
    {
        br = 170
        bg = 222
        bb = 230
    }
    if(gamelevel == 3)
    {
        br = 255
        bg = 218
        bb = 155
    }

}

function treedraw()
{
    background(255, 149, 117);
    //This is the ground
        strokeWeight(0);
        fill(237, 135, 40);
        ellipse(400, 600, 1500, 350);

    //This is the tree's shadow
        fill(71, 52, 32);
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

function timerFun(tgoal)
{
    currentTime = millis();
    if(timerOn == 1)
    {
        image(imgtimer, width * 0.93, height * 0.12, imgtimer.width * 2.5, imgtimer.height * 2.5);
        fill(204, 197, 158);
        textSize(30)
        text(timer, width * 0.93, height * 0.155);
        fill(90, 76, 64);
        textSize(14);
        text("Goal: " + tgoal, width * 0.93, height * 0.254);

        if (currentTime - savedTime > 1000)
        {
            timer --
            savedTime = currentTime

        }
        if(timer <= 0)
        {

            if(timerscore >= tgoal)
            {

                if(gamelevel == 1)
                {
                tscore += timerscore * 0.25
                tscore = round(tscore, 0);
                    if(lv1status == "incomplete")
                    {
                        lv1status = "complete"
                    }
                }
                if(gamelevel == 2)
                {
                tscore += timerscore * 0.5
                tscore = round(tscore, 0);
                    if(lv2status == "incomplete")
                    {
                        lv2status = "complete"
                    }
                }
                if(gamelevel == 3)
                {
                tscore += timerscore * 0.75
                tscore = round(tscore, 0);
                    if(lv3status == "incomplete")
                    {
                        lv3status = "complete"
                    }
                }

                
            }
            else
            {
                tscore -= timerscore / 2;
                tscore = round(tscore, 0);
                state = "gameOver";
            }
            timerOn = 0;
        }
        if(timerscore >= tgoal)
        {
        fill(90, 76, 64);
        textSize(28);
        text("YOU WIN!!!", width * 0.5, height * 0.41);
        }
    
    }
}
function shoptextsettings()
{
    noStroke();
    fill(90, 76, 64);
    textSize (17);  
}

function retuenToMenu()
{
    if(timerOn == 0)
    {
    money += tscore;
    tscore = 0;
    timerscore = 0;
    timer = 0;
    timerOn = 0;
    p1stage = 0;
    p2stage = 0;
    p3stage = 0;
    p4stage = 0;
    state = "mainMenu";
    }
}

function plant(column, row, stageID, rID, gID, bID, sizeID)
{
    //plant1
    strokeWeight(3);
    stroke(147, 255, 146);
    line(column, row - 50, column, row + 50);

    line(column, row - 20, column - 10, row - 10);
    line(column, row + 20, column + 10, row + 30);

    //p1 tomato
    noStroke();

    if (stageID == 0)
    {
        rID = 199;
        gID = 255;
        bID = 160;
        sizeID = 0; 
    }
    if (stageID  >= 25 && stageID <= 50) 
    {
        rID = 199;
        gID = 255;
        bID = 160;
        sizeID = 6;
    }
    if (stageID >= 50 && stageID <= 75)
    {
        rID = 228;
        gID = 255;
        bID = 151;
        sizeID = 9;
    }
    if (stageID >= 75 && stageID <= 100)
    {
        rID = 255;
        gID = 193;
        bID = 141;
        sizeID = 12;
    }
    if (stageID == 100)
    {
        rID = 255;
        gID = 114;
        bID = 104;
        sizeID = 15;
    }
    fill(rID, gID, bID);
    ellipse(column - 10, row - 10, sizeID, sizeID);
    ellipse(column + 10, row + 30, sizeID, sizeID);
}