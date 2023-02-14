var olive;
var skewers = [];
var score = 0;
var mic;
var sliderTop;
var sliderBottom;
var ahh = false;

function setup() {
  createCanvas(400, 600);
  mic = new p5.AudioIn();
  mic.start();
  
  olive = new Olive();
  martini = new Martini();
  skewers.push(new Skewer());
  
  sliderTop = createSlider(0,1,0.095,0.01);
  sliderBottom = createSlider(0,1,0.07,0.01);
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  olive.update();
  olive.show();
  martini.show();
  
  if (frameCount % 120 == 0){
    skewers.push(new Skewer());
  }
  
  for (var i = skewers.length-1; i>=0; i--){
    skewers[i].show();
    skewers[i].update();
    
    if (skewers[i].hits(olive)){
      alert("Game over");
    } else {
      text("Safe Olives: " + score, 260, 28);
      textSize(18);
    }
    
    if (skewers[i].offscreen()){
      skewers.splice(i,1);
    }
    
    if (vol>thresholdTop && !ahh){
      olive.up();
      ahh = true;
    }
    
    if (vol < thresholdBottom){
      ahh = false;
    }
    
    fill(0, 255,0);
    noStroke();
    var y = map(vol, 0, 1, height, 0);
    rect(width-50, y, 50, height-y);
    
    var thresholdTop = sliderTop.value();
    var thresholdBottom = sliderBottom.value();
    
    var ty = map(thresholdTop, 0, 1, height, 0);
    stroke(255,0,0);
    strokeWeight(4);
    line(width-50, ty, width, ty);
    
    var by = map(thresholdBottom, 0, 1, height, 0);
    stroke(0,0,255);
    strokeWeight(4);
    line(width-50, by, width, by);
  }
}

function keyPressed() {
  if (key == ' ') {
    olive.up();
  }
}
