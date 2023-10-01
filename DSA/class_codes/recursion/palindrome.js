module.exports = { 
    //param A : string
    //return an integer
       solve : function(A){
           // Assumption: given A , check A th string is palindrome or not
   
           // base condition
           if(A.length==1 || A.length==0)
               return 1;
   
           // main logic
           let len = A.length;
           let sCh = A[0];
           let eCh = A[len-1];
           if((sCh == eCh) && (this.solve(A.substring(1,len-1))))
               return 1;
           return 0;
       }
   };
   