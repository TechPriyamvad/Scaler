module.exports = { 
    //param A : array of characters
    //return a array of characters
       to_lower : function(A){
           let ans = [];
           // charCodeAt: this method converts character into its equivalent ascii code
           let diff = 'a'.charCodeAt(0) ^ 'A'.charCodeAt(0);
           // console.log(diff);
           for (let i = 0; i < A.length; i++) {
               // check whether the given character exists in uppercase range
               if (A[i] >= 'A' && A[i] <= 'Z') {
                   // String.fromCharCode: this method converts ascii code into character
               ans.push(String.fromCharCode(A[i].charCodeAt(0) ^ diff));
               } else {
               ans.push(A[i]);
               }
   
           }
   
           return ans;
   
       }
   
   }