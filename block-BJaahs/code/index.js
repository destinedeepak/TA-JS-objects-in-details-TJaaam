// Without Object 
let title = question1;
let options = ["a","b","c","d"];
let correctAnswerIndex = 3;

function isAnswerCorrect(index){
    return index === correctAnswerIndex;
}

function getCorrectAnswer(){
    return options[correctAnswerIndex]
}

// Organize using object 
let obj = {
    title: "question1",
    options: ["a","b","c","d"],
    correctAnswerIndex : 3,
    isAnswerCorrect : function(index){
        return index === correctAnswerIndex;
    },
    getCorrectAnswer : function (){
        return obj.options[obj.correctAnswerIndex]
    }
}

// Use a function to create object 

function createQuiz(title, options, correctAnswerIndex){
    let obj = {};
    obj.title = title;
    obj.options = options;
    obj.correctAnswerIndex = correctAnswerIndex;

    obj.isAnswerCorrect = function (index){
        return index === correctAnswerIndex;
    }

    obj.getCorrectAnswer = function (){
        return obj.options[obj.correctAnswerIndex]
    }

    return obj;
}

// Convert the function to use `this` keyword 

function createQuiz(title, options, correctAnswerIndex){
    let obj = {};
    obj.title = title;
    obj.options = options;
    obj.correctAnswerIndex = correctAnswerIndex;

    obj.isAnswerCorrect = function (index){
        return index === this.correctAnswerIndex;
    }

    obj.getCorrectAnswer = function (){
        return this.options[this.correctAnswerIndex]
    }

    return obj;
}

