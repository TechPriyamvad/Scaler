module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
           for(let i=0; i < A.length;i++){
               A[i] = Number(A[i]);
           }
           let ans = 0;
           let exp = 1;
           for(let i=A.length-1; i >= 0;i--){
               ans += ((A[i]*exp)%B)%B;
               exp = (exp * 10)%B;
           }
   
           return ans%B;
       }
   };
   