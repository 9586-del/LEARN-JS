class Budget {
    constructor() {
        this.budget = document.getElementById("budget");
    }

   

    handledata() {
        const budget = JSON.parse(localStorage.getItem("budget"));
        document.getElementById("budget_amt").innerHTML=budget;

        const Expense = JSON.parse(localStorage.getItem("expense"));   

        let totalexp;

        if (Expense) {
            totalexp = Expense.reduce((acc,v) => acc+v.Amount,0);
            document.getElementById("expense_amt").innerHTML=totalexp;

            
 
        }
       


        if (budget && totalexp) {
            let balance= parseInt(budget)-totalexp;
            document.getElementById("balance_amt").innerText=balance;
            
        }
        console.log(totalexp);

    }

    handlebudget() {
        event.preventDefault();

        console.log(this.budget.value);

        if (this.budget.value === '') {
            document.getElementById("bugerr").innerHTML = "please enter budget."
        } else {
            if (parseInt(this.budget.value) < 0 || isNaN(this.budget.value)) {
                document.getElementById("bugerr").innerHTML = "please enter valid budget."

            } else {
                document.getElementById("bugerr").innerHTML = ""
                localStorage.setItem("budget", this.budget.value);
                this.handledata();

            }
        }

    }
}

class Expense extends Budget {
    constructor() {
        super();
        this.exp = document.getElementById("exp_name");
        this.amt = document.getElementById("exps_amt");

    }
    removedata (id) {
        const del = document.getElementById("exp-" + id)
        del.remove(id);
        const localExp = JSON.parse(localStorage.getItem("expense"));
        const fdata = localExp.filter((v) => v.id !== id);
        localStorage.setItem("expense",JSON.stringify(fdata));


    }

    displayExp(v) {


        const divEle = document.createElement("div");
        divEle.setAttribute("id","exp-" + v.id);

        const sptext = document.createElement("span");
        sptext.innerText = v.Exp;

        
        const spamt = document.createElement("span");
        spamt.innerText = v.Amount;
        

        const editBtn = document.createElement("button");
        editBtn.innerText = "E";

        
        const delBtn = document.createElement("button");
        delBtn.addEventListener("click", () => {
            this.removedata(v.id);
        })
        delBtn.innerText = "D";

        divEle.appendChild(sptext);
        divEle.appendChild(spamt);
        divEle.appendChild(editBtn);
        divEle.appendChild(delBtn);

       const divRef = document.getElementById("EditDel");
       divRef.appendChild(divEle);
    }
   
    handleExpense() {
        event.preventDefault();


        console.log("rrrrr", this.exp.value, this.amt.value);

        let experr = false;

        if (this.exp.value === '') {
            document.getElementById("experr").innerHTML = "please enter expense."
            experr = true;
        } else {
            document.getElementById("experr").innerHTML = ""

        }

        if (this.amt.value === '') {
            document.getElementById("bugserr").innerHTML = "please enter budget."
            experr = true;

        } else {
            if (parseInt(this.amt.value) < 0 || isNaN(this.amt.value)) {
                document.getElementById("bugserr").innerHTML = "please enter valid budget."
                experr = true;


            } else {
                document.getElementById("bugserr").innerHTML = ""


            }


        }

        if (!experr) {
            let localExp = JSON.parse(localStorage.getItem("expense"));
            console.log(localExp);

            let obj = {
                id: Math.floor(Math.random() * 10000),
                Exp: this.exp.value,
                Amount: parseInt(this.amt.value)
            }


            if (localExp) {
                localExp.push(obj);
                localStorage.setItem("expense", JSON.stringify(localExp));

            } else {
                localStorage.setItem("expense", JSON.stringify([obj]));

            }
            this.handledata();
            this.displayExp(obj);
        }

    }

}


const b = new Budget();
const e = new Expense();

const bform = document.getElementById("bug");
bform.addEventListener("submit", function () {
    b.handlebudget();
})


e.handledata();


const eForm = document.getElementById("bugone");
eForm.addEventListener("submit", function () {
    e.handleExpense();
})

window.onload = function() {
    const localdata = JSON.parse(localStorage.getItem("expense"));

    localdata.map((v) => {
        e.displayExp(v);
    })



}
