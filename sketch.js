var car;
var wall;

var speed;
var weight;




function setup() {
  createCanvas(1200,400);
  
  speed = random(55,90);
 weight = random(400, 1500);

  wall = createSprite(1119, 200, 20, height/2);
  wall.shapeColor = "blue";
  wall.visible = true;

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "black";
  car.visible = true;


}

function draw() {
  background(80, 80, 80);  

  wall.display();
  car.display();

 

 if (wall.x - car.x < (car.width + wall.width)/2) 
   {
     car.velocity = 0;
     var deformation = 0.5 * wight * speed * speed/22500;
     if (deformation > 180)
   {
     car.shapeColor = "red";
   }
    if (deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";
    }
    if (deformation < 100)
    {
      car.shapeColor = "green";
    }
  }

  drawSprites();
}