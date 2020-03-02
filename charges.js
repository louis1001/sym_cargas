class Charge {
  constructor(mag = 0, pos=createVector(), sign=true) {
    this.mag = mag
    this.pos = pos
    this.sign = sign
    
    this.vel = createVector()
    this.acc = createVector()
  }

	draw() {
	  push()
	  stroke(255)
	  noFill()
	  ellipse(this.pos.x, this.pos.y, 30, 30)
	  
	  textAlign(CENTER, CENTER)
	  textSize(20)
	  text(this.sign ? '+' : '-', this.pos.x, this.pos.y)
	  
	  const p0 = this.pos
	  
	  line(p0.x, p0.y, p0.x + this.acc.x*30, p0.y + this.acc.y*30)
	  pop()
	}

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }
  
  applyForce(f) {
    this.acc.add(f)
  }
}
