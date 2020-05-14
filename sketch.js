var fixedrect, movingrect

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "yellow";
  movingrect = createSprite(600,300,50,50);
  movingrect.shapeColor = "yellow";
}

function draw() {
  background(0); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      fixedrect.shapeColor = "green";
      movingrect.shapeColor = "green"
    }
    else{
      fixedrect.shapeColor = "yellow";
      movingrect.shapeColor = "yellow";
    }
  drawSprites();
}