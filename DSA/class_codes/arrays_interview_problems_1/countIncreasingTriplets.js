module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let ans = 0;
           let left = 0;
           let right=0;
           let arrLen = A.length;
   
           for(let i=0;i < arrLen;i++)
           {
               left = 0;
               right = 0;
               // count number of elements less than ith element
               for(let j=i-1;j >= 0;j--){
                   if(A[j] < A[i])
                       left++;
               }
               
               // count number of elements greater than ith element
               for(let j=i+1;j < arrLen;j++){
                   if(A[j] > A[i])
                       right++;
               }
               ans += (left*right);
               // console.log(left,right,ans);
           }
   
           return ans;
       }
       // min:function(a,b){
       //     return a < b ? a:b;
       // }
   };
   