// Pseudoclassical Pattern 
function CreateAnimal(location,numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation){
        this.location = location;
    },
    summary : function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

function CreateDog(name,color,location,numberOfLegs){
    CreateAnimal.call(this,location,numberOfLegs)//doubt
    this.name = name;
    this.color = color;
}

CreateDog.prototype = {
    bark : function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeColor: function(newColor){
        this.color = newColor;
    }
}

Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype)

function CreateCat(name,color,location,numberOfLegs,colorOfEyes){
    CreateDog.call(this, name,color,location,numberOfLegs)//doubt
    this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
    meow : function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEyes = newColor;
    }
}

Object.setPrototypeOf(CreateCat.prototype, CreateDog.prototype)


// Class Pattern 

class Animal {
    constructor(location,numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation){
        this.location = location;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

class Dog extends Animal {
    constructor(name,color,location,numberOfLegs){
        super(location,numberOfLegs);
        this.name = name;
        this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeColor(newColor){
        this.color = newColor;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

class Cat extends Dog {
    constructor(name,color,location,numberOfLegs,colorOfEyes){
        super(name,color,location,numberOfLegs);
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
    }
}