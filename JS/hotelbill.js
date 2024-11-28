let Food_items, Food_Qty, French_fries, Fries_Qty, Cold_drinks, cold_type, cold_Qty;

function hotelbill() {

  event.preventDefault();

  
   Food_items=parseInt(document.getElementById("Food_items").value);
   Food_Qty=parseInt(document.getElementById("Food_Qty").value);
   French_fries=parseInt(document.getElementById("French_fries").value);
   Fries_Qty=parseInt(document.getElementById("Fries_Qty").value);
   Cold_drinks=document.getElementById("Cold_drinks").value;
   cold_type=parseInt(document.getElementById("cold_type").value);
   cold_Qty=parseInt(document.getElementById("cold_Qty").value);


  
  console.log(Food_items,Food_Qty,French_fries,Fries_Qty,Cold_drinks,cold_Qty,cold_type)

  let print=`
    <table border="1">
            <tr>
                <th>Items</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>price</th>
            </tr>
        
  `;


  if(Food_items!=0 && Food_Qty!=0){
    let Foodname='';
    if(Food_items==100) {
      Foodname="Burger";
    } else if (Food_items==300) {
      Foodname="Pizza";
    } else if (Food_items==500) {
      Foodname="Combo";
    }
    print = print+`
    <tr>
      <td>Items</td>
      <td>${Foodname}</td>
      <td>${Food_Qty}</td>
      <td>${Food_items*Food_Qty}</td>
   </tr>
    `
  } 
  if(French_fries==150){
    let Fries='';
    print = print+`
    <tr>
      <td>Items</td>
      <td>Fries</td>
      <td>${Fries_Qty}</td>
      <td>${French_fries*Fries_Qty}</td>
   </tr>
    `
  }
  if (Cold_drinks==1){
   let drinks='';
    if(cold_type==20){
      drinks="pepsi";
    } else if (cold_type==25){
      drinks="Mazza";
    } else if (cold_type==30){
      drinks="Thums up";
    }
    
    print=print+`
    <tr>
      <td>Items</td>
      <td>${drinks}</td>
      <td>${cold_Qty}</td>
      <td>${cold_type*cold_Qty}</td>
   </tr>
    `
  }

  total=(Food_items*Food_Qty)+(French_fries*Fries_Qty)+(cold_type*cold_Qty);
  print=print+`
  <tr>
    <td colspan="3">total</td>
    <td>${(Food_items*Food_Qty)+(French_fries*Fries_Qty)+(cold_type *cold_Qty)}</td>
   </tr>
  `

   
  
  

    print=print+`</table>`

  document.getElementById("disp").innerHTML=print;
  document.getElementById("coupon_form").style.display="block";
}

function couponcall() {
  event.preventDefault();
  let print='';
  let per=0;

  let coupon=document.getElementById("coupon").value;

  if(coupon=="ABC123"){
    per=10;
  } else if (coupon=="DIWALI24"){
    per=20;
  } else if (coupon=="XYZ87") {
    per=30;
  }
  total=(Food_items*Food_Qty)+(French_fries*Fries_Qty)+(cold_type*cold_Qty);
  dis=total*per/100;
  
  print=print+`
  <p>Discount:${dis}</p>
  <h3>Final Bill:${total-dis}</h3>
  `
  document.getElementById("bill").innerHTML=print;
}