var bg,bg2,bg3,form,system,code,security;
var treasure;
var score=0,score2=0;
var click=0;
var restart,restartImg;
var substate=0;
var c1,c2,c3,c4,c5,c6;
var c1Img,c2Img,c3Img;
var card1,card2,card3,card4,card5,card6;
var lock,lockImg;
var cardFlipSound , tadaSound , restartSound , loseSound , winSound;
var a=0,b=0,c=0,d=0,e=0,f=0;
var x1=1, x2=1, x3=1, x4=1, x5=1, x6=1;
var ca=0, cb=0, cc=0, cd=0, ce=0, cf=0;
var cardImg,gamestate=1;

function preload() {
  cardImg = loadAnimation("images/card.png");
  key = loadImage("images//key.png");
  bg= loadImage("images/aladdin_cave.jpg");
  bg2= loadImage("images/aladdin_cave2.jpg");
  treasure= loadImage("images/treasure.jpg");
  c1Img= loadAnimation("images/1.png");
  c2Img= loadAnimation("images/2.png");
  c3Img= loadAnimation("images/3.png");
  restartImg= loadImage("images/restart1.png")
  lockImg=loadImage("images/lock.png");
  bg3= loadImage("images/wood.jpg");
  cardFlipSound = loadSound("cardflip.mp3");
  tadaSound = loadSound("tada.wav");
  restartSound = loadSound("restart.wav");
  loseSound = loadSound("lose.wav");
  winSound = loadSound("391539__mativve__electro-win-sound.wav")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();

  lock = createSprite(500,330,50,50);
  lock.addImage(lockImg);
  lock.scale=0.2;
  lock.visible=false;

  restart= createSprite(500,250,50,50);
  restart.addImage(restartImg);
  restart.scale=0.4;
  restart.visible=false;

  c1 = createSprite(300,100,40,70);
  c1.addAnimation("c1i",cardImg);
  c1.scale=0.1;
  c1.visible=false;

  c2 = createSprite(500,100,40,70);
  c2.addAnimation("c2i",cardImg);
  c2.scale=0.1;
  c2.visible=false;

  c3 = createSprite(700,100,40,70);
  c3.addAnimation("c3i",cardImg);
  c3.scale=0.1;
  c3.visible=false;

  c4 = createSprite(300,400,40,70);
  c4.addAnimation("c4i",cardImg);
  c4.scale=0.1;
  c4.visible=false;

  c5 = createSprite(500,400,40,70);
  c5.addAnimation("c5i",cardImg);
  c5.scale=0.1;
  c5.visible=false;

  c6 = createSprite(700,400,40,70);
  c6.addAnimation("c6i",cardImg);
  c6.scale=0.1;
  c6.visible=false;

  sophia = createSprite(373, 379,20,20);
  sophia.velocityY=0;
  sophia.velocityX=0;
  
  sophia.shapeColor='RED';


  cup = createSprite(15, 29,10,80);
  cup.shapeColor='gold';
  cup.addImage(key);
  cup.scale = 0.02;
  
  wall1 = createSprite(99, 10,100,20);
  wall1.shapeColor='black';
  
  wall2 = createSprite(199, 85,100,20);
  wall2.shapeColor='black';
  
  wall3 = createSprite(322, 10,148,20);
  wall3.shapeColor='black';
  
  wall4 = createSprite(100, 391,148,20);
  wall4.shapeColor='black';
  
  wall5 = createSprite(120, 312,100,20);
  wall5.shapeColor='black';
  
  wall6 = createSprite(255, 391,149,20);
  wall6.shapeColor='black';
  
  wall7 = createSprite(80, 149,100,20);
  wall7.shapeColor='black';
  
  wall8= createSprite(160, 237,100,20);
  wall8.shapeColor='black';
  
  wall9 = createSprite(265,157 ,148,20);
  wall9.shapeColor='black';
  
  wall10 = createSprite(300, 61,70,20);
  wall10.shapeColor='black';
  
  wall11 = createSprite(300, 300,105,20);
  wall11.shapeColor='black';
  
  wall12 = createSprite(337, 268,20,65);
  wall12.shapeColor='black';
  
  wall13 = createSprite(255, 241,20,100);
  wall13.shapeColor='black';
  
  wall14 = createSprite(37, 228,20,100);
  wall14.shapeColor='black';
  
  wall15 = createSprite(345, 110,20,120);
  wall15.shapeColor='black';
  
  wall16 = createSprite(120, 193,20,100);
  wall16.shapeColor='black';
  
  wall17= createSprite(180,350 ,20,100);
  wall17.shapeColor='black';
  
  wall18 = createSprite(15, 380,20,148);
  wall18.shapeColor='black';
  
  wall19 = createSprite(385, 150,20,340);
  wall19.shapeColor='black';
  
  wall20 = createSprite(258, 57,20,75);
  wall20.shapeColor='black';
  
  wall21 = createSprite(140, 45,20,100);
  wall21.shapeColor='black';
  
  wall22 = createSprite(40, 45,20,100);
  wall22.shapeColor='black';
  
  wall23 = createSprite(295, 245,20,60);
  wall23.shapeColor='black';
  
  wall24 = createSprite(325, 225,40,20);
  wall24.shapeColor='black';
  
  wall25 = createSprite(231, 365,20,40);
  wall25.shapeColor='black';

  hide();
 
}


function draw() {

 edges = createEdgeSprites() ;
 sophia.bounceOff(edges);
 
if(gamestate===1) {
  background(bg);

  clues();
  security.display();
  textSize(30);
  fill("white");
  text("Score: " + score, 850, 50);

if(score === 5 ) {
    clear()
  

    background(bg3)
    c1.visible=true;
    c2.visible=true;
    c3.visible=true;
    c4.visible=true;
    c5.visible=true;
    c6.visible=true;

if(mousePressedOver(c1) && x1===1){
  c1.addAnimation("c1i",c1Img);
  c1.scale=0.1;
  a=1;
  click++
  x1=0;
  cardFlipSound.play();
}

if(mousePressedOver(c2) && x2===1){
  c2.addAnimation("c2i",c2Img);
  c2.scale=0.1;
  b=1;
  click++
  x2=0; 
  cardFlipSound.play();
  }

if(mousePressedOver(c3) && x3===1){ 
  c3.addAnimation("c3i",c2Img);
  c3.scale=0.1;
  c=1;
  click++
  x3=0; 
  cardFlipSound.play();
  }

if(mousePressedOver(c4) && x4===1){ 
    c4.addAnimation("c4i",c3Img);
    c4.scale=0.1;
    d=1;
    click++
    x4=0;
    cardFlipSound.play();
  }

if(mousePressedOver(c5) && x5===1){ 
    c5.addAnimation("c5i",c1Img);
    c5.scale=0.1;
    e=1;
    click++
    x5=0;
    cardFlipSound.play();
    }
  
if(mousePressedOver(c6) && x6===1){
    c6.addAnimation("c6i",c3Img);
    c6.scale=0.1;
    f=1;
    click++
    x6=0; 
    cardFlipSound.play();
   }

if(a===1 && e===1 ){
    c1.visible=false;
    c5.visible=false;
  if(ca===0 && ce===0)
    {
    score2=score2+1;
    ca=1;
    ce=1
    }
  } 

if(b===1 && c===1 ){
    c2.visible=false;
    c3.visible=false;
  if(cb===0 && cc===0)
    {
    score2=score2+1;
    cb=1;
    cc=1
    }
  }
   
if(d===1 && f===1){
    c4.visible=false;
    c6.visible=false;
  if(cd===0 && cf===0)
    {
    score2=score2+1;
    cd=1;
    cf=1
    }
  
  }
  
if( score2 ===3){
  clear()
  background(bg2);

 // winSound.play();

  c1.visible=false;
  c2.visible=false;
  c3.visible=false;
  c4.visible=false;
  c5.visible=false;
  c6.visible=false;

  visible();

  fill("blue");
  text("Reach to the key to open the treasure", 400,430);

  fill("yellow");
  text("Hint: don't touch the black walls....", 400,470);

if (keyDown("UP_ARROW")) {
      sophia.velocityX=0;
      sophia.velocityY=-2;
   }
     
if (keyDown("DOWN_ARROW")) {
     sophia.velocityX=0;
     sophia.velocityY=2;
   }
   
if (keyDown("RIGHT_ARROW")) {
     sophia.velocityX=2;
     sophia.velocityY=0;
   }
   
if (keyDown("LEFT_ARROW")) {
    sophia.velocityX=-2;
    sophia.velocityY=0;
   }

   if (sophia.isTouching(wall1) || sophia.isTouching(wall2) || sophia.isTouching(wall3) || sophia.isTouching(wall4) || sophia.isTouching(wall5) || 
       sophia.isTouching(wall6) || sophia.isTouching(wall7) || sophia.isTouching(wall8) || sophia.isTouching(wall9) || sophia.isTouching(wall10) ||
       sophia.isTouching(wall11) || sophia.isTouching(wall12) || sophia.isTouching(wall13) || sophia.isTouching(wall14) || sophia.isTouching(wall15) ||
       sophia.isTouching(wall16) || sophia.isTouching(wall17) || sophia.isTouching(wall18) || sophia.isTouching(wall19) || sophia.isTouching(wall20) ||
       sophia.isTouching(wall11) || sophia.isTouching(wall22) || sophia.isTouching(wall23) || sophia.isTouching(wall24) || sophia.isTouching(wall25) )
    {
        sophia.x=379;
        sophia.y=373;
        sophia.velocityX=0;
        sophia.velocityY= 0;
        loseSound.play();
    }
    
if (sophia.isTouching(cup)) {
      sophia.collide(cup); 
      sophia.velocityX=0;
      sophia.velocityY= 0;

      gamestate=2;
   }
   //clear();
}

  if ((click===2 && score2 !== 1) ||(click===4 && score2 !==2) ||(click===6 && score2 !== 3)  )
  { 
      c1.visible=false;
      c2.visible=false;
      c3.visible=false;
      c4.visible=false;
      c5.visible=false;
      c6.visible=false;
      textSize(40)
      text("Failed",450,180);
      restart.visible=true;

  if(mousePressedOver(restart)){ 
        gameRestart() 
       restartSound.play();
      }
  }

if(score2<3){
      fill("white")
      textSize(30);
      text("Match the cards !!",30,30)
      textSize(35);
      text("Score: "+ score2,850,30);
    }
  }
}

if(gamestate===2){
  background(treasure)
    hide();
    fill("blue")
    textSize(50);
    text("TREASURE UNLOCKED",250, 200);
    lock.visible=true;
   // tadaSound.loop=false;
   // tadaSound.play();
 } 
  
 drawSprites(); 
}


function gameRestart() {
  a=0;b=0;c=0;d=0;e=0;f=0;
  x1=1; x2=1; x3=1; x4=1; x5=1; x6=1;
  ca=0; cb=0; cc=0; cd=0; ce=0, cf=0;
  click=0;
  score2=0;
 
  c1.addAnimation("c1i",cardImg);
  c2.addAnimation("c2i",cardImg);
  c3.addAnimation("c3i",cardImg);
  c4.addAnimation("c4i",cardImg);
  c5.addAnimation("c5i",cardImg);
  c6.addAnimation("c6i",cardImg);
  c1.visible=true;
  c2.visible=true;
  c3.visible=true;
  c4.visible=true;
  c5.visible=true;
  c6.visible=true;
  restart.visible=false;
}
  
function hide() {

  wall1.visible = false; wall2.visible = false; wall3.visible = false; wall4.visible = false; wall5.visible = false;
  wall6.visible = false; wall7.visible = false; wall8.visible = false; wall9.visible = false; wall10.visible = false;
  wall11.visible = false; wall12.visible = false; wall13.visible = false; wall14.visible = false; wall15.visible = false;
  wall16.visible = false; wall17.visible = false; wall18.visible = false; wall19.visible = false; wall20.visible = false;
  wall21.visible = false; wall22.visible = false; wall23.visible = false; wall24.visible = false; wall25.visible = false;
 
  sophia.visible= false;
  cup.visible=false;
}

function visible(){
  wall1.visible = true; wall2.visible = true; wall3.visible = true; wall4.visible = true; wall5.visible = true;
    wall6.visible = true; wall7.visible = true; wall8.visible = true; wall9.visible = true; wall10.visible = true;
    wall11.visible = true; wall12.visible = true; wall13.visible = true; wall14.visible = true; wall15.visible = true;
    wall16.visible = true; wall17.visible = true; wall18.visible = true; wall19.visible = true; wall20.visible = true;
    wall21.visible = true; wall22.visible = true; wall23.visible = true; wall24.visible = true; wall25.visible = true;
    sophia.visible= true;
    cup.visible=true;
}