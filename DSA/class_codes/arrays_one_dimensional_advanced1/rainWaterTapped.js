module.exports = { 
    //param A : array of integers
    //return an integer
       trap : function(A){
           let arrLen = A.length;
           // for each array element calculate maximum height of building on left side
           let lMaxArr = [];
           let lMax = Number.MIN_SAFE_INTEGER;
           for(let i=0;i < arrLen;i++){
               let val = this.max(lMax,A[i]);
               lMax = val;
               lMaxArr.push(val);
           }
           // for each array element calculate maximum height of building on right side
           let rMaxArr = [];
           let rMax = Number.MIN_SAFE_INTEGER;
           for(let i=arrLen-1;i >= 0;i--){
               let val = this.max(rMax,A[i]);
               rMax = val;
               rMaxArr[i] = val;
           }
   
           let waterLogged = 0;
           // calculate rain water tapped
           for(i=0;i < arrLen;i++){
               waterLogged += (this.min(lMaxArr[i],rMaxArr[i]) - A[i]);
           }
           return waterLogged;
       },
       max:function(a,b){
           return a > b ? a : b;
       },
       min:function(a,b){
           return a < b ? a:b;
       }
   };
   