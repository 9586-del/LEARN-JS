function validateForm() {

    let name=document.contactForm.name.value;
    let email=document.contactForm.email.value;
    let mobile=document.contactForm.mobile.value;
    let country=document.contactForm.country.value;
    let gender=document.contactForm.gender;
    let hobbies=document.contactForm.hobbies;

    let formValidate=true;

  




    if(name===''){
        document.getElementById("nameErr").innerHTML="please enter name."
        formValidate=false;
    } else {
        let regexname = /^[a-zA-Z ]{2,30}$/;

        if(regexname.test(name)){
            document.getElementById("nameErr").innerHTML=""
        } else {
            document.getElementById("nameErr").innerHTML="please enter your name properly."
        formValidate=false;

            
        }
        
        
    }

    if(email===''){
        
        document.getElementById("emailErr").innerHTML="please enter name."
        formValidate=false;

    } else {

        let regexemail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email.match(regexemail)){
            document.getElementById("emailErr").innerHTML=""

        } else {
            document.getElementById("emailErr").innerHTML="please enter email properly."
            formValidate=false;

        }

    }

    if(mobile===''){
        document.getElementById("mobileErr").innerHTML="please enter name."
        formValidate=false;

    } else {

        if (!isNaN(mobile)&&mobile.length==10) {
            document.getElementById("mobileErr").innerHTML=""

        } else{
            document.getElementById("mobileErr").innerHTML="please enter your mobile number properly."
            formValidate=false;

        }
    }

    if(country === "0"){
        document.getElementById("countryErr").innerHTML="please select country."
        formValidate=false;

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
        formValidate=false;

    }

   let countHobbies=0;

   for(let i=0; i<hobbies.length;i++) {
    if(hobbies[i].checked){
        countHobbies++;
    }
    }
   if(countHobbies<2){
    document.getElementById("hobbyErr").innerHTML="please select atleast two hobbies.";
    formValidate=false;

} else {
    document.getElementById("hobbyErr").innerHTML="";

}


    return formValidate;

}


