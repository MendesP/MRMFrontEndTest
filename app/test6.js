class Greeting {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    throw new Error('I don\'t know how to speak!')
  }
}

// Add your new classes here
export class English extends Greeting {
	sayHello(){
		return ("Hello "+this.name);
	}
}

export class French extends Greeting {
	sayHello(){
		return ("Bonjour "+this.name);
	}
}

export class Spanish extends Greeting {
	sayHello(){
		return ("Hola "+this.name);
	}
}
