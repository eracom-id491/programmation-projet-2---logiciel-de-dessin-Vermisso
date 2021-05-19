let saveButton;
let timer = 40;
let TimeAmount = 40;
let gommes = [];
let posY = 0;
let strokeSize = 5;
let imgGomme;
let isDecreasing = false;


function preload(){
  imgGomme = loadImage("img/Gomme.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  saveButton = createButton("save");
  saveButton.position(width - 50, height - 25);
  saveButton.mousePressed(downloadImage);
  background(255);

  //setInterval(spawnGomme, 2000);
  fill(0);

  setInterval(addSecondToTimer, 1000);
  setInterval(SpawnGomme, 3500);
  setInterval(growStroke, 10);
  SpawnGomme();
}

function draw() {

  fill(0);
  if(mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

  strokeWeight(strokeSize);
  stroke(0,0,0);
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

function SpawnGomme(){

  for (let i = 0; i < 1; i ++){

    gommes[i] = {
      x: random(0, width),
      y: 0,
   
      display: function(){
        fill(255);
        rectMode(CENTER);
        imageMode(CENTER);
        noStroke();
        rect(this.x,this.y,220,220);
        image(imgGomme, this.x, this.y, 290, 290);
      },
 
      move: function(){
       
       this.y = this.y + 5;
     }
   }
 }
}

function growStroke(){
  if(strokeSize <= 39 && isDecreasing == false){
    strokeSize = strokeSize + 1;
  }
  
  if(strokeSize >= 40)
  {
    isDecreasing = true;
  }

  if(isDecreasing == true){
    strokeSize = strokeSize - 1;
  }

  if(strokeSize <= 1){
    isDecreasing = false;
  }
}

