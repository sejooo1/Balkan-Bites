const logInButton = document.getElementById('loginButton');
const signInButton = document.getElementById('singInButton');
const cancelButton=document.getElementById('cancel');
      
logInButton.addEventListener("click", goToLoginForm);
signInButton.addEventListener("click", goToSignForm);
cancelButton.addEventListener("click", backToHome)

function goToLoginForm(){
    window.location.href="login.html";
}

function goToSignForm(){
    window.location.href="sign.html";
}

function backToHome(){
    window.location.href="index.html";
}
    