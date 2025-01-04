const handleDelete = (id) => {
    console.log(id);

    const divRef = document.getElementById("row-" + id);

    divRef.remove();
    
}




const handlesubmit = () => {

    event.preventDefault();

   let n = document.getElementById("name").value;

   let rNo = Math.floor(Math.random()*10000);

   let divEle = document.createElement("div");
   divEle.setAttribute("id","row-"+ rNo);

   let remBtn = document.createElement("button");
   remBtn.setAttribute("onclick",`handleDelete(${rNo})`);
   remBtn.innerText="X";



   let Element = document.createElement("span");

   let node = document.createTextNode(n);

   Element.appendChild(node);

   divEle.appendChild(Element)
   divEle.appendChild(remBtn);
   
   document.getElementById("disp").appendChild(divEle);

   
}