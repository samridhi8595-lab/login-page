const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");
const login = document.getElementById("login");
const signup = document.getElementById("sign-up"); 

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye open.png";
    }
    else{
        password.type = "password";
        eyeicon.src="eye close.png";
    }
}
login.onclick = function(){
    alert("Successfully login");
}
signup.onclick = function(){
    alert("successfully Sign up");
}