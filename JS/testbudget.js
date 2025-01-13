class Budget {
    constructor(){
        this.Budget = document.getElementById("budget");
        console.log("jjjoo");
        
    }

    handleBudget () {
        event.preventDefault();

        console.log(this.Budget.value);

        if (this.Budget.value==='') {
            document.getElementById("bugerr").innerHTML="please enter budget";

        } else {
            if (parseInt(this.Budget.value) < 0 || isNaN(this.Budget.value)) {
            document.getElementById("bugerr").innerHTML="please enter valid budget";


            } else {
                document.getElementById("bugerr").innerHTML="";
                localStorage.setItem("budget",this.Budget.value);
            }
        }
        
    }
}

class Expense extends Budget {
    constructor () {
        super();
        this.expensedata = document.getElementById("exp_name");
        console.log("vjvjv");
        
        
        this.expenseamount= document.getElementById("exps_amt");
        console.log("55454");
        
                


    }
    handleExpense(){
        event.preventDefault();

        if (this.expensedata.value==='') {
            document.getElementById("experr").innerHTML="please enter expense";

        } else {
            document.getElementById("experr").innerHTML="";
            
        }


       
        if (this.expenseamount.value==='') {
            document.getElementById("bugserr").innerHTML="please enter budget";

        } else {
            if (parseInt(this.expenseamount.value) < 0 || isNaN(this.expenseamount.value)) {
            document.getElementById("bugserr").innerHTML="please enter valid budget";


            } else {
                document.getElementById("bugserr").innerHTML="";
                localStorage.setItem("expense",this.expenseamount.value);
            }
        }
    }


}



const e = new Budget();
const b = new Expense ();

const budgetform = document.getElementById("bug");
budgetform.addEventListener("submit", function () {
    e.handleBudget();
})


const expform = document.getElementById("bugone");
expform.addEventListener("submit", function () {
    b.handleExpense();
})




