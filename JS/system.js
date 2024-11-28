function SelectSystem() {

    event.preventDefault();

    let sp=parseInt(document.getElementById("sp").value);

    let ram=parseInt(document.getElementById("ram").value);

    let mem=parseInt(document.getElementById("mem").value);

    let grap=parseInt(document.getElementById("grap").value);

    let type,total_price;

    if(sp == 5000){
        console.log("student pc");
        type="student pc";
    } else if (sp==8000){
        if(ram == 4000){
        console.log("student pc");
        type="student pc";
        } else if (ram >= 6000 ){
        console.log("professional pc");
        type="professional pc";
        }
    } else if (sp==12000){
        if(grap == 0){
        console.log("professional pc");
        type="professional pc";
        } else if (grap == 4500 && ram >= 6000){
        console.log("gaming  pc");
        type="gaming pc";
        } else if(grap == 4500 && ram ==4000){
            console.log("professional pc");
            type="professional pc";
            }
    }
    total_price=sp+ram+mem+grap;
    console.log("price",total_price);
    
}