module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
           for(let i=0;i < A.length;i++){
               A[i] = Number(A[i]);
           }
   
           // calculate number of elements less than B
           // window size
           let count = 0;
           for(let i=0; i < A.length;i++)
           {
               if(A[i] <= B)
                   count++;
           }
   
           // console.log(count);
           let greaterCount = 0;
   
           // finding minimum number of swaps for first window
           for(let i=0; i < count;i++){
               if(A[i] > B)
                   greaterCount++;
           }
   
           // console.log(greaterCount)
           let minSwaps = greaterCount;
           // console.log(minSwaps)
           // finding minimum number of swaps for remaining window
           for(let i=count; i < A.length;i++){
               // check removed element if greater than B
               if( A[i-count] > B)
                   greaterCount--;
               
               // check added element greater than B
               if(A[i]>B)
                   greaterCount++;
   
               
               // console.log(greaterCount,minSwaps)
               minSwaps = Math.min(minSwaps,greaterCount);
           }
           return minSwaps;
       }
   };
   