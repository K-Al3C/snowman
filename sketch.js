var sSnow = 0; 
var sSnow2 = 0;
var stageColor = "#435191";

function setup() {
  // put setup code here
    createCanvas(800, 600);
}
function draw() {
  // put drawing code here
    background(stageColor);
    stroke("#000000");
    strokeWeight(5);
    fill("#ffffff");
    //this is the body of my snowman
    ellipse(550, 250, 100, 100);
    ellipse(550, 360, 130, 130);
    ellipse(550, 475, 160, 160);
    //this will make his eyes, mouth, and buttons
    noStroke();
    fill("#000000");
    ellipse(530, 240, 10, 10);
    ellipse(575, 240, 10, 10);
    ellipse(525, 270, 8, 8);
    ellipse(535, 275, 8, 8);
    ellipse(545, 280, 8, 8);
    ellipse(555, 282, 8, 8);
    ellipse(565, 279, 8, 8);
    ellipse(575, 275, 8, 8);
    ellipse(585, 269, 8, 8);
    ellipse(555, 320, 8, 8);
    ellipse(555, 335, 8, 8);
    ellipse(555, 350, 8, 8);
    ellipse(555, 365, 8, 8);
    ellipse(555, 380, 8, 8);
    ellipse(555, 410, 8, 8);
    ellipse(555, 430, 8, 8);
    //this is his nose
    stroke("#fc8719");
    strokeWeight(10);
    line(555, 260, 600, 250);
    //these are gonig to be the arms
    stroke("#4d2e0b");
    strokeWeight(8);
    line(500, 315, 430, 390);
    line(600, 315, 655, 395);
    //above this comment ends the snowman
    //here strat the snowflakes
    stroke("#000000");
    strokeWeight(5);
    fill("#ffffff");
    ellipse (50,200, 20, 20);
    ellipse (100,100, 20, 20);
    ellipse (200,200, 20, 20);
    ellipse (400,200, 20, 20);
    ellipse (300,100, 20, 20);
    ellipse (700,100, 20, 20);
    ellipse (100,300, 20, 20);
    ellipse (200,400, 20, 20);
    ellipse (300,300, 20, 20);
    ellipse (50,400, 20, 20);
    ellipse (100,500, 20, 20);
    ellipse (200,550, 20, 20);
    ellipse (300,500, 20, 20);
    ellipse (750,200, 20, 20);
    ellipse (680,250, 20, 20);
    ellipse (740,400, 20, 20);
    ellipse (680,500, 20, 20);
    ellipse(15, sSnow, 8, 8);
    ellipse(150, sSnow2, 8, 8);
    ellipse(250, sSnow, 8, 8);
    ellipse(350, sSnow2, 8, 8);
    ellipse(450, sSnow, 8, 8);
    ellipse(650, sSnow2, 8, 8);
    ellipse(730, sSnow, 8, 8);
    ellipse(780, sSnow2, 8, 8);
    if (sSnow > 600){
        sSnow = 0;
    }
    sSnow = sSnow + 1;
    if (sSnow2 > 600){
        sSnow2 = 0;
    }
    sSnow2 = sSnow2+1.5;
    //style the text
    stroke("#1e990e");
    fill("#a30b0b");
    textSize(40);
    textFont("Georgia");
    textStyle(ITALIC);
    text ("Happy Holidays!", mouseX, mouseY);
}
//change background from night to day and back to night 
function mousePressed(){
  if (stageColor === "#435191"){
  stageColor = "#528ade";
  } else {
      stageColor = "#435191";
  }
}
