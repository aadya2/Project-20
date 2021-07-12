var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var speed1, speed2, speed3, speed4;
var weight;
var b1, b2, b3;
var c1, c2, c3, c4, c5, c6, c7, c8, c9;
var d1, d2, d3, d4, d5, d6, d7, d8, d9;
var e1, e2, e3, e4, e5, e6, e7, e8, e9;
var f1, f2, f3, f4, f5, f6, f7, f8, f9;

function setup() {
  createCanvas(1300,400);
 // createSprite(400, 200, 50, 50);
  speed1 = random(20, 120);
  speed2 = random(20, 120);
  speed3 = random(20, 120);
  speed4 = random(20, 120);
 
  weight = random(400, 1500);

  wall1 = createSprite(1200, 50, 70, 30);
  wall2 = createSprite(1200, 150, 70, 30);
  wall3 = createSprite(1200, 250, 70, 30);
  wall4 = createSprite(1200, 350, 70, 30);

  c1 = createSprite(70, 50, 80, 5);
  c1.shapeColor = "White";

  c2 = createSprite(200, 50, 80, 5);
  c2.shapeColor = "White";

  c3 = createSprite(330, 50, 80, 5);
  c3.shapeColor = "White";

  c4 = createSprite(460, 50, 80, 5);
  c4.shapeColor = "White";

  c5 = createSprite(590, 50, 80, 5);
  c5.shapeColor = "White";

  c6 = createSprite(720, 50, 80, 5);
  c6.shapeColor = "White";

  c7 = createSprite(850, 50, 80, 5);
  c7.shapeColor = "White";

  c8 = createSprite(980, 50, 80, 5);
  c8.shapeColor = "White";

  c9 = createSprite(1110, 50, 80, 5);
  c9.shapeColor = "White";

  d1 = createSprite(70, 150, 80, 5);
  d1.shapeColor = "White";

  d2 = createSprite(200, 150, 80, 5);
  d2.shapeColor = "White";

  d3 = createSprite(330, 150, 80, 5);
  d3.shapeColor = "White";

  d4 = createSprite(460, 150, 80, 5);
  d4.shapeColor = "White";

  d5 = createSprite(590, 150, 80, 5);
  d5.shapeColor = "White";

  d6 = createSprite(720, 150, 80, 5);
  d6.shapeColor = "White";

  d7 = createSprite(850, 150, 80, 5);
  d7.shapeColor = "White";

  d8 = createSprite(980, 150, 80, 5);
  d8.shapeColor = "White";

  d9 = createSprite(1110, 150, 80, 5);
  d9.shapeColor = "White";

  e1 = createSprite(70, 250, 80, 5);
  e1.shapeColor = "White";

  e2 = createSprite(200, 250, 80, 5);
  e2.shapeColor = "White";

  e3 = createSprite(330, 250, 80, 5);
  e3.shapeColor = "White";

  e4 = createSprite(460, 250, 80, 5);
  e4.shapeColor = "White";

  e5 = createSprite(590, 250, 80, 5);
  e5.shapeColor = "White";

  e6 = createSprite(720, 250, 80, 5);
  e6.shapeColor = "White";

  e7 = createSprite(850, 250, 80, 5);
  e7.shapeColor = "White";

  e8 = createSprite(980, 250, 80, 5);
  e8.shapeColor = "White";

  e9 = createSprite(1110, 250, 80, 5);
  e9.shapeColor = "White";

  f1 = createSprite(70, 350, 80, 5);
  f1.shapeColor = "White";

  f2 = createSprite(200, 350, 80, 5);
  f2.shapeColor = "White";

  f3 = createSprite(330, 350, 80, 5);
  f3.shapeColor = "White";

  f4 = createSprite(460, 350, 80, 5);
  f4.shapeColor = "White";

  f5 = createSprite(590, 350, 80, 5);
  f5.shapeColor = "White";

  f6 = createSprite(720, 350, 80, 5);
  f6.shapeColor = "White";

  f7 = createSprite(850, 350, 80, 5);
  f7.shapeColor = "White";

  f8 = createSprite(980, 350, 80, 5);
  f8.shapeColor = "White";

  f9 = createSprite(1110, 350, 80, 5);
  f9.shapeColor = "White";

  car1 = createSprite(50, 50, 30, 20);
  car1.velocityX = speed1;
  car1.shapeColor = "Pink";

  car2 = createSprite(50, 150, 30, 20);
  car2.velocityX = speed2;
  car2.shapeColor = "Pink";

  car3 = createSprite(50, 250, 30, 20);
  car3.velocityX = speed3;
  car3.shapeColor = "Pink";

  car4 = createSprite(50, 350, 30, 20);
  car4.velocityX = speed4;
  car4.shapeColor = "Pink";
  
  b1 = createSprite(width/2, 100, width, 5);
  b1.shapeColor = color(255);

  b2 = createSprite(width/2, 200, width, 5);
  b2.shapeColor = color(255);

  b3 = createSprite(width/2, 300, width, 5);
  b3.shapeColor = color(255);

}

function draw() {
  background(0);  
  detectCollisionA();
  detectCollisionB();
  detectCollisionC();
  detectCollisionD();
  drawSprites();
}

function detectCollisionA(){
  if(wall1.x-car1.x <= (car1.width + wall1.width)/2){
     car1.velocityX = 0;    
     var deformation = 0.5 * speed1 * weight * speed1/22509;
     if(deformation>180){
        car1.shapeColor = color(255, 0, 0);
     }
     if(deformation<180 && deformation>100){
        car1.shapeColor = color(230, 230, 0);
   }
      if(deformation<100){
        car1.shapeColor = color(0, 255, 0);
 }
  }
}

function detectCollisionB(){
  if(wall2.x-car2.x <= (car2.width + wall2.width)/2){
     car2.velocityX = 0;    
     var deformation = 0.5 * speed2 * weight * speed2/22509;
     if(deformation>180){
        car2.shapeColor = color(255, 0, 0);
     }
     if(deformation<180 && deformation>100){
        car2.shapeColor = color(230, 230, 0);
   }
      if(deformation<100){
        car2.shapeColor = color(0, 255, 0);
 }
  }
}

function detectCollisionC(){
  if(wall3.x-car3.x <= (car3.width + wall3.width)/2){
     car3.velocityX = 0;    
     var deformation = 0.5 * speed3 * weight * speed3/22509;
     if(deformation>180){
        car3.shapeColor = color(255, 0, 0);
     }
     if(deformation<180 && deformation>100){
        car3.shapeColor = color(230, 230, 0);
   }
      if(deformation<100){
        car3.shapeColor = color(0, 255, 0);
 }
  }
}

function detectCollisionD(){
  if(wall4.x-car4.x <= (car4.width + wall4.width)/2){
     car4.velocityX = 0;    
     var deformation = 0.5 * speed4 * weight * speed4/22509;
     if(deformation>180){
        car4.shapeColor = color(255, 0, 0);
     }
     if(deformation<180 && deformation>100){
        car4.shapeColor = color(230, 230, 0);
   }
      if(deformation<100){
        car4.shapeColor = color(0, 255, 0);
 }
  }
}