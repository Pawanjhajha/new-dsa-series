let arr=[3,2,5,2,1]

// 1. brute force approch
// let tem;
// for (let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             tem=arr[i]
//             arr[i]=arr[j]
//             arr[j]=tem
//         }
//     }
// }
// console.log("longest element :",arr[arr.length-1])

//time complexty = O(n^2)  approch =selection sort

// 1. better approach
let longest=arr[0];
for (let i=1;i<arr.length;i++){
    if (longest<arr[i]){
        longest=arr[i]
    }
}
console.log(longest,"longest")