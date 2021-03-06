var white,black,red,blue,green;

function setup() {
  //size of the canvas to draw on
  createCanvas(innerWidth, innerHeight);

  // Set the background to white, and move the line to setup();
  background("white");
  
  header();
}


function draw() {
  
  white = new ColorBox(0, 50, 50, 50, "white");
  white.appear();
  black = new ColorBox(0, 100, 50, 50, "black");
  black.appear();
  red = new ColorBox(0, 150, 50, 50, "red");
  red.appear();
  blue = new ColorBox(0, 200, 50, 50, "blue");
  blue.appear();
  green = new ColorBox(0, 250, 50, 50, "green");
  green.appear();
    
}

//display instruction
function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}
    

