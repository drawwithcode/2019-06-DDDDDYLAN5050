// gui params
var fillColor = [220, 220, 220];
var fontSize = 50;
var x1 = 0,
  x2 = 0,
  x3 = 0,
  x4 = 0;
// gui
var visible = true;
var gui;

// dynamic parameters
var fontSizeMax = 50;
var fontSizeMin = 9;
var x1Min = -10,
  x2Min = -10,
  x3Min = -10,
  x4Min = -10;
var x1Max = 10,
  x2Max = 10,
  x3Max = 10,
  x4Max = 10;
var x1Step = 0.01,
  x2Step = 0.01,
  x3Step = 0.01,
  x4Step = 0.01;
var p0, p1, p2, p3, p4, p5;
var btn;
var s1=0, s2=0, s3=0, s4=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT);
  textSize(15);
  fill(220);
  text("Use the sliders to KERN", 20, height / 2.25);
  s1 = random(-8, 8);
  s2 = random(-8, 8);
  s3 = random(-8, 8);
  s4 = random(-8, 8);

  // Create Layout GUI
  gui = createGui('KERNING Sliders');
  gui.addGlobals('x1', 'x2', 'x3', 'x4');

  p0 = createElement('p', 'K');
  p1 = createElement('p', 'e');
  p2 = createElement('p', 'r');
  p3 = createElement('p', 'n');
  p4 = createElement('p', 'i');
  p5 = createElement('p', 'ng');

  btn = createButton('Finish!');
  btn.mouseClicked(score);
}

function draw() {
  // fill(fillColor);
  // ellipse(mouseX, mouseY, radius);
  p0.position(100 - 80.338, height / 4);
  p1.position(100 - 48.304 + x1 + s1, height / 4);
  p2.position(100 - 21.316 + x2 + s2, height / 4);
  p3.position(100 - 4.071 + x3 + s3, height / 4);
  p4.position(100 + 23.104 + x4 + s4, height / 4);
  p5.position(100 + 33.229, height / 4);
  btn.position(20, height / 2);
  select('body').style('font-size', fontSize + 'px');
  select('body').style('font-family', 'Arial');
  select('body').style('color', '#eeeeee');
  select('body').style('background-color','#0064f0');
}

function score() {
  clear();
  gui.hide()
  console.log(x1, s1, x2, s2, x3, s3, x4, s4);
  text("Your Score: " + String(constrain(ceil(105 - 3 * (abs(x1 + s1) + abs(x2 + s2) + abs(x3 + s3) + abs(x4 + s4))),0,100)) + "/100", 20, height / 2.25);
  text("e: "+String(ceil((x1+s1)*100)/100)+"px"+"    r: "+String(ceil((x2+s2)*100)/100)+"px"+"    n: "+String(ceil((x3+s3)*100)/100)+"px"+"    i: "+String(ceil((x4+s4)*100)/100)+"px",20,height/2.25+20);
  btn.hide();
  var btn2 = createButton('Restart');
  btn2.mouseClicked(re);
  btn2.position(20, height / 2);

 stroke(200);
 strokeWeight(1);
  line(53.796,0,53.796,height/2.5);
  line(81.684,0,81.684,height/2.5);
  line(98.929,0,98.929,height/2.5);
  line(126.104,0,126.104,height/2.5);
}

function re() {
  location.reload();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
