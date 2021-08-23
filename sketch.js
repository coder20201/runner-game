var player,target,ob1,ob2,edges;


function setup() {
  
  createCanvas(600,600);
  edges=createEdgeSprites();
  player=createSprite(50,550,20,20);
  target=createSprite(550,50,20,20);
  ob1=createSprite(300,200,100,20);
  ob2=createSprite(300,400,100,20);
  ob1.velocityX=40;
  ob2.velocityX=-40;
  target.shapeColor="blue";
  
  ob2.shapeColor="red";
  ob1.shapeColor="red";
}

function draw() {
  background("black");  
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  ob1.bounceOff(edges[0]);
  ob1.bounceOff(edges[1]);
  ob2.bounceOff(edges[0]);
  ob2.bounceOff(edges[1]);
  if(keyDown("up")){
    player.y=player.y - 5;
  }
  if(keyDown("down")){
    player.y=player.y + 5;
  }
  if(keyDown("left")){
    player.x=player.x - 5;
  }
  if(keyDown("right")){
    player.x=player.x + 5;
  }
  if(player.isTouching(ob1)){
    player.x=50;
    player.y=550;
  }
  if(player.isTouching(ob2)){
    player.x=50;
    player.y=550;
  }
  if(player.isTouching(target)){
    text("You win", 300,300);

   
  }

  drawSprites();
}
