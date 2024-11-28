let gender=prompt("enter your gender: ");
let salary=parseInt(prompt("enter your salary: "));

bonus=0;

if (gender=='male') {
    if (salary<10000) {
        bouns=salary*0.02;
    } else {
        bonus=0;
    }
} else if (gender=='female') {
    if (salary<10000) {
        bonus=salary*0.03;
    } else {
        bonus=0;
    }
} else {
    console.log("invalid input");
}

bonus=salar

console.log("bonus",bonus);