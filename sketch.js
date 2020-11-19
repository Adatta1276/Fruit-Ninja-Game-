/* fruit1 = banana
fruit2 = orange

fruit3 = watermelon
fruit4 = apple */

var SWORD, SI;
var PLAY = 1;
var END = 0;
var GAMESTATE = 1;
var score = 0;
var fruitG, enemyG,enemy;
var fruit, FCHOICE, LCHOICE,fi1, fi2, fi3, fi4, fi5, a1, a2, GMOI,GMOS,SWORDS,gplay,gamOI,alien1,crash,posi;

function preload() {

  SI = loadImage("sword.png");
  alien = loadImage("alien1.png");
  fi1 = loadImage("fruit1.png");
  fi2 = loadImage("fruit2.png");
  fi3 = loadImage("fruit3.png");
  fi4 = loadImage("fruit4.png");
  GMOI = loadImage("gamodud2.png");
  GMOS = loadSound("gameover.mp3");
  SWORDS = loadSound("WHOOSHOO.mp3");
  gplay = loadSound("gameplay.mp3");
  F1C = loadImage("Screenshot 2020-11-04 171847.png");
  F2C = loadImage("oc.png");
  F3C = loadImage("wc.png");
  F4C = loadImage("applecut2.png"); 
  

}

function setup() {

  createCanvas(600,600);
  //crash = createSprite(80,30,50,50);
  
  
  
  //LCHOICE = Math.round(random(1,8));
  SWORD = createSprite(300, 300, 10, 20);
  SWORD.addImage(SI);
  SWORD.scale = 1;
  fruitG = createGroup();
  enemyG = createGroup();
  //SWORD.collide(top);  
  //SWORD.debug = false;
  SWORD.setCollider("rectangle",13,-30,77,104);
  noCursor();
  
  

}

function draw() {

  background("black");
  //GAMESTATE = 1;
  
  /* if((LCHOICE === 1) || (LCHOICE === 3)) {
      crash.addImage(F1C);
    }
    
    else if((LCHOICE === 2) || (LCHOICE === 4)) {
      crash.addImage(F2C);
      //fruit.scale = 0.1;
    }
    
    else if((LCHOICE === 5) || (LCHOICE === 7)) {
      crash.addImage(F3C);
      
    }
    
    else if((LCHOICE === 6) || (LCHOICE === 8)) {
      crash.addImage(F4C);
      
    } */
  
  
  if(GAMESTATE === 1) {
    CF();
    CENEMY();
    //gplay.play();
    SWORD.y = World.mouseY;
    SWORD.x = World.mouseX;
    gamOI = createSprite(300,300,600,600);
    gamOI.addImage(GMOI);
    gamOI.visible = false; 
    
 // console.clear();
    
    if(fruitG.isTouching(SWORD)) {
      
      fruitG.destroyEach();
      
      score=score+2;
      SWORDS.play();
      
      
    } 
    
    if(enemyG.isTouching(SWORD)) {
      
      GAMESTATE = 0;
      SWORD.destroy();
      GMOS.play();
      //SWORDS.stop();
      
    }
    
    
}
  
  if(GAMESTATE === 0) {
    
 // console.clear();
    //SWORDS.stop();
     fruitG.setVelocityXEach(0);
    enemyG.setVelocityXEach(0); 
    fruitG.setVisibleEach(0);
    enemyG.setVisibleEach(0);
    gamOI.visible = true;
    //SWORD.addImage(GMOI);
    SWORD.visible = false;
    //SWORD.destroy();
    SWORD.scale = 20;
    SWORD.x = 300;
    SWORD.x = World.mouseX = false;
    SWORD.y = World.mouseY = false;
    SWORD.y = 300;
    //score=0;
    
  fruitG.destroyEach() ;
    enemyG.destroyEach();
    
    
    
    
  }
  
  textFont("Comic Sans MS");
  textSize(20);
  fill("blue");
  text("Your score is : "+score,430,45);
  //text.depth = 
  
  drawSprites();
}

function CF() {
  if (World.frameCount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;
    
    FCHOICE = Math.round(random(1,8));
    
    if((FCHOICE === 1) || (FCHOICE === 3)) {
      fruit.addImage(fi1);
    }
    
    else if((FCHOICE === 2) || (FCHOICE === 4)) {
      fruit.addImage(fi2);
      //fruit.scale = 0.1;
    }
    
    else if((FCHOICE === 5) || (FCHOICE === 7)) {
      fruit.addImage(fi3);
      
    }
    
    else if((FCHOICE === 6) || (FCHOICE === 8)) {
      fruit.addImage(fi4);
      
    }
    
    POSI = Math.round(random(1,2));
    
    if(POSI === 1) {
      fruit.x = 600;
      
      
      fruit.velocityX = -(7+2*(score/4));
    }
    
    
    else if(POSI === 2) {
      fruit.x = 0;

      fruit.velocityX = (7+2*(score/4));
    }
    

    fruit.y = Math.round(random(50,340));
    
    //fruit.velocityX = -7;
    
    
    fruit.lifetime = 86;
    
    
    fruitG.add(fruit);


  }
  
 
}

 function CENEMY() {
  
   if(World.frameCount % 200 === 0) {
     enemy = createSprite(400,300,20,20);
     enemy.addImage(alien);
     //enemy.scale = 1;
     enemy.visible = true;
     //var CEN = Math.round(random(1,2));
     
     /* if(CEN === 1) {
       enemy.addImage(alien1);
     }
     
     else if(CEN === 2) {
       enemy.addImage(alien2);
       enemy.scale = 0.6;
     } */
     
     enemy.y = Math.round(random(100,300));
     enemy.velocityX = -7;
     
     if(score>=10) {
       enemy.velocityX = -(7+(score/10));
     }
     enemy.lifetime = 86;
     
     enemyG.add(enemy);
     
   }
}