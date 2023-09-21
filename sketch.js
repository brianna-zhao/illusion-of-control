let x=20;
let y=20;
let d=20;
let vy=0;
let vx=0;
let r, g, b;
function setup() {
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  frameRate(50);
  createCanvas(500, 500);
}

function draw() {
  fill(r, g, b);

 vy=vy+0.5;
 vx=vx+0.01; 
  y=y+vy;
  x=x+vx; 
  background(255,50);
  circle(x, y, d);

  if (y >= 500) {
    fill(r, g, b);
    y = 480; 
    vy = vy*-1;
    vx=vx*2;
  if(x>=500){
    y=480;
    setTimeout(10);
    x=-10;
    vx=vy=0;
  }
  }  
  
}