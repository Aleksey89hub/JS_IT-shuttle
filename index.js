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

function checkUser(email,password){
    for(let i=0;i<users.length;i++){
        if(email=== users[i].email&&password===users[i].password){
            renderClients();
            break;
        }else{
            alert("There is no such user ")
        }
    }
}

renderLoginForm();