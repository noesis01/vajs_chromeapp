const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

function onLoginSubmit(event) {
    const HIDDEN_CLASSNAME = "hidden";
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

loginForm.addEventListener("submit", onLoginSubmit);