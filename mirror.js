// capture reference and flipped example
      
let capture;

function setup() {
  createCanvas(windowWidth, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  imageMode(CENTER);
  capture.hide();
}

function draw() {  
  push();
  translate(width/2,height/1.5);
  scale(-1, 1);
  image(capture, 0, 0, 640, 480);
  pop();
}
