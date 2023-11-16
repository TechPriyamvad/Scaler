module.exports = { 
    //param A : array of integers
    //param B : array of array of integers
    //return a array of integers
       solve : function(A, B){
           // convert all array elements to number type
           for(let i=0; i < A.length;i++){
               A[i] = Number(A[i]);
           }
           // create prefix sum even indices array
           let pfEven = [];
           pfEven[0] = A[0];
           for(let i=1; i < A.length;i++)
           {
               // odd index element
               if(i%2)
                   pfEven[i] = pfEven[i-1];
               else
                   pfEven[i] = pfEven[i-1] + A[i];
           }
   
           // calculate sum of all even indices for Q queries
           let ans = [];
           for(let i=0;i<B.length;i++){
               let l = B[i][0];
               let r = B[i][1];
   
               if(l==0)
                   ans[i] = pfEven[r];
               else
                   ans[i] = pfEven[r] - pfEven[l-1];
           }
           return ans;
       }
   };
   