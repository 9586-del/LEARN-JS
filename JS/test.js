// Q-1 [Each 1 Marks]

 // 1. Change 61 to 20.
// let arr1 = [10,8,61,31,5];
// arr1[2]=20;
//  console.log(arr1);// 


// 2. Delete 8
// let arr1 = [10,8,61,31,5];
// let ans=arr1.splice(1,1);  
// console.log(arr1);


// // // 3. Add 20,30,40 after 10
// let arr1 = [10,8,61,31,5];
// arr1.splice(1,0,20,30,40); 
// console.log(arr1);


// 4. Find index of 5
// let arr1 = [10,8,61,31,5];
// let ans = arr1.indexOf(5);  
// console.log(ans);


// //5. Search 99 is available or not
// let arr1 = [10,8,61,31,5];
// let ans = arr1.includes(99); 
// console.log(ans);5



// Q-2 [Each 2 Marks]

// 1. Combine arr2 and arr3

// let arr2 = [10,20,30,40,50];
// let arr3 = [6,9,80];
// let ans=arr2.concat(arr3);
// console.log(ans);


// 2. Get 20, 30, 40 as array from arr2
// let arr2 = [10,20,30,40,50];
// let ans= arr2.slice(1,4);
// console.log(ans);


// 3. Give sum of all element of arr3 using reduce function
// let arr3 = [6,9,80];
// let ans=arr3.reduce((acc,v,i) => acc+v, 0);
// console.log(ans);


// 4. Check all element is greater than 10 or not from arr3
// let arr3 = [6,9,80];
// let ans= arr3.every((v,i) => v>10); 
// console.log(ans);



// 5. Sort arr3 in descending order.
// let arr3 = [6,9,80];
// let ans= arr3.sort((a,b) => b-a);  
// console.log(ans);10


// Q-3 [Each 3 Marks]

// 1. Removing duplicates from an array.
// let arr1=[10,20,30,40,30,50,40];
//     let emptyArray=[];

//     for(let i=0; i<arr1.length;i++){
//         if(!emptyArray.includes(arr1[i])){
//             emptyArray.push(arr1[i])
//         }
//     }
//     console.log(emptyArray);



// 2. Finding the median of an array.
// let arr1=[10,20,30,40,50,60];
// let ans = arr1.sort((a,b) => a-b);


// let n = arr1.length;
// if (n % 2 === 1) {
//     return arr1[Math.floor(n / 2)];
// } else {
//     let mid1 = arr1[n / 2 - 1];
//     let mid2 = arr1[n / 2];
//     return (mid1 + mid2) / 2;
// }
// console.log(ans);



// 3. Checking if an array is sorted in ascending order.
// let arr1 = [1,2,3,4,5,6,7];
// let ans=arr1.sort((a, b) => a-b);
// let asc = true;

// for (let i = 0; i < arr1.length - 1; i++) {
//     if (arr1[i] > arr1[i + 1]) {
//        asc = false;
//         break;
//     }
// }

// console.log(asc); 





// // 4. Finding the third largest element in an array.
// let arr1=[10,20,30,40,50,60]
// ans=arr1.sort((a, b) => b - a);
// console.log(ans[2]);





// 5. Finding the first three maximum number's sum an array.
// let arr1 = [1,2,3,4,5,6,7];
// arr1.sort((a, b) => b - a);
// let sum = arr1[0] + arr1[1] + arr1[2];
// console.log(sum);

// Q-4 Create a todo list that add, display, sort a todo.
// function todo(){
//     event.preventDefault();

//     let list=document.getElementById("todo").value;
//     console.log(test);

//     for (i=0; i<list; i++) {

//     }
    
// }