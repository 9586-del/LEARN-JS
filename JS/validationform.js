function validateForm() {

    let name=document.contactForm.name.value;
    let email=document.contactForm.email.value;
    let mobile=document.contactForm.mobile.value;
    let country=document.contactForm.country.value;
    let gender=document.contactForm.gender;

  




    if(name===''){
        document.getElementById("nameErr").innerHTML="please enter name."
    } else {
        let regexname = /^[a-zA-Z ]{2,30}$/;

        if(regexname.test(name)){
            document.getElementById("nameErr").innerHTML=""
        } else {
            document.getElementById("nameErr").innerHTML="please enter your name properly."
            
        }
        
        
    }

    if(email===''){
        
        document.getElementById("emailErr").innerHTML="please enter name."
    } else {

        let regexemail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email.match(regexemail)){
            document.getElementById("emailErr").innerHTML=""

        } else {
            document.getElementById("emailErr").innerHTML="please enter email properly."

        }

    }

    if(mobile===''){
        document.getElementById("mobileErr").innerHTML="please enter name."
    } else {

        if (!isNaN(mobile)&&mobile.length==10) {
            document.getElementById("mobileErr").innerHTML=""

        } else{
            document.getElementById("mobileErr").innerHTML="please enter your mobile number properly."

        }
    }

    if(country === "0"){
        document.getElementById("countryErr").innerHTML="please select country."
    } else {
        document.getElementById("countryErr").innerHTML=""
    }


   let flag = false;


    for (let i=0; i<gender.length; i++) {
        if (gender[i].checked == true){
            flag=true;
            break;
        }
     }

    if(flag){
        document.getElementById("genderErr").innerHTML="";
    } else {
        document.getElementById("genderErr").innerHTML="please select your gender.";

    }




    return false;
}