let cloth=prompt("enter type of cloth: ");
let amount=parseInt(prompt("enter amount: "));

if (cloth=='mill') {
    if (amount <100) {
        console.log(amount=0);
    } else if (amount > 100 && amount < 200) {
        console.log(amount*0.05);
    } else if (amount > 200 && amount < 300) {
        console.log(amount*0.075);
    } else if (amount > 300){
        console.log(amount*0.10);
    }
} else if (cloth=='handloom') {
    if (amount <100) {
        console.log(amount*0.05);
    } else if (amount > 100 && amount < 200) {
        console.log(amount*0.075);
    } else if (amount > 200 && amount < 300) {
        console.log(amount*0.10);
    } else if (amount > 300) {
        console.log(amount*0.15);
    }
} else {
    console.log("invalid input");
    
}