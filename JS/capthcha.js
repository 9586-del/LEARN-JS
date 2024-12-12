 
let num1=Math.floor(Math.random()*10);
let num2=Math.floor(Math.random()*10);

document.getElementById("num1").innerHTML=num1;
document.getElementById("num2").innerHTML=num2;






function handlesubmit() {
let ans=parseInt(document.getElementById("ans").value);

let validForm=true;

if (ans){
    document.getElementById("ansErr").innerHTML="";
} else {
    document.getElementById("ansErr").innerHTML="please enter valid captcha.";
    validForm=false;
}

if(validForm){
    if (ans==(num1+num2)) {
        alert("correct capthcha");
     } else {
         alert("Incorrect capthcha");
        
     }
}

return validForm;
}

