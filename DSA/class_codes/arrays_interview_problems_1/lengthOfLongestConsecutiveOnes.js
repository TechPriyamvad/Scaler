module.exports = { 
    //param A : string
    //return an integer
       solve : function(A){
           let ans = 0;
           let onesOnLeft = 0;
           let onesOnRight = 0;
   
           let countOfOnes = 0;
           let strLen = A.length;
   
           for(let i=0;i < strLen;i++){
               if(A[i] == '1')
                   countOfOnes++;
           }
   
           // check if all characters are 1 in the string
           if(countOfOnes==strLen)
               return strLen;
           
           for(let i=0;i < strLen;i++){
               onesOnLeft = 0;
               onesOnRight = 0;
               if(A[i] == '0'){
                   // count number of ones on left side of i th element
                   for(j=i-1;j>=0;j--){
                       if(A[j]=='1')
                           onesOnLeft++;
                       else
                           break;
                   }
   
                   // count number of ones on right side of i th element
                   for(j=i+1;j < strLen;j++)
                   {
                       if(A[j] == '1'){
                           onesOnRight++;
                       }
                       else
                           break;
                   }
   
                   // check if we need to spare an extra one or not
                   if((onesOnLeft+onesOnRight)==countOfOnes)
                       ans = this.max(ans,(onesOnLeft+onesOnRight));
                   else
                       ans = this.max(ans,(onesOnLeft+onesOnRight+1));
   
               }
           }
           return ans;
       },
       max:function(a,b){
           return a > b ? a : b;
       }
   };
   