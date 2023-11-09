module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           for(let i=0; i < A.length;i++){
               A[i] = Number(A[i]);
           }
           let ans = 0;
           let exp = 1;
           for(let i=A.length-1; i >= 0;i--){
               ans += ((A[i]*exp)%3)%3;
               exp = (exp * 10)%3;
           }
   
           return ((ans%3)==0) ? 1:0;
       }
   };
   