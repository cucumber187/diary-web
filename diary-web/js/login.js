const login = document.querySelector(".login-name");
const nameText = document.querySelector(".name-text");
const submitButton = document.querySelector(".login-submit");
const loginForm = document.querySelector(".login-form");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function paintName(){
    const saveName = localStorage.getItem(USERNAME_KEY);
    login.innerText = `Hi ${saveName}`;
    loginForm.classList.add(HIDDEN_CLASS);
}

function nameChange(event){
    event.preventDefault();
    const newName = nameText.value;
    localStorage.setItem(USERNAME_KEY, newName);
    paintName();
    nameText.value = "";
}

const saveName = localStorage.getItem(USERNAME_KEY);

if(saveName === null){
    loginForm.addEventListener("submit", nameChange);
    loginForm.classList.remove(HIDDEN_CLASS);
}

else{
    paintName();
}