const toDoForm = document.querySelector(".form-toDo");
const toDoinput = document.querySelector(".js-toDoinput");
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length;
    delbtn.innerText ='';
    delbtn.addEventListener('click', removeList);
    delbtn.addEventListener('mouseover', () => {
        delbtn.innerText = 'X'
    });
    delbtn.addEventListener('mouseout', () => {
        delbtn.innerText = ''
    });
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj= {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
    }

function removeList(event) {
    // delete target list & LS data
    const btn = event.target;
    const li = btn.parentNode;
    const index = parseInt(li.id);
    toDoList.removeChild(li);
    toDos.splice(index, 1);
    
    // change list & LS id
    const listsArr = [].slice.call(toDoList.getElementsByTagName('li'));

    listsArr.map((li) => {
        const id = parseInt(li.id);
        if(id > index) {
            return li.id--;
        }
    })
    
    toDos.forEach((obj) => {
        if(obj.id > index) {
            return obj.id--;
        }
    })
    
    saveToDos();
}

function loadToDos(){
        const laodedToDos = localStorage.getItem(TODOS_LS);
        if(laodedToDos !== null){
            const parsedToDos = JSON.parse(laodedToDos);
            parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
            // console.log(toDo.text);
            });
        }
    }
    

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();