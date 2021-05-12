let saveButton;
let timer = 40;
let TimeAmount = 40;
let gommes = [];
let posY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  saveButton = createButton("save");
  saveButton.position(width - 50, height - 25);
  saveButton.mousePressed(downloadImage);
  background(255);

  //setInterval(spawnGomme, 2000);
  fill(0);

  setInterval(addSecondToTimer, 1000);


  for (let i = 0; i < 1; i ++){

    gommes[i] = {
      x: random(0, width),
      y: 0,
   
      display: function(){
        fill(0);
        rectMode(CENTER);
        noStroke();
        rect(this.x,this.y,100,100);
      },
 
      move: function(){
       
       this.y = this.y + 1;
     }
   }
 }
  
}

function draw() {

  fill(0);
  if(mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

  stroke(255, 50,50);
  drawing();
  AfficherTimer();
  DeathAnalyser();
  loopGommes();

  for(let i = 0; i < gommes.length; i++){
    gommes[i].move();
    gommes[i].display();
  }
}

function drawing(){
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY, 6);
  }
}



function AfficherTimer(){
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(255,255,255);
  noStroke();
  rectMode(CENTER);
  fill(255,255,255);
  rect(width/2, height/10, 120,120);
  fill(0,0,0);
  text(timer, width/2, height/10 );
}

function addSecondToTimer(){
 timer = timer-1;
}

function DeathAnalyser() 
{
  if(timer <= 0){
    loose();
  }
}

function loose(){
  timer = TimeAmount;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  saveButton.remove();
  saveButton = createButton("save");
  saveButton.position(width - 50, height - 25);
  saveButton.mousePressed(downloadImage);
  background(0);
}

function loopGommes(){

  for (let i = 0; i< gommes.lenght; i ++){
    gommes[i].move();
    gommes[i].display();
  }

}

function downloadImage() {
  save();
}
