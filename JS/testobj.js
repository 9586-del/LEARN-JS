update=null;

const handlesubmit = () => {

    event.preventDefault();

    let name = document.getElementById("fname").value;
    let age = parseInt(document.getElementById("age").value);
    let salary = parseInt(document.getElementById("salary").value);

    console.log(age,name,salary);
  
    let obj = {
        id:Math.floor(Math.random()*10000),
        name,
        age,
        salary
    }

    let localData=JSON.parse(localStorage.getItem("emp"));
    
    console.log(update);
    

    if (update===null) {
        if (localData) {
            localData.push(obj);
            localStorage.setItem("emp",JSON.stringify(localData))
        } else {
            localStorage.setItem("emp",JSON.stringify([obj]));
    
        }
    } else {
        let localData=JSON.parse(localStorage.getItem("emp"));

        console.log(localData);
        


        let index = localData.findIndex((v) => v.id===update);

        console.log(index);
        

        localData[index]=obj;

        localStorage.setItem("emp", JSON.stringify(localData));
        


        update=null;


        
    }

    document.getElementById("fname").value = '';
    document.getElementById("age").value = '';
    document.getElementById("salary").value = '';

    display();

} 

const display = () => {

    
    let localData=JSON.parse(localStorage.getItem("emp"));



    let print = `
    <table border = "1"><tr>
    <th>Name</th>
    <th>Age</th>
    <th>Salary</th>
    <th>Action</th>


 </tr>`

localData.map((v) => {
    print+=`
    <tr>
        <td>${v.name}</td>
        <td>${v.age}</td>
        <td>${v.salary}</td>
        <td><button onclick="handledelete(${v.id})">D</button> <button onclick="handleupdate(${v.id})">E</button></td>
    `
})

document.getElementById("disp").innerHTML=print;
}

const handledelete = (id) => {

    console.log(id);
    
    
    let localData=JSON.parse(localStorage.getItem("emp"));

    let index = localData.findIndex((v) => v.id === id);

    console.log(index);

    localData.splice(index,1);

    localStorage.setItem("emp", JSON.stringify(localData));
    

    display();


}

const handleupdate = (id) => {
    console.log(id);

    let localData=JSON.parse(localStorage.getItem("emp"));

    console.log(localData);

    let obj = localData.find((v) => v.id === id);


    document.getElementById("fname").value=obj.name;
    document.getElementById("age").value=obj.age;
    document.getElementById("salary").value=obj.salary;

    update = id;
    
    console.log(obj);
}

let emp=document.getElementById("empForm");
emp.addEventListener("submit", handlesubmit);

window.onload=display;