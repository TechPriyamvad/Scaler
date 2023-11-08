module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           // sort array in descending order
           A.sort(function(a,b){return b - a});
           
           let sum = 0;
           // sum of all elements
           for(let a=0 ;a < A.length;a++)
           {
              sum += A[a]*(a+1);
           }
           return sum;
       }
   };
   