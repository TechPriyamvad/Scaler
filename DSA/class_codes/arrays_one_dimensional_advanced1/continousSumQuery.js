module.exports = { 
    //param A : integer
    //param B : array of array of integers
    //return a array of integers
       solve : function(A, B){
           // return [B.length];
           let arrBLen = B.length;
           let ans = [];
           for(let i=0;i < (A+1);i++){
               ans[i] = 0;
           }
   
           for(let i=0;i < arrBLen;i++){
               let x = B[i][0];
               let y= B[i][1];
               let z = B[i][2];
               ans[x] += z;
               if((y+1) < (A+1))
                   ans[y+1] += (-z);
           }
   
           let finalAns = [];
           for(let i=0;i < A;i++){
               finalAns[i] = ans[i+1];
           }
           for(let i=1;i < A;i++){
               finalAns[i] += finalAns[i-1]; 
           }
           return finalAns;
       }
   };
   