module.exports = { 
    //param A : string
    //return a strings
       longestPalindrome : function(A){
           let ans = 1;
           let curAns = 1;
           let prevAns = 1;
           let ansStr = "";
           for(let i=0 ;i < A.length;i++){
               let oddSubstr = this.palindromeLength(A,i,i);
               let evenSubstr = this.palindromeLength(A,i,i+1);
               prevAns = ans;
               ans = this.max(ans,this.max(oddSubstr.ansValue,evenSubstr.ansValue));
               // console.log(oddSubstr,evenSubstr,ans);
               curAns = ans;
               if(prevAns != curAns){
                   ansStr = "";
                   ansStr += oddSubstr.ansValue > evenSubstr.ansValue ? oddSubstr.ansStr : evenSubstr.ansStr;
                   // console.log(ans,ansStr);
               }
           }
   
           return A.length > 1 ? (ansStr.length > 0 ? ansStr:A[0]) : A[0];
       },
       max(a,b){
           return a > b ? a : b;
       },
       palindromeLength(A,i,j){
           let ansStr = "";
           while(i>=0 && j < A.length && A[i] == A[j]){
               i--;
               j++;
           }
   
           for(let k = i+1;k < j;k++)
           {
               ansStr += A[k];
           }
           return {ansValue:(j-i-1),ansStr};
       }
   };
   