module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           // brute force approach
           // TC = O(n^2)
           // SC = O(1)
           // let isNoble = false;
           // for(let i=0;i < A.length;i++)
           // {
           //     let numGreEle = 0;
           //     for(let j=0;j < A.length;j++){
           //         if(A[j] > A[i])
           //             numGreEle++;
           //     }
   
           //     if(numGreEle == A[i])
           //     {
           //         isNoble = true;
           //         break;
           //     }
           // }
   
           // if(isNoble)
           //     return 1;
           // else
           //     return -1;
   
           // Optimised solution
   
           let isNoble = false;
           let cntGreEle = 0;
   
           // sort array in descending order
           A.sort((a,b)=>b-a);
   
           if(A[0] == 0)
           {
               isNoble=true;
               return 1;
           }
   
           for(let i=0; i < A.length;i++){
               // find first occurrence of element
               if(A[i-1]!=A[i])
                   cntGreEle = i;
               
               // check if element is isNoble
               if(cntGreEle == A[i])
               {
                   isNoble = true;
                   break;
               }
           }
   
           if(isNoble)
               return 1;
           else
               return -1;
   
       }
   };
   