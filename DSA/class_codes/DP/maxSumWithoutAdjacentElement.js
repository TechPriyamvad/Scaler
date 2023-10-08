module.exports = { 
    //param A : array of array of integers
    //return an integer
       adjacent : function(A){
           let dp = [];
           let oneD = [];
           let rLen = A.length;
           let cLen = A[0].length;
   
           // convert 2d array into 1d array by taking maximum of elements in same column
           for(let r=0; r < 1;r++){
               for(let c=0; c < cLen;c++){
                   oneD[c] = this.max(A[r][c],A[r+1][c]);
               }
           }
   
           for(let r=0;r < oneD.length;r++){
               dp[r] = -1;
           }
   
           // console.log(oneD);
           dp[0] = this.max(oneD[0],0);
           if(oneD.length > 1){
               dp[1] = this.max(oneD[1],dp[0]);
           }
   
           // console.log(dp)
           // return this.maxGold(oneD,(oneD.length-1),dp);
           // calculation maximum sum
           for( let i=2;i < oneD.length;i++){
               dp[i] = this.max(dp[i-2]+oneD[i],dp[i-1]);
           }
   
           return dp[oneD.length-1];
       },
       // using memoization approach(top down approach)
       maxGold:function(input,idx,dp){
           if(idx <= 1)
           {
               return dp[idx];
           }
   
           if(dp[idx] != -1)
               return dp[idx];
           
           dp[idx] = this.max((input[idx] + this.maxGold(idx-2)),this.maxGold(idx-1));
           return dp[idx];
       },
       max:function(A,B){
           return A > B ? A:B;
       }
   };
   