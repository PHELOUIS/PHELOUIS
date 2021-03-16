var maze
var iW1
var iW2
var iW3
var iW4
var hsW1
var hsW2
var hsW3
var hsW4
var hsW5
var hsW6
var hsW6
var hswW7
var hsW8
var hsW9
var hsW10
var hsW11
var hsW12
var hsW13
var hsW14
var hsW15
var hsW16
var hsW17
var hsW18
var hsW19
var hsW20
var hsW21
var hsw22
var Wall
var player

var vrW1,vrW2,vrW3,vrW4,vrW5,vrW6,vrW7,vrW8,vrW9,vrW10,vrW11,vrW12,vrW13,vrW14,vrW15,vrW16,vrW17,vrW18,vrW19,vrW20,vrW21






function preload(){

maze = loadImage('Maze.jpg'); 



}


function setup() {
  createCanvas(800,800);
 iW1 = createSprite(65,370, 5, 600);
 iW2 = createSprite(400,65,6000,5);
 iW3 = createSprite(736,210,5,385);
 iW4 = createSprite(736,605,5,280);
 iW5 = createSprite(65,735,6000,5);
 hsW1 = createSprite(165,132,70,5);
 hsW2 = createSprite(505,132,200,5);
 hsW3 = createSprite(132,200,130,5);
 hsW4 = createSprite(435,200,200,5);
 hsW5 = createSprite(200,335,140,5);
 hsW6 = createSprite(430,335,70,5);
 hsW7 = createSprite(630,335,70,5);
 hsW8 = createSprite(98,400,70,5);
 hsW9 = createSprite(300,400,200,5);
 hsW10 = createSprite(565,400,200,5);
 hsW11 = createSprite(235,466,200,5);
 hsW12 = createSprite(435,470,70,5);
 hsW13 = createSprite(128,535,150,5);
 hsW14 = createSprite(300,535,75,5);
 hsW15 = createSprite(500,535,75,5);
 hsW16 = createSprite(670,535,130,5);
 hsW17 = createSprite(265,600,270,5);
 hsW18 = createSprite(632,600,65,5);
 hsW19 = createSprite(99,670,70,5);
 hsW20 = createSprite(233,670,70,5);
 hsW21 = createSprite(635,670,200,5);
 hsW22 = createSprite(300,268,200,5);

 vrW1 = createSprite(200,700,5,70);
 vrW2 = createSprite(333,700,5,70);
 vrW3 = createSprite(467,665,5,130);
 vrW4 = createSprite(133,635,5,70);
 vrW5 = createSprite(400,570,5,200);
 vrW6 = createSprite(535,600,5,130);
 vrW7 = createSprite(603,532,5,130);
 vrW8 = createSprite(335,500,5,70);
 vrW9 = createSprite(135,432,5,70);
 vrW10 = createSprite(470,435,5,70);
 vrW11 = createSprite(535,335,5,265);
 vrW12 = createSprite(267,370,5,70);
 vrW13 = createSprite(400,370,5,70);
 vrW14 = createSprite(668,300,5,340);
 vrW15 = createSprite(135,270,5,130);
 vrW16 = createSprite(335,300,5,70);
 vrW17 = createSprite(200,165,5,70);
 vrW18 = createSprite(334,168,5,70);
 vrW19 = createSprite(270,170,5,200);
 vrW20 = createSprite(470,232,5,70);
 vrW21 = createSprite(605,164,5,200)
 
 Wall = createSprite(66,700,5,70);
 Wall.shapeColor = "black";
}

function draw() {
  background(maze);  
  drawSprites();

  text(mouseX+","+mouseY,mouseX,mouseY);

 for (var i=1 ; i<=21 ; i++){

 (vrW + i).visible = false

 }
 

}