module.exports = { 
    //param A : array of characters
    //return a array of characters
       to_upper : function(A){
           // Approach:
           // iterate over string
           // check whether character is in lowercase range or not
           const ans = [];
           let diff = 'a'.charCodeAt(0) ^ 'A'.charCodeAt(0);
   
           for(let i=0;i < A.length;i++){
               if(A[i] >= 'a' && A[i] <= 'z'){
                   ans.push(String.fromCharCode(A[i].charCodeAt(0) ^ diff));
               }
               else
                   ans.push(A[i]);
           }
   
           return ans;
       }
   };
   