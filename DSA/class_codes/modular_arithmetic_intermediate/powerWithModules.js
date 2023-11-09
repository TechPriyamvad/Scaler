module.exports = { 
    //param A : integer
    //param B : integer
    //param C : integer
    //return an integer
       solve : function(A, B, C){
           let ans=BigInt(1);
           for(let i=1;i <= B;i++){
               ans = (ans * BigInt(A))%BigInt(C);
           }
   
           return Number(ans%BigInt(C));
       }
   };
   