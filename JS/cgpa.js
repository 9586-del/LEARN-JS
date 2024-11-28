let cgpa=parseFloat(prompt("enter your cgpa: "));
let cast=prompt("enter your cast: ");
let fees=parseInt(prompt("enter fees: "));

var scholarship,grade;

if(cgpa >= 9) {
    grade='A';
} else if (cgpa > 8 && cgpa < 9) {
    grade='B';
} else if (cgpa > 7 && cgpa <8) {
    grade='C';
} else if (cgpa > 6 && cgpa <7) {
    grade='D';
}

console.log("grade",grade);


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

