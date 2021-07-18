var garden,rabbit;
var gardenImg,rabbitImg;

var apple, applesGroup, appleImage;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImage = loadImage("apple.png");

  applesGroup = new Group();
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  

  if(keyDown("space")&& rabbit.y >= 100) {
    rabbit.velocityY = -13;

  
  }
  rabbit.velocityY = rabbit.velocityY + 1
  

  spawnapples();
if(applesGroup.collide(rabbit)){
//apple.setVelocityXEach(0);
apple.destroy(rabbit);
}
  

  drawSprites();
  
 
}


function spawnapples() {
  //write code here to spawn the apples
  if (frameCount % 60 === 0) {
     apple = createSprite(600,100,40,10);
     
    apple.y = Math.round(random(10,60));
    apple.addImage(appleImage);
    apple.scale = 0.1;
    apple.velocityX = -5;
    
     //assign lifetime to the variable
    apple.lifetime = 280;
    
    //adjust the depth
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
    
    //adding apple to the group
   
    
    applesGroup.add(apple);
  }
 
  
  
}