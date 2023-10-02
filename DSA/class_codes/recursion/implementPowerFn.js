// Note: Use bigint to store data in variables as calculation value may exceed 10^9

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  pow: function (A, B, C) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.
    // assumption given A,b calculate and return power A raised to b
    if (A == 0) {
      return 0;
    }
    // base condition
    if (B == 0) return 1;

    A = (A + C) % C;

    // let ans = 1n;
    // main logic
    let ans = BigInt(this.pow(A, Math.floor(B / 2), C));

    // even power
    ans = (ans * ans) % BigInt(C);

    // odd power
    if (B % 2 != 0) {
      ans = (ans * BigInt(A)) % BigInt(C);
    }

    return Number((ans + BigInt(C)) % BigInt(C));
  },
};
