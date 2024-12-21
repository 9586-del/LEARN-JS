
const addtodo=[];
let update=null;

const display = (fdata) => {
let finaldata = fdata ? fdata : addtodo;

    let  print='<ul>'

    finaldata.map((v,i) =>  {
       print+= `<li>${v}<button onclick="handleupdate(${i})">e</button><button onclick="handledelete(${i})">x</button></li> `
    })
'</ul>';

    document.getElementById("disp").innerHTML=print;
}

const handledelete = (i) => {
    addtodo.splice(i,1);
    console.log(i);

    display();
    
    
    
}

const handleupdate = (i) => {
    document.getElementById("todo").value=addtodo[i];
    display();
    update = i;


}


const handleTodo = () => {

    event.preventDefault();
 
    const todo=document.getElementById("todo").value;



    if (todo) {



        console.log(addtodo,update);


    if (update===null) {
        addtodo.push(todo);

    } else {
        addtodo[update]=todo;
        update=null;
    }
    display();
        


        document.getElementById("todoErr").innerHTML="";
        document.getElementById("todo").value='';
    } else {
        document.getElementById("todoErr").innerHTML="please enter todo";
    }
    
}

const handleSearch = () => {
   let search = document.getElementById("search").value;

    let fdata = addtodo.filter((v) => v.toLowerCase().includes(search.toLowerCase()))
    display(fdata);
}

const handleSort = () => {

    let sData = document.getElementById("sort").value;


   if (sData==='az') {
    const  sData=addtodo.sort();
    display(sData);

   } else if (sData==='za') {
    const  sData=addtodo.sort().reverse(); 
      display(sData);
   }

}
