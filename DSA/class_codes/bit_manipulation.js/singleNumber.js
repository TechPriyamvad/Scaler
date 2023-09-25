module.exports = { 
    //param A : array of integers
    //return an integer
       singleNumber : function(A){
           for(let i=0;i < A.length;i++){
               A[i] = Number(A[i]);
           }
           let XOR = 0;
           for(let i=0; i<A.length;i++){
               XOR ^= A[i];
           }
   
           return XOR;
       }
   };
   