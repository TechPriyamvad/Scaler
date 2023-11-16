module.exports = { 
    //param A : array of integers
    //return an integer
       majorityElement : function(A){
           for(let i=0; i < A.length;i++)
           {
               A[i] = Number(A[i]);
           }
   
           let ele = A[0];
           let freq = 1;
   
           for(let i=1;i < A.length;i++){
               if(freq==0){
                   ele = A[i];
                   freq = 1;
               }
               else if(ele != A[i]){
                   freq--;
               }
               else
                   freq++;
           }
   
           let count = 0;
           for(let i=0; i< A.length;i++){
               if(ele == A[i])
                   count++;
           }
   
           if(count > Math.floor(A.length/2))
            return ele;
           else
               return -1;
       }
   };
   