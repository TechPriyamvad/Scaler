module.exports = {
  //param A : array of array of integers
  //return an integer
  calculateMinimumHP: function (A) {
    // Solving this problem using bottom up approach(tabulation)

    // console.log(A[0].length,A.length);
    // A[0].length=> columns
    // A.length => rows
    let ans = [];
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        A[i][j] = Number(A[i][j]);
      }
    }

    let rLen = A.length - 1;
    let cLen = A[0].length - 1;
    // console.log(rLen,cLen)
    for (r = rLen; r >= 0; r--) {
      ans[r] = [];
      for (c = cLen; c >= 0; c--) {
        let x = 0;
        // minimum initial health for bottom right cell
        if (r == rLen && c == cLen) x = 1;
        // minimum initial health for last row cells
        else if (r == rLen) {
          x = ans[r][c + 1];
        }
        // mimimum initial health for last column cells
        else if (c == cLen) {
          x = ans[r + 1][c];
        }
        // minimum initial health other than last row and column cells
        else {
          x = this.min(ans[r + 1][c], ans[r][c + 1]);
        }
        // computer miinimum initial health for a cell
        ans[r][c] = this.max(x - A[r][c], 1);
      }
      // console.log(ans[r]);
    }

    return ans[0][0];
  },

  min: function (A, B) {
    return A < B ? A : B;
  },

  max: function (A, B) {
    return A > B ? A : B;
  },
};
