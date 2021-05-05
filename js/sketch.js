let saveButton;
let timer = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  saveButton = createButton("save");
  saveButton.position(width - 50, height - 25);
  saveButton.mousePressed(downloadImage);
  background(0);

  setInterval(spawnGomme, 2000);
  setInterval(addSecondToTimer, 1000);
  
}

function draw() {
  fill(0);
  rect(width - 50, height - 25, 50, 25);
  stroke(255, 50,50);

  drawing();
  AfficherTimer();

  
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
  text(timer, width/2, height/10 );
}

function spawnGomme(){
  fill(255,255,255);
  rectMode(CENTER);
  noStroke();
  translate(random(-1,1), random(-1,1));
  rect(random(0, width),random(0, height),100,100);
  
}

function addSecondToTimer(){
  timer = timer-1;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  saveButton.remove();
  saveButton = createButton("save");
  saveButton.position(width - 50, height - 25);
  saveButton.mousePressed(downloadImage);
  background(0);
}

function downloadImage() {
  save();
}
