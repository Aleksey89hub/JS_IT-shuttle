var username =document.forms["vform"]["username"];
var email =document.forms["vform"]["email"];
var password =document.forms["vform"]["password"];
var password_confirmation =document.forms["vform"]["password_confirmation"];

var name_error =document.getElementById("name_error");
var email_error =document.getElementById("email_error");
var password_error =document.getElementById("password_error");

const registerBrn = document.querySelector('.btn');

username.addEventListener("blur",nameVerify,true);
email.addEventListener("blur",emailVerify,true);
password.addEventListener("blur",passwordVerify,true);

registerBrn.addEventListener('click', Validate);

function Validate(event){
    event.preventDefault();
    if(username.value ==""){
        username.style.border="1px solid red";
        name_error.textContent="Username is required";
        username.focus();
        return false;
    }
    if(email.value ==""){
        email.style.border="1px solid red";
        email_error.textContent="Email is required";
        email.focus();
        return false;
    }
    if(password.value ==""){
        password.style.border="1px solid red";
        password_error.textContent="password is required";
        password.focus();
        return false;
    }
    if(password.value!=password_confirmation.value){
        password.style.border ="1px solid red";
        password_confirmation.style.border ="1px solid red";
        password_error.innerHTML="The two password do not match"
        return false;
    }
    const user = {
        name: username.value,
        email:email.value,
        password:password.value,
    };
    users.push(user);
    document.forms[0].reset();
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
}

function nameVerify (){
    if(username.value !=" "){
        username.style.border="1 px solid green";
        name_error.innerHTML =" "
        return true;
    } else {
        username.style.border="1px solid red";
        name_error.textContent="Username is required";
        username.focus();
        return false;
    }
}
function emailVerify (){
    if(email.value !=" "){
        email.style.border="1 px solid green";
        email_error.innerHTML =""
        return true;
    } else {
        email.style.border="1px solid red";
        email_error.textContent="Email is required";
        email.focus();
        return false;
    }
}
function passwordVerify (){
    if(password.value !=" "){
        password.style.border="1 px solid green";
        password_error.innerHTML =""
        return true;
    } else {
        password.style.border="1px solid red";
        password_error.textContent="password is required";
        password.focus();
        return false;
    }
}
/* function passwordConfirmationVerify() {
    if(password.value!==password_confirmation.value){
        password_confirmation.style.border ="1px solid red";
        password_error.innerHTML="The two password do not match";
        password_confirmation.focus();
        return false;
    } else {
        password_confirmation.style.border="1px solid green";
        password_error.innerHTML ="";
        return true;
    }
} */
