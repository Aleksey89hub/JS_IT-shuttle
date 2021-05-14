const main =document.querySelector('main');
const users = JSON.parse(localStorage.getItem("users")) || [];

function renderLoginForm (){
    const form = `<form id="wrapper">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" class="textInput" placeholder="email">
    <label for="password">Password</label>
    <input type="password" name="password" id="password" class="textInput" placeholder="password">
    <div class="submit-wrapper">
        <input type="submit" value="submit" class="submit-btn">
        <button class="go-to-reg">registration</button>
    </div>
</form>`;
main.innerHTML =form;
handleLoginForm();
}

function renderRegistrationForm(){
    const form =`<div id="wrapper">
    <form method="POST " name ="vform" >
         <div>
             <input type="text" name="username" class="textInput" placeholder="Username" >
             <div id="name_error" class="val_error"> </div>
         </div> 
         <div>
             <input type="email" name="email" class="textInput" placeholder="Email" >
             <div id="email_error" class="val_error"> </div>
         </div> 
         <div>
             <input type="password" name="password" class="textInput" placeholder="Password" >
         </div> 
         <div>
             <input type="password" name="password_confirmation" class="textInput" placeholder="Password confirmation" >
             <div id="password_error" class="val_error"> </div>
         </div> 
         <div>
             <input type="submit" value="Register" class="btn" name="register">
         </div> 
     </form>
     </div>
    </form>
 </div>`;
 main.innerHTML =form;
handleReistration();
}



function handleLoginForm(){
    const [emailInput, passwordInput,submitBtn] = [...document.querySelectorAll('input')];
    const regBtn =document.querySelector(".go-to-reg");
    submitBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        validateForm(emailInput, passwordInput);
    });
    regBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        renderRegistrationForm();
    });
}

function handleReistration(){
    const username =document.forms["vform"]["username"];
    const email =document.forms["vform"]["email"];
    const password =document.forms["vform"]["password"];
    const password_confirmation =document.forms["vform"]["password_confirmation"];

    const registerBrn = document.querySelector('.btn');
    registerBrn.addEventListener('click', ev =>{
        ev.preventDefault();
    });
    username.addEventListener("blur",nameVerify.bind(this, username),true);
    email.addEventListener("blur",emailVerify.bind(this, email),true);
    password.addEventListener("blur",passwordVerify.bind(this, password),true);
    registerBrn.addEventListener('click', Validate.bind(this, username, email, password, password_confirmation));
}

function Validate(username, email, password, password_confirmation){
    const name_error =document.getElementById("name_error");
    const email_error =document.getElementById("email_error");
    const password_error =document.getElementById("password_error");
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

function nameVerify (username){
    const name_error =document.getElementById("name_error");
    if(username.value !== ""){
        username.style.border="1px solid green";
        name_error.innerHTML =" "
        return true;
    } else {
        username.style.border="1px solid red";
        name_error.textContent="Username is required";
        // username.focus();
        return false;
    }
}
function emailVerify (email){
    const email_error =document.getElementById("email_error");
    const regExp = /\w+\@\w+\.\w+/g;
    const emailCondition = email.value.match(regExp);
    if(emailCondition){
        email.style.border="1px solid green";
        email_error.innerHTML =""
        return true;
    } else {
        email.style.border="1px solid red";
        email_error.textContent="Email is required";
        // email.focus();
        return false;
    }
}
function passwordVerify (password){
    const password_error =document.getElementById("password_error");
    if(password.value !== ""){
        password.style.border="1px solid green";
        password_error.innerHTML =""
        return true;
    } else {
        password.style.border="1px solid red";
        password_error.textContent="password is required";
        // password.focus();
        return false;
    }
}





function validateInput(input, condition){
    if(condition){
        input.classList.add("error-value");
        return false;
    }else{
        input.classList.remove("error-value");
        return true;
    }
}

function validateForm(emailInput, passwordInput) {
    const regExp = /\w+\@\w+\.\w+/g;
    const emailCondition = !emailInput.value.match(regExp);
    const passwordCondition = !passwordInput.value.length ? true : false;
    if(validateInput(emailInput, emailCondition) && validateInput(passwordInput, passwordCondition)){
        checkUser(emailInput.value, passwordInput.value);
    }
}

function checkUser(email, password){
    const userExist = users.find(user => email === user.email && password === user.password);
    userExist ? renderClients() : alert("There is no such user");
}


renderLoginForm();