module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
   
           // find maximum element in array
           let max_val = Number.MIN_VALUE;
           let arrLen = A.length;
           for(let idx=0;idx < arrLen;idx++)
           {
               if(A[idx] > max_val)
               {
                   max_val = A[idx];
               }
           }
   
           // console.log(max_val);
   
           // find count of maximum element in array
           let cnt=0;
           for(let idx=0;idx < arrLen;idx++)
           {
               if(A[idx] === max_val)
               {
                   cnt++;
               }
           }
   
           return arrLen - cnt;
       }
   };
   