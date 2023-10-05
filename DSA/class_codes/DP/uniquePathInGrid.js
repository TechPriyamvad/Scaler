module.exports = {
  //param A : array of array of integers
  //return an integer
  uniquePathsWithObstacles: function (A) {
    // Solving using bottom up approach(tabulation) of dynamic programming
    let dp = [];
    let rLen = A.length;
    let cLen = A[0].length;

    for (let r = 0; r < rLen; r++) {
      dp[r] = [];
      for (let c = 0; c < cLen; c++) {
        // number of ways for blocked cell;
        if (A[r][c] == 1) dp[r][c] = 0;
        // number of ways for first cell
        else if (r == 0 && c == 0) dp[r][c] = 1;
        // number of ways for for first row cells
        else if (r == 0) {
          dp[r][c] = dp[r][c - 1];
        }
        // number of ways for for first column cells
        else if (c == 0) {
          dp[r][c] = dp[r - 1][c];
        } else {
          dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
        }
      }
    }

    return dp[rLen - 1][cLen - 1];
  },
};
