module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    for (let i = 0; i < A.length; i++) {
      A[i] = Number(A[i]);
    }
    // XOR of all elements
    let XOR = 0;
    for (let i = 0; i < A.length; i++) {
      XOR ^= A[i];
    }

    for (let i = 1; i <= A.length + 2; i++) {
      XOR ^= i;
    }

    //    console.log(XOR);
    // find first set bit in XOR variable
    let b = 0;
    for (let i = 0; i < 31; i++) {
      if ((XOR >> i) & 1) {
        b = i;
        break;
      }
    }

    //    console.log(b);
    // group array elements according to the found set bit
    let XOR1 = 0,
      XOR2 = 0;
    for (let i = 0; i < A.length; i++) {
      if (((A[i] >> b) & 1) == 1) {
        XOR1 ^= A[i];
      } else {
        XOR2 ^= A[i];
      }
    }

    //    console.log(XOR1,",",XOR2);
    for (let i = 1; i <= A.length + 2; i++) {
      if (((i >> b) & 1) == 1) {
        XOR1 ^= i;
      } else {
        XOR2 ^= i;
      }
    }

    let result = [];
    if (XOR1 > XOR2) {
      result.push(XOR2);
      result.push(XOR1);
    } else {
      result.push(XOR1);
      result.push(XOR2);
    }
    return result;
  },
};
