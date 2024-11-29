function colorchange() {

    event.preventDefault();

    let country=document.getElementById("country").value;

    switch(country){
        case "India":
        document.body.style.backgroundColor="#FF4552";
        break;

        case "Pakistan":
        document.body.style.backgroundColor="#FF9956";
        break;

        case "America":
        document.body.style.backgroundColor="#FF1234";
        break;

        case "0":
        document.body.style.backgroundColor="#FFFFFF";
        break;

        

    }
    
}