// let arr1=[10,8,92,17,33];

// console.log(arr1);

// console.log(arr1[3],arr1[1]);

// iteration means Element ne access karya


// for (let i=0; i<arr1.length; i++) {
//     console.log(arr1[i]);

// }

// arr1.forEach(function(v,i) {
//     console.log(v);
    
// })

// arr1.forEach((v,i) => {
//     console.log(i,v);
    
// // })
// arr1.map((v,i) => {
//     console.log(i,v);
    
// })

// arr1.map((v,i) => console.log(i,v));

// let arr1=[10,8,92,17,33];

//add                        //return number of element
// // ans=arr1.push(99);          // add at last
// ans=arr1.unshift(99);          //add at first
// ans=arr1.splice(2,0,99,100,88);     //return empty array



//remove
// ans=arr1.pop();          //remove at last     //return removed element
// ans=arr1.shift();            //remove at first     //return removed element
// ans=arr1.splice(3,2);            //remove at specific position     //return removed element


// update
// arr1[2]=99;
// console.log(arr1);

// let arr1=[10,8,92,88.3,17,'amit',33];
// let arr2= new Array(5,8,9,3);
// console.log(typeof arr1);          //object
// console.log(arr1.length);


let arr1=[10,8,92,88.3,17,'amit',33];
let arr2= new Array(5,8,9,3);

// // let ans=Array.isArray(arr1);             //check array or not                 //return boolean
// let ans=arr1.concat(arr2);                   //combine two or more array         //return array


// //check
// let ans = arr1.some((v) => v > 500);         //return boolean
// let ans = arr1.find((v) => v > 500);              //return first match value,if not match return undefined
// let ans = arr1.includes(18);                     //return boolean

let ans = arr1.toString();                       //convert array to string            //return string
console.log(ans);
