const form = document.querySelector(".js-form-greeting");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const renameBtn = document.querySelector('.renameBtn');

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}!`
}
function handleSumbit(){
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    saveName(currentValue);
    paintGreeting(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSumbit);
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function reset() {
    localStorage.removeItem(USER_LS);
    window.location.reload();
}

function renameEvent() {
    renameBtn.addEventListener('click', reset);
}

function init(){
    loadName();
    renameEvent();
}

init();