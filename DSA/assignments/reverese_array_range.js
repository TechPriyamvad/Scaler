module.exports = { 
    //param A : array of integers
    //param B : integer
    //param C : integer
    //return a array of integers
       solve : function(A, B, C){
           while(B <= C)
           {
               this.swap(A,B,C);
               B++;
               C--;
           }
           return A;
       },
   
       swap: function(A,B,C)
       {
           let temp = A[B];
           A[B]=A[C];
           A[C]=temp;
       }
   };
   