var database;
var form,form1;

function setup() {
  createCanvas(1200,1200);
  database = firebase.database();
  form = new Form();
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  //form.display(); 
  form.display();
  //drawSprites();
}