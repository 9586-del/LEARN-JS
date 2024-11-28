let percentage=parseInt(prompt("enter percentage: "));

if(percentage >= 91 && percentage <= 100) {
    console.log(grade='A');
} else if (percentage >=81 && percentage <91) {
    console.log(grade='B')
} else if (percentage >=71 && percentage <81) {
    console.log(grade='C');
} else if (percentage >=61 && percentage <71) {
    console.log(grade='D');
} else if (percentage >=40 && percentage <61) {
    console.log(grade='E');
} else if (percentage >=0 && percentage <40) {
    console.log(grade="Failed");
} else {
    console.log(grade="invalid data");
    
}