tre='';
costing=0, seating=0;


function handletreatment(){

    event.preventDefault();

    tre = document.getElementById("tre").value;


    if(tre==='Teeth cleaning'){
        seating=1;
        costing=500;
    } else if(tre==='Fillings'){
        seating=2;
        costing=1500;
    } else if(tre==='Root canal treatment'){
        seating=4;
        costing=2500;
    } else if(tre==='RCT+Cover'){
        seating=6;
        costing=12000;
    } else if(tre==='Braces'){
        seating=12;
        costing=35000;
    }  


    let print=`
    <table border="1">
    <tr>
        <th>Treatment</th>
        <th>seating</th>
        <th>costing</th>
    </tr>
    
    <tr>
        <td>${tre}</td>
        <td>${seating}</td>
        <td>${costing}</td>
    </tr>
    </table>
    `;
document.getElementById("disp").innerHTML=print;
document.getElementById("apt_form").style.display='block';
}

function Appointment (){

    event.preventDefault();

   let date= document.getElementById("aptdate").value;

   let d = new Date(date);

    let print = `<table border="1">
  <tr>
      <th>treatment</th>
      <th>date</th>
      <th>cost</th>
  </tr>
  
  `;

    for(let i=1; i<=seating; i++) {
    print += `
      <tr>
        <td>${tre}</td>
        <td>${d.toLocaleDateString()}</td>
        <td>${costing/seating}</td>
    </tr>
    `
    d.setDate(d.getDate(date)+7);
    ;}
 
    print+= `</table>`;
    document.getElementById("apttable").innerHTML=print;
}