module.exports = { 
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           let si = 0;
           let ei = A.length - 1;
   
           while(si <= ei)
           {
               this.swap(A,si,ei);
               si++;
               ei--;
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
   