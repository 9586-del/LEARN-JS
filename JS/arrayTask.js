// arr1=[10,20,30,40,50,60];

// Finding the maximum element in an array.

// let ans=Math.max(...arr1);
// console.log(ans);

// let ans= arr1.sort((a,b) => b-a);  
// console.log(ans[0]);


// Finding the minimum element in an array.

// let ans=Math.min(...arr1);
// console.log(ans);

// let ans= arr1.sort((a,b) => a-b); 
// console.log(ans[0]);

// Sorting an array in ascending order.
// let ans= arr1.sort((a,b) => a-b);
// console.log(ans);


// Sorting an array in descending order.
// let ans= arr1.sort((a,b) => b-a);
// console.log(ans);


// Reversing an array
// let ans=arr1.reverse();
// console.log(ans);

// // Finding the sum of all elements in an array.
// let ans=arr1.reduce((acc,v,i) => acc+v, 0);
// console.log(ans);

// // Finding the average of all elements in an array.
// let ans=arr1.reduce((acc,v,i) => acc+v, 0);
// console.log(ans/arr1.length);

//  let arr1=[10,20,30,40,50,50,60];
//   Checking if an array contains a specific element.
// let ans=arr1.includes(50);
// console.log(ans);

// Removing duplicates from an array.
    // let emptyArray=[];

    // for(let i=0; i<arr1.length;i++){
    //     if(!emptyArray.includes(arr1[i])){
    //         emptyArray.push(arr1[i])
    //     }
    // }
    // console.log(emptyArray);


// Merging two arrays into a new array.
// let arr2=[1,2,3,4];
// let ans=arr1.concat(arr2);
// console.log(ans);






// let arr1=[10,20,30,40,50,60,70]
// Finding the second largest element in an array.
// let ans= arr1.sort((a,b) => b-a);
// console.log(arr1[1]);



// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];
// let ans = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
// console.log(ans);


// // Finding the index of the first occurrence of an element in an array.
// let arr1 = [10, 20, 30, 40, 50, 30];
// let ans = arr1.indexOf(30);
// console.log(ans);  


// // Finding the index of the last occurrence of an element in an array.
// let arr1 = [10, 20, 30, 40, 50, 30];
// let ans = arr1.lastIndexOf(30);
// console.log(ans);  


//   Finding the first three maximum number's sum an array.
// let arr1 = [10, 20, 4, 30, 50, 40];
// arr1.sort((a, b) => b - a);
// let sum = arr1[0] + arr1[1] + arr1[2];
// console.log(sum);


let arr1=[10,20,30,40,50,60];
ans = arr1.sort((a,b) => a-b);


let n = arr1.length;
if (n % 2 === 1) {
    return arr1[Math.floor(n / 2)];
} else {
    let mid1 = arr1[n / 2 - 1];
    let mid2 = arr1[n / 2];
    return (mid1 + mid2) / 2;
}
console.log(ans);

