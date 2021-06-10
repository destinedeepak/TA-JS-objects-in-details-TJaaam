let a;
class todoList{
    constructor(root,list=[]){
        this.list = list;
        this.root = root;
    }
    add(text){
        let todoInstance = new todo(text);
        this.list.push(todoInstance);
        this.createUI()
    }
    handleDelete(id){
        let index = this.list.findIndex(item=> item.id===id)
        this.list.splice(index, 1)
        this.createUI();
    }
    createUI(){
        this.root.innerHTML = ""
        this.list.forEach(ele=>{
            // let button = ele.createUI().querySelector("button");
            // button.addEventListener('click', this.handleDelete.bind(this))
            let li = ele.createUI();
            li.querySelector("button").addEventListener("click",this.handleDelete.bind(this, ele.id));
            this.root.append(li);
        })
    }
}

class todo{
    constructor(text){
        this.text = text;
        this.isCompleted = false;
        this.id = Date.now();
    }

    handleChange(event){
       this.isCompleted = !this.isCompleted;
       this.createUI()
    }

    createUI(){
    let li = document.createElement("li");
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = this.isCompleted;
    checkbox.addEventListener('change', this.handleChange.bind(this));

    let span = document.createElement('span')
    span.innerText = this.text;
    span.classList.add('todo-name') 

    let button = document.createElement('button')
    button.innerText ='X';
    button.id = this.id;
    button.classList.add('cross-btn');
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