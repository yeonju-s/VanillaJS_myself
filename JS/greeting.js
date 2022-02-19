const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const hello = document.querySelector("h1");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function submitName(event){
    event.preventDefault(); 
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
}

function paintGreetings(){
    const getUsername = localStorage.getItem(USERNAME_KEY);
        hello.innerText = `Hello, ${getUsername} !`;
        hello.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginBtn.addEventListener('click',submitName);
}else{
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings();
}