module.exports = { 
    //param A : array of integers
    //return an integer
       singleNumber : function(A){
   
           for(let i=0;i < A.length;i++){
               A[i] = Number(A[i]);
           }
           let ans=0;
   
           for(i=0;i < 32;i++){
               let count=0;
               for(let j=0; j < A.length;j++){
                   count += (A[j]>>i)&1;
               }
   
               if(count%3==1){
                   ans |= (1<<i);
               }
           }
   
           return ans;
       }
   };
   