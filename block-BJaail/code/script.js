let a;
class todoList{
    constructor(root,list=[]){
        this.list = list;
        this.root = root;
    }
    add(text){
        console.log();
        let todoInstance = new todo();
        todoInstance.text = text;

        this.list.push(todoInstance);
        this.createUI()
    }
    handleDelete(){
        console.log("HI")
        console.log(event.target,"Hii")

    }
    createUI(){
        this.root.innerHTML = ""
        this.list.forEach(ele=>{
            a = ele.createUI().querySelector("button");
            console.log(a)
            a.addEventListener('click',this.handleDelete.bind(ele))
            root.append(ele.createUI());
        })
    }
}

class todo{
    constructor(text){
        this.text = text;
        this.isCompleted = false;
        this.id = Date.now();
    }

    // handleChange(event){
    //     console.log(event.target.id)
    //     console.log(todoListInstance)
    // }

    createUI(){
    let li = document.createElement("li");
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = this.isCompleted;
    // checkbox.addEventListener('change', this.handleChange);

    let span = document.createElement('span')
    span.innerText = this.text;
    span.classList.add('todo-name') 

    let button = document.createElement('button')
    button.innerText ='X';
    button.id = this.id;
    button.classList.add('cross-btn');
    // button.addEventListener('click',this.handleChange.bind(this))
    li.append(checkbox,span,button)
    return li;
    }
}

let root = document.querySelector("ul")
let input= document.querySelector("input");

let todoListInstance =new todoList(root);
input.addEventListener("keyup",(event)=>{
    if(event.keyCode === 13 && event.target.value){
        todoListInstance.add(event.target.value);
        event.target.value = ""
    }
})