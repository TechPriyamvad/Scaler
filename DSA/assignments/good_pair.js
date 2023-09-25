module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B)
       {
           let n = A.length;
           for(let i = 0; i < n; i++)
           {
               for(let j = i+1; j < n; j++)
               {
                   if( i == j)
                       continue;
                   if(A[i] + A[j] == B )
                       return 1;
               }
           }
           return 0;
       }
   };
   