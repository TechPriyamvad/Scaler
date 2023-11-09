module.exports = { 
    //param A : array of integers
    //param B : integer
    //param C : integer
    //return an integer
       solve : function(A, B, C){
           for(let i=0;i < A.length;i++){
               A[i] = Number(A[i]);
           }
           let sum = 0;
           // calculate subarray sum for first subarray
           for(let i=0; i < B;i++){
               sum = sum + A[i];
           }
   
           if(sum == C)
               return 1;
           
           // calculate subarray sum for remaining subarray
           let s=1;
           let e = B;
           while (s <= (A.length - B) ){
               sum = sum - A[s-1] + A[e];
               if(sum == C)
                   return 1;
               s++;
               e++;
           }
   
           return 0;
   
       }
   };
   module.exports = { 
    //param A : array of integers
    //param B : integer
    //param C : integer
    //return an integer
       solve : function(A, B, C){
           for(let i=0;i < A.length;i++){
               A[i] = Number(A[i]);
           }
           let sum = 0;
           // calculate subarray sum for first subarray
           for(let i=0; i < B;i++){
               sum = sum + A[i];
           }
   
           if(sum == C)
               return 1;
           
           // calculate subarray sum for remaining subarray
           let s=1;
           let e = B;
           while (s <= (A.length - B) ){
               sum = sum - A[s-1] + A[e];
               if(sum == C)
                   return 1;
               s++;
               e++;
           }
   
           return 0;
   
       }
   };
      