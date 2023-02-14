function Olive() {
  // starting point
  this.y = height/2;
  this.x = 65;
  
  // rate & speed of olive
  this.gravity = 0.7;
  this.lift = -15;
  this.velocity = 0;
  
  // colour & shape of olive
  this.show = function() {
    stroke(0);
    strokeWeight(1);
    fill(112, 130, 56);
    ellipse(this.x, this.y, 35, 45);
    fill(253,94,83);
    ellipse(this.x, this.y-14, 10, 5);
  }
  
  // olive mobility
  this.up = function() {
    this.velocity += this.lift;
   }
  
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    
    this.y < height;
    
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
    
  }
}