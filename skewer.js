function Skewer() {
  
  var spacing = random(95, height/2);
  var centery = random(spacing, height - spacing);
  
  this.top = centery - spacing/2;
  this.bottom = height - (centery + spacing/2);
  this.x = width;
  this.w = 10;
  this.speed = 2;
  
  // turns red when hit by olive
  this.hits = function(olive){
    if (olive.y-22.5 < this.top || 
        olive.y+22.5 > height - this.bottom){
      if (olive.x+17.5 > this.x &&
          olive.x-17.5 < this.x + this.w){
        this.highlight = true;
        return true;
    }
    }
    this.highlight = false;
    return false;
  }
  
 
  
  
  // skewer shape
  this.show = function() {
    stroke(0);
    strokeWeight(1);
    fill(186, 140, 99);
    if (this.highlight){
      fill(255,0,0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w,
         this.bottom)
  }
  
  this.update = function() {
    this.x -= this.speed;
  }
  
  this.offscreen = function(){
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
    }
  
}