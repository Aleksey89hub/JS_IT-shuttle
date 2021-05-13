/* function input() {
    console.log("input was activated");
}

function btn() {
    console.log("button was clicked");
}

function handler(callback, e) {
    console.log("smth happens");
    callback(e);
}

let input1 = document.getElementById("text");


input1.onclick = (e) => handler(input, e);
button1.onchange = (e) => handler(btn, e);


let xhr = new XMLHttpRequest();

xhr.send();

 */
let button1 = document.getElementById("button");
button1.onclick = () => loadDoc();


function loadDoc(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",false); 
    xhr.send()
    if(/* this.readystate==4&& this.status==200 */ true){
        document.getElementById("example").innerHTML=xhr.responseText;
    }

   
}




