// Do not write code to include libraries, main() function or accept any input from the console.
// Initialization code is already written and hidden from you. Do not write code for it again.
module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //return a array of integers
       solve : function(A, B){
           // Just write your code below to complete the function. Required input is available to you as the function arguments.
           // Do not print the result or any output. Just return the result via this function.
   
           // Approach: 
           // create two hashmap containing frequency of each elements in both arrays
           // check common elements in both hashmap
           // check what is minimum frequency value of common element by comparing both hashmap
           // how many times to store the common element in ans array depends on minimum frequency value
           let mapA = new Map();
           let mapB = new Map();
           let ans = [];
   
           // create two hashmap containing frequency of each elements in both arrays
           for(let i=0; i < A.length;i++){
               if(mapA.has(A[i])){
                   let ov = mapA.get(A[i]);
                   let nv = ov+1;
                   mapA.set(A[i],nv);
               }
               else
                   mapA.set(A[i],1);
           }
           // console.log(mapA)
           for(let i=0; i < B.length;i++){
               if(mapB.has(B[i])){
                   let ov = mapB.get(B[i]);
                   let nv = ov+1;
                   mapB.set(B[i],nv);
               }
               else
                   mapB.set(B[i],1);
           }
   
           // console.log("mapA:"+mapA)
           // console.log(mapB)
           // check common elements in both hashmap
           for(const key of mapA.keys()){
               if(mapA.has(key) && mapB.has(key)){
                   // check what is minimum frequency value of common element by comparing both hashmap
                   let count = this.min(mapA.get(key),mapB.get(key));
                   // console.log(count);
                   // how many times to store the common element in ans array depends on minimum frequency value
                   for(let i=1;i <= count;i++){
                       ans.push(key);
                   }
               }
           }
           return ans;
       },
   
       min: function(A,B){
           return A < B ? A:B;
       }
   }