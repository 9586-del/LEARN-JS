
addtodo=[];
const display=()=> {
    let print='<ul>' 
    addtodo.map((v,i)=>{
   print+=`<li>${v}<button onclick="handleupdate(${i})">E</button><button onclick="handledelete(${i})">X</button></li>`
    })
    '</ul>';


    document.getElementById("disp").innerHTML=print;
}
const handledelete = (i) => {
    addtodo.splice(i,1);
    console.log(addtodo);
    
    display();
}

const handleupdate =()=>{


}

const handleTodo=()=>{

event.preventDefault();

const todo=document.getElementById("todo").value;

console.log(todo);


if (todo) {
    addtodo.push(todo);
    console.log(addtodo);
    
    display();

    document.getElementById("todoErr").innerHTML="";
    document.getElementById("todo").value='';
    


} else {
    document.getElementById("todoErr").innerHTML="please enter todo."
}

}