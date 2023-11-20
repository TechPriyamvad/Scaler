module.exports = { 
    //param A : array of integers
    //return an integer
       maxSubArray : function(A){
           // kadane's algorithm
           let sum = 0;
           let ans = A[0];
           let arrLen = A.length;
           for(let i=0; i < arrLen;i++)
           {
               if(sum < 0)
                   sum = 0;
               sum += A[i];
               ans = Math.max(sum,ans);
           }
           return ans;
       }
   };
   