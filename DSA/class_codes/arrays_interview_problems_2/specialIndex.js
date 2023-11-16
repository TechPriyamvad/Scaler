module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
   
           let arrLen = A.length;
           // convert all array element into number type
           for(let i=0; i < arrLen;i++){
               A[i] = Number(A[i]);
           }
   
           // build prefix sum even and odd array
           let pfEven = [];
           let pfOdd = [];
           pfEven[0] = A[0];
           pfOdd[0] = 0;
           for(let i=1;i < arrLen;i++){
               if(i%2)
                   {pfEven[i] = pfEven[i-1];
                   pfOdd[i] = pfOdd[i-1]+A[i];}
               else
                   {pfEven[i] = pfEven[i-1] + A[i];
                   pfOdd[i] = pfOdd[i-1];}
           }
           // console.log("h")
           let count=0;
           let tEven = 0;
           let tOdd = 0;
           // count number of special indexes
           for(let i=0; i < arrLen;i++){
               if(i==0){
                   tEven = pfOdd[arrLen - 1]  - pfOdd[i];
                   tOdd = pfEven[arrLen - 1] - pfEven[i]
               }
               else
               {
                   tEven = pfOdd[arrLen - 1]  - pfOdd[i] + pfEven[i-1];
                   tOdd = pfEven[arrLen - 1] - pfEven[i] + pfOdd[i-1];
               }
   
               if(tEven == tOdd)
                   count++;
           }
   
           return count;
       }
   };
   