# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
<!-- factory method  -->
```js
function createUser(name, id, noOfProjects){
  let obj = {};

  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;

  obj.getProjects = function(){
    return noOfProjects;
  }
  obj.changeName = function(newName){
    let oldName = obj.name;
    obj.name = newName;
    return oldName;
  } 
  obj.incrementProject = function(number){
    obj.noOfProjects = obj.noOfProjects + number ;
    return obj.noOfProjects
  }
    obj.decrementProject = function(number){
    obj.noOfProjects = obj.noOfProjects - number ;
    return obj.noOfProjects
  }

  return obj;
}
let user1 = createUser("khfhka",1,54);
let user2 = createUser("khfhaaka",41,544);
```
<!-- prototypal pattern  -->


```js
let userMethods = {
  getProjects(){
    return noOfProjects;
  },
  changeName(newName){
    let oldName = this.name;
    this.name = newName;
    return oldName;
  },
  incrementProject(number){
    this.noOfProjects = this.noOfProjects + number ;
    return this.noOfProjects
  },
  decrementProject(number){
    this.noOfProjects = this.noOfProjects - number ;
    return this.noOfProjects
  }
}

function createUser(name, id, noOfProjects){
  let obj = Object.create(userMethods);

  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;

  return obj;
}

let user1 = createUser("khfhka",1,54);
let user2 = createUser("khfhaaka",41,544);
```

<!-- Pseudoclassical   pattern-->

```js 
function CreateUser(name, id, noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
  getProjects(){
    return noOfProjects;
  },
  changeName(newName){
    let oldName = this.name;
    this.name = newName;
    return oldName;
  },
  incrementProject(number){
    this.noOfProjects = this.noOfProjects + number ;
    return this.noOfProjects
  },
  decrementProject(number){
    this.noOfProjects = this.noOfProjects - number ;
    return this.noOfProjects
  }
}

let user1 =new createUser("afaf",56,4);
let user2 =new createUser("afaf",56,4);
```
<!-- class pattern  -->
```js
class projects{
  constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects(){
    return noOfProjects;
  }
  changeName(newName){
    let oldName = this.name;
    this.name = newName;
    return oldName;
  }
  incrementProject(number){
    this.noOfProjects = this.noOfProjects + number ;
    return this.noOfProjects
  }
  decrementProject(number){
    this.noOfProjects = this.noOfProjects - number ;
    return this.noOfProjects
  }
}

let user1 =new createUser("afaf",56,4)
let user2 =new createUser("awtwtfaf",565,544)
```
