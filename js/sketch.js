
let saveButton;
let timer = 20;
let TimeAmount = 20;
let gommes = [];
let posY = 0;
let strokeSize = 5;
let imgGomme;
let imgGommeBlanche;
let imgCrayon;
let isDecreasing = false;
let mots = ["un tracteur", "un jet privé", "un ordinateur portable", "Waluigi", "iron man", "Super Mario", "Daniel", "un appareil photo", "un clavier", "un chat", "un chien", "Harry Potter", "un bus", "un taxi", "un gâteau", "du chocolat", "une souris", "une lampe", "un téléphone", "totoro","une fleur", "une banane", "Théo", " un heptadécaèdre", "la capitale demographique du Pakistan", "La courbe du bitcoin de 2009 à 2020", 'un burger du BK' ];
let motActuel;
let gameHasStarted = false;
let knowsTheWord = false;
let isOnTitleScreen = true;
let readyToDraw = false;





function preload(){
  imgGomme = loadImage("img/Gomme.png");
  imgGommeBlanche = loadImage("img/Gomme_Blanche.png");
  imgCrayon = loadImage("img/Crayon.png");
}


function setup() {
  motActuel = random(mots);
  createCanvas(windowWidth, windowHeight);
  isOnTitleScreen = true;
  saveButton = createButton("save");
  saveButton.position(width - 50, height - 25);
  saveButton.mousePressed(downloadImage);
  background(255);

  
  
  setInterval(addSecondToTimer, 1000);
  setInterval(SpawnGomme, 3500);
  setInterval(growStroke, 10);
  
  displayText();
  
}


function draw() {

  
  if(mouseIsPressed && isOnTitleScreen ==true){
    knowsTheWord = true;
    readyScreen();
    isOnTitleScreen = false;
  }


  cursor("img/Crayon.png",50,80);
  
  
  
  
  if(mouseIsPressed) {
    fill(0);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

  if(gameHasStarted == true){
    drawing();
    AfficherTimer();
    DeathAnalyser();
    loopGommes();

  }
  

  strokeWeight(strokeSize);
  stroke(0,0,0);
  
  
  

  for(let i = 0; i < gommes.length; i++){
    gommes[i].move();
    gommes[i].display();
  }
}

function drawing(){
  stroke(0);
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
  rect(10, 10, 120,120);
  fill(0,0,0);
  textSize(25);
  text(timer, 50, 50);
}

function addSecondToTimer(){
  if(gameHasStarted == true){
    timer = timer-1;
  }
 
}

function DeathAnalyser() 
{
  if(timer <= 0){
    loose();
  }
}

function loose(){
  gameHasStarted = false;
  textSize(30);
  text("FINI! C'était " + motActuel, width/2, height - 40)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  saveButton.remove();
  saveButton = createButton("save");
  saveButton.position(width - 50, height - 25);
  saveButton.mousePressed(downloadImage);
  background(255);
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

  if(gameHasStarted == true && timer >=2){

    for (let i = 0; i < 1; i ++){

      gommes[i] = {
        x: random(0, width),
        y: 0,
     
        display: function(){
          fill(255);
          rectMode(CENTER);
          imageMode(CENTER);
          noStroke();
          image(imgGommeBlanche, this.x, this.y, 290, 290);
          image(imgGomme, this.x, this.y, 290, 290);
        },
   
        move: function(){
         
         this.y = this.y + 6;
       }
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

function displayText(){
  stroke(255);
  textSize(80);
  textAlign(CENTER);
  text("Dessinez " + motActuel, width/2, height/4);
  textSize(40);
  text("Cliquez lorsque vous avez retenu le mot", width/2, height/2); 

  if(knowsTheWord == true){
  stroke(255);
  fill(255)
  textSize(80)
  textAlign(CENTER);
  text("Dessinez " + motActuel, width/2, height/4);
  textSize(40);
  text("Cliquez lorsque vous avez retenu le mot", width/2, height/2); 
  }
}

function readyScreen(){
  clear();
   displayText();
   textSize(40);
   fill(0);
   text("Cliquez pour commencer!", width/2, height/2);
   
   if(mouseIsPressed && knowsTheWord == true){
    readyToDraw = true;
    fill(0);
    text("Cliquez pour commencer!", width/2, height/2);
   }
}

function mousePressed(){
  if(readyToDraw == true){
    stroke(255);
    readyToDraw = false;
    fill(255);
    text("Cliquez pour commencer!", width/2, height/2);
    gameHasStarted = true;
  }
}











