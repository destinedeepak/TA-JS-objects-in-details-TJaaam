### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
- Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
- Create using class
- Write test by creating two objects also test both methods.

### To test use the following data

You can use the data given below. You will also have to change the name of the function while calling them.


<!-- Prototypal pattern  -->
```js
let quizMethods = {
  isAnswerCorrect : function(index){
    return this.correctAnswerIndex === index
  },
  getCorrectAnswer : function(){
    return this.options[this.correctAnswerIndex]
  }
}

function createQuestion(title, options, correctAnswerIndex){
  let question = Object.create(quizMethods);
  question.title = title;
  question.options = options;
  question.correctAnswerIndex =  correctAnswerIndex;
  return question;
}

let ques1 = createQuestion("Where is the capital of Jordan", ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
let ques2 = createQuestion( 'Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston','Nairobi'], 2)
```

<!-- Pseudoclassical Pattern  -->
```js
function CreateQuestion(title, options, correctAnswerIndex){
  this.title = title;
  this.options = options;
  this.correctAnswerIndex =  correctAnswerIndex;
}

CreateQuestion.prototype = {
    isAnswerCorrect(index){
    return this.correctAnswerIndex === index
  },
  getCorrectAnswer(){
    return this.options[this.correctAnswerIndex]
  }
}

let ques1 = new CreateQuestion("Where is the capital of Jordan", ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
```
<!-- class pattern  -->
```js
class quiz {
  constructor(title, options, correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex =  correctAnswerIndex;
  }
  isAnswerCorrect(index){
    return this.correctAnswerIndex === index
  }
  getCorrectAnswer(){
    return this.options[this.correctAnswerIndex]
  }

}

let ques1 = new quiz("Where is the capital of Jordan", ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
```
```js
let firstQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);
```
