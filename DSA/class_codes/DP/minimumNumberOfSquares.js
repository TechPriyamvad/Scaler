const dp = [];
module.exports = { 
 //param A : integer
 //return an integer
	countMinSquares : function(A){
        if(A==0)
            return A;
        
        if(dp[A]!=undefined)
            return dp[A];
        
        let currMin = Number.MAX_SAFE_INTEGER;
        for(let x=1;x*x <= A;x++){
            currMin = this.findMin(currMin,this.countMinSquares(A - (x*x)));
        }

        dp[A] = currMin + 1;
        return dp[A];
	},

    findMin: function(num1,num2){
        return num1 < num2 ? num1 : num2;
    }
};
