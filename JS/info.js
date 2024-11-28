// function handleData(){

//     event.preventDefault();

//     let fn = document.getElementById("fname").value;

//     console.log(fn)

//    let a = parseInt(document.getElementById("age").value);

//     console.log(a)
// }

function handleData(){

    event.preventDefault();

    let fees=parseInt(document.getElementById("fees").value);
    console.log(fees);
    
    let cgpa=parseFloat(document.getElementById("cgpa").value);
    console.log(cgpa);

    let cast=document.getElementById("cast").value;
    console.log(cast);
    

    let grade,scholarship;

if(cgpa >= 9) {
    grade='A';
} else if (cgpa > 8 && cgpa < 9) {
    grade='B';
} else if (cgpa > 7 && cgpa <8) {
    grade='C';
} else if (cgpa > 6 && cgpa <7) {
    grade='D';
}

console.log(cgpa);


if(grade=='A' || grade=='B'){
    if(cast=='open') {
        console.log("no scholarship");
    } else if (cast=='obc') {
        console.log("obc")
       scholarship= fees*0.25;
    } else if (cast=='sc') {
        console.log("sc")
       scholarship= fees*0.50;
    } else if (cast=='st') {
        console.log("st");
        
        scholarship=fees*1;
    }
    console.log("scholarship",scholarship);

}


    
}