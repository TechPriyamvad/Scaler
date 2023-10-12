module.exports = { 
    //param A : string
    //return a strings
       solve : function(A){
   
           // store resultant string
           let ans = "";
           // calculate difference of lowercase and uppercase character
           let diff = 'a'.charCodeAt(0) ^ 'A'.charCodeAt(0);
   
           for(let i=0; i<A.length;i++){
               //check case of character
               let ch = A[i];
               ans += (String.fromCharCode(ch.charCodeAt(0)^diff));
           }
   
           return ans;
       }
   };
   