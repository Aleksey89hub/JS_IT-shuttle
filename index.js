"use strict";



function fibo (number ) {
    if (number <= 1) {
        return number;
    }
    return fibo(number - 1) + fibo(number - 2);
}
console.log(fibo(8));

    
function checkNumberDivision (min,max){
    if(max%min==0){
        return console.log(`${max} and ${min} are divided without remainder `)
    }
    return console.log(`${max} and ${min} are divided with remainder `)
    
}

checkNumberDivision(10,20);



let result = prompt('What is your password');
function passwordValifation(){
let rightPassword ="belarus";
if(result==rightPassword){
return alert("The password is correct");
}else if(result==null || result==""){
    return alert(" The password validation  was cancelled");
}else{
    alert(" The password is wrong ");
}


}
passwordValifation();


function findRootAmount (a,b,c){
let discriminant =Math.pow(b,2)-4*a*c;
if(discriminant>0){
    return console.log("The equation has two roots ")
}else if (discriminant==0){
    return console.log("The equation has one root ")
}else{
    return console.log("The equation does not have any roots ")
}
}

findRootAmount(3,5,2);
 



 

