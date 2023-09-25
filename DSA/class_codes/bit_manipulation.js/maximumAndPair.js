module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ans = 0;

    for (let i = 0; i < A.length; i++) {
      A[i] = Number(A[i]);
    }
    // iterate over 32 bits of integer
    for (let b = 31; b >= 0; b--) {
      // count how many elements have that bit set
      let count = 0;
      for (let i = 0; i < A.length; i++) {
        count += (A[i] >> b) & 1;
      }
      // console.log(count)
      // Why we are putting zero on all bits of an array element when count >= 2
      if (count >= 2) {
        // console.log(b)
        ans |= 1 << b;
        for (let i = 0; i < A.length; i++) {
          if (((A[i] >> b) & 1) == 0) A[i] = 0;
        }
      }
      // console.log(A);
    }
    // console.log(ans);
    return ans;
  },
};
