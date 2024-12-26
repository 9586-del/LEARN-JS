update = null;

const handlesubmit = () => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let salary = parseInt(document.getElementById("salary").value);


    let obj = {
        id: Math.floor(Math.random() * 10000),
        name,
        age,
        salary
    }


    let localData = JSON.parse(localStorage.getItem("emp"));
    if (update === null) {
        if (localData) {

            localData.push(obj);

            localStorage.setItem("emp", JSON.stringify(localData));

        } else {
            localStorage.setItem("emp", JSON.stringify([obj]));
        }

    } else {
        let localData = JSON.parse(localStorage.getItem("emp"));

        let index =localData.findIndex((v) => v.id===update);

        localData[index]=obj;

        localStorage.setItem("emp", JSON.stringify(localData));

        console.log(index);

        update=null;
        
    }


    document.getElementById("name").value='';
    document.getElementById("age").value='';
    document.getElementById("salary").value='';



    display();
}

const display = () => {
    let localData = JSON.parse(localStorage.getItem("emp"));

    console.log(localData);

    if (localData) {
        let print = `
        <table border="1"><tr>
        <th>name</th>
        <th>age</th>
        <th>salary</th>
        <th>action</th>
        </tr>
        `;



    localData.map((v, id) => {
        print += `
    <tr>
    <td>${v.name}</td>
    <td>${v.age}</td>
    <td>${v.salary}</td>
    <td><button onclick="handledelete(${v.id})">D</button><button onclick="handleupdate(${v.id})">U</button></td>
    </tr>
    `
    })

    document.getElementById("disp").innerHTML = print;

    }

    
}

const handledelete = (id) => {
    console.log(id);
    let localData = JSON.parse(localStorage.getItem("emp"));

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

    let obj = localData.find((v) => v.id===id);

    document.getElementById("name").value=obj.name;
    document.getElementById("age").value=obj.age;
    document.getElementById("salary").value=obj.salary;






    update=id;

    console.log(obj);
    
    
    

}
let emp = document.getElementById("empform");
emp.addEventListener("submit", handlesubmit);

window.onload = display;