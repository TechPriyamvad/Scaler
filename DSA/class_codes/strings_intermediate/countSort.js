module.exports = { 
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           for(let i=0; i < A.length;i++){
               A[i] = Number(A[i]);
           }
           // find max of an array
           let max = 0;
           for(let i=0; i < A.length;i++){
               if(A[i] > max)
                   max = A[i];
           }
   
           // create counter of max size
           let count = [];
           for(let i=0; i < (max+1);i++){
               count[i] = 0;
           }
           for(let i=0; i < A.length;i++){
               count[A[i]]++;
           }
   
           // store frequency of each ele by iterating over counter array
           let ans = [];
           for(let i=0;i < count.length;i++){
               for(let j=0; j < count[i];j++){
                   ans.push(i);
               }
           }
           return ans;
       }
   };
   