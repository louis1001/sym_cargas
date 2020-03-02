let field
function setup() {
  createCanvas(400, 400)
  field = new ParticleField()
  
  let a = field.addCharge('a',
		new Charge(
			3e-6,
			createVector((width/2)+100, height/2),
			true
		)
	)

  let b = field.addCharge('b',
		new Charge(
			3e-6,
			createVector((width/2)-100, height/2),
			false
		)
	)

  a.vel = createVector(-0.3,0.3)
  b.vel = createVector(0.3, -0.3)

  background(0)
}

function draw() {
  background(0, 1)
  
  /*fill(random()*255)
  rect(width/2, height/2, 10, 10)*/
  
  field.draw()
  field.update()

  /*charges.forEach(x=>x.draw())
  charges.forEach(x=>x.update())*/
}

function mousePressed() {
	field.addCharge(random(['a', 'b']),
		new Charge(
			3e-6,
			createVector(mouseX, mouseY),
			random([true, false])
		)
	)
}
