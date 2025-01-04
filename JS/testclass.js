const handlesubmit = () => {
    
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let salary  = parseInt(document.getElementById("salary").value);

    console.log(age,name,salary);

    let obj = {
        id:Math.floor(Math.random()*10000),
        name,
        age,
        salary
    }
  class Employee{
    constructor(i,n,a,s){
        this.id=i;
        this.name=n;
        this.age=a;
        this.salary=s;
    }
 }
    console.log("id: ",this.id);
    console.log("name: ",this.name);
    console.log("age: ",this .age);
    console.log("salary: ",this .salary);

    
  
let localData=JSON.parse(localStorage.getItem("emp"));


}



let emp=document.getElementById("testform");
emp.addEventListener("submit",handlesubmit);