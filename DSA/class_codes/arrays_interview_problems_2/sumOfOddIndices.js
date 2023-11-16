module.exports = { 
    //param A : array of integers
    //param B : array of array of integers
    //return a array of integers
       solve : function(A, B){
           // convert all array elements to number type
           for(let i=0;i < A.length;i++){
               A[i] = Number(A[i]);
           }
   
           // create prefix sume odd indices array
           let pfOdd = [];
           pfOdd[0] = 0;
   
           for(let i=1;i < A.length;i++){
               if(i%2)
                   pfOdd[i] = pfOdd[i-1] + A[i];
               else
                   pfOdd[i] = pfOdd[i-1];
           }
   
           let ans = [];
           // calculate sum of odd indexes in array for Q queries
           for(let i=0;i < B.length;i++){
               let l = B[i][0];
               let r = B[i][1];
   
               if(l==0)
                   ans[i] = pfOdd[r];
               else
                   ans[i] = pfOdd[r] - pfOdd[l-1];
           }
   
           return ans;
       }
   };
   