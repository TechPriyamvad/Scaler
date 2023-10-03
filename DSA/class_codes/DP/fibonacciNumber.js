// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

// each array element contains result of function calls
let dp = [];

// How to take input in javascript
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
//   console.log(typeof(chunk));
//   console.log(chunk+"b");
  if (chunk !== null) {
    //  console.log(typeof(chunk.toString()));
    const userInput = parseInt(chunk.toString());
    // console.log(userInput+","+typeof(userInput))
    // Process the chunk of data
    for(let i=0; i <= userInput;i++){
        dp[i] = Number(-1);
    }
    let result = findFibonacciNumber(userInput);
    console.log(result);
  }
});

// const userInput = process.stdin.read(4);
// console.log(dp[1])
function findFibonacciNumber(A){
    if(A <= 1){
        return A;
    }

    // checking whether function call result is stored in array
    if(dp[A] != -1)
        return dp[A];
    
    // storing A th function result in array
    dp[A] = findFibonacciNumber(A-1) + findFibonacciNumber(A-2);
    // console.log(dp);

    return dp[A];
}

// console.log(userInput);
// if( userInput != null){
//     console.log(userInput);
// }

// process.stdin.end();