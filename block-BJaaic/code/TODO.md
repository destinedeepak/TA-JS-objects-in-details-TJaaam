# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`


```js
let animalMethods = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        console.log(`new location is ${this.location}`);
    },
    summary: function(){
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    }
}

let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        this.name = newName
    }
}

Object.setPrototypeOf(dogMethods, animalMethods);

let catMethods = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEyes = newColor
    }
}

Object.setPrototypeOf(catMethods, dogMethods);

function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;

    return animal
}

function createDog(name, color,location, numberOfLegs){
   let dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    dog.location = location;
    dog.numberOfLegs = numberOfLegs;

    return dog;
}

function createCat(name, color,location, numberOfLegs,colorOfEyes){
   let cat = Object.create(catMethods);
    cat.name = name;
    cat.color = color;
    cat.location = location;
    cat.numberOfLegs = numberOfLegs;
    cat.colorOfEyes= colorOfEyes;

    return cat;
}
```