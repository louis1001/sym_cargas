class ParticleField {
	constructor(initials = {}) {
		this.charges = initials
	}
	
	addCharge(name, chr) {
		this.charges[name] = chr
		
		return chr
	}
	
	calculateForce(name) {
		const mainCharge = this.charges[name]
		
		if (!mainCharge) return -1

		this.everyCharge((other_charge, n) => {
		  if (n == name) return
		  
		  const attracting = mainCharge.sign == other_charge.sign
		  
		  let dir = p5.Vector.sub(
				other_charge.pos,
				mainCharge.pos
			)

			if (attracting) dir.mult(-1)
			let r = dir.mag()

			let Fmag = generic_functions.coulomb(
				mainCharge.mag,
				other_charge.mag,
				r
			)
			
			//console.log("Fmag: ", Fmag)

			const F = dir.normalize().mult(Fmag*1000)
			mainCharge.applyForce(F)
		})

	}
	
	everyCharge(callback) {
	  for(let n of Object.keys(this.charges)) {
	    const charge = this.charges[n]
	    callback(charge, n)
	  }
	}
	
	draw() {
	  this.everyCharge((x)=> x.draw())
	}
	
	update() {
	  this.everyCharge((x, n)=>this.calculateForce(n))
	  this.everyCharge((x)=> x.update())
  }
}
