///const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;


var zombie, zombierunning, zombiedie;

var score = 0;

function preload() {
    //getBackgroundImg();
    zombierunning = loadImage("Images/zombie1");
    //zombiedie = loadAnimation("Images/zombiedie1","Images/zombiedie2","Images/zombiedie3");
}

function setup(){
    createCanvas(1000,600);

    zombie = createSprite(800,100,20,20);
    zombie.addImage("running", zombierunning);
   // zombie.scale = 0.5;
    

   
}

function draw(){
    /*if(backgroundImg){*/
        background(/*backgroundImg*/255);
    //}
        noStroke();
        textSize(35)
        fill("white");
        text("Score  " + score, width-300, 50);
    
    
   drawSprites();
}

/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=20){
        bg = "Images/daybg.jpg";
    }
    else{
        bg = "Images/nightbg.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/