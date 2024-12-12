function insert(n) {

document.getElementById("textview").value=document.getElementById("textview").value+n



}

function backspace() {
    let exp=document.getElementById("textview").value;

    document.getElementById("textview").value=exp.substring(0, exp.length -1);

    
}

function equal() {

    let exp=document.getElementById("textview").value;



    let reg = /^[0-9*/+-]/;

    

    if (exp) {
        if (reg.test(exp)) {
            document.getElementById("textview").value = eval(exp);
    
            document.getElementById("ansErr").innerHTML = "";
    
        } else {
            document.getElementById("ansErr").innerHTML = "please enter valid data";
        }
    } else {
        document.getElementById("ansErr").innerHTML = "please enter data";

    
}

}