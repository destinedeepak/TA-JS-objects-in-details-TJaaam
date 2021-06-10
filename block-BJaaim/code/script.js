class Question{
    constructor(title, options=[], correctAnswerIndex){
        this.title = title;
        this.options=options;
        this.correctAnswerIndex = correctAnswerIndex;  
    }
    isCorrect(answerIndex){
        return answerIndex === this.correctAnswerIndex;
    }
    getcorrectAnswerIndex(){
        return this.correctAnswerIndex;
    }
    createUI(){
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="flex">
          <h2>${this.title}</h2>
          <p>Score</p>
          <span>Try</span>
        </div>
        <div class="each-question">
             <input type="radio" id="question0" name="question" value="question1">
             <label for="question0">${this.options[0]}</label>

            <input type="radio" id="question1" name="question" value="question2">
            <label for="question1">${this.options[1]}</label>

            <input type="radio" id="question2" name="question" value="question3">
            <label for="question2">${this.options[2]}</label>

            <input type="radio" id="question3" name="question" value="question4">
            <label for="question3">${this.options[3]}</label>
        </div>
        <button class="submit">submit</button>
        <button class="getCorrectAnswer">Get Correct Answer</button>
        <button class="next">Next</button>`
        return div;
    }
}


class Quiz{
    constructor(root, allQuestions=[]){
        this.root = root;
        this.allQuestions = allQuestions;
        this.activeIndex = 0;
        this.score = 0;
        this.canSubmit =false;
    }
    nextQuestion(){
        if(this.activeIndex < this.allQuestions.length-1){
            console.log(this.activeIndex,"activeIndex");
            console.log(this.allQuestions.length,"length")
            this.activeIndex++;
            this.createUI();
        }    
    }
    submitAnswer(){
        let isTrue = false;
        document.querySelectorAll("input").forEach(ele=>{
           if(ele.checked){isTrue = true}
        })
        console.log(isTrue,"true")
        if(this.canSubmit && isTrue){
            let span = document.querySelector("span");
            document.querySelectorAll("input").forEach(ele =>{
              if(ele.checked){
                  if(this.allQuestions[this.activeIndex].isCorrect(+ele.id.slice(-1))){
                      this.score++;
                      this.updateScore();
                      span.innerText="Correct";
                  }else{
                      span.innerText="False"
                  }
                }
            })
            this.canSubmit = false;
        }
    }

    updateScore(){
        document.querySelector("p").innerText = `Score: ${this.score}`;
    }

    createUI(){
        root.innerHTML =""
        if(this.activeIndex < this.allQuestions.length){
            let ui = this.allQuestions[this.activeIndex].createUI();
            ui.querySelector(".next").addEventListener("click", this.nextQuestion.bind(this));
            ui.querySelector(".submit").addEventListener("click", this.submitAnswer.bind(this));
            root.append(ui);
        }
        document.querySelector(".getCorrectAnswer").addEventListener("click", ()=>{
        document.querySelector(`label[for="question${this.allQuestions[this.activeIndex].getcorrectAnswerIndex()}"]`)
        .style.color= "green";
        document.querySelector(`#question${this.allQuestions[this.activeIndex].getcorrectAnswerIndex()}`).checked=true
        })
        this.canSubmit=true;
        this.updateScore()
    }
}

let question1 = new Question("1. What is the HTML tag under which one can write the JavaScript code?",["javascript","scripted","script","js"], 2);
let question2 = new Question("2. Which of the following is the correct syntax to display 'Hello' in an alert box using JavaScript?",["alertbox(Hello)","msg(Hello)","msgbox(Hello)","alert(Hello)"], 3);
let question3 = new Question("3. What is the correct syntax for referring to an external script called 'Hello'?",["script src='Hello'"," script href='Hello'","script ref='Hello'"," script name='Hello'"], 2);
let question4 = new Question("4. Which of the following is not a reserved word in JavaScript?",["interface","throws","program","short"], 2);
let question5 = new Question("5. Where is the capital of Canada?",["Washington, D.C.4","Moscow","Canberra","Ottawa"], 3);

let root = document.querySelector(".root");
let quizInstance = new Quiz(root, [question1, question2, question3, question4, question5]);
quizInstance.createUI()
