let arr=[1,2,5,8,4,8]
// 1. brute force approach
// let largest=arr[0]
// for(let i=1;i<arr.length;i++){
//     if(largest<arr[i]){
//         largest=arr[i]
//     }
// }
// console.log("first largest element:", largest)

// let secondLargest=-1
// for(let i=0;i<arr.length;i++){
//     if(secondLargest<arr[i]){
//         if(largest>arr[i]){
//             secondLargest=arr[i]
//         }
//     }
// }
// console.log(secondLargest)

//time complexity O(n) + O(n)=O(2n)

//2. better approach
let largest=arr[0]
let secondLargest=-1
for(i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i]
    }else if(
        arr[i]<largest && secondLargest<arr[i]
    ){
        secondLargest=arr[i]
    }
}
console.log(largest,secondLargest)