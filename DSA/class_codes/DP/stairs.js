let dp = [];
module.exports = { 
 //param A : integer
 //return an integer
	climbStairs : function(A){
        if(A <= 1)
            return 1;
        
        if(dp[A] != undefined)
            return dp[A];
        
        dp[A] = (this.climbStairs(A-1) + this.climbStairs(A-2))% 1000000007;

        return dp[A];
	}
};
