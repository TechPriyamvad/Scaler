module.exports = { 
    //param A : integer
    //return an integer
       solve : function(A){
           // find nearest power of 2 <= A
           let p = this.nearestPower(A);
           return 2 * (A-p) + 1;
           // return p;
       },
       nearestPower(A){
           let pow = 1;
           while(A >= (pow*2))
               pow = pow * 2;
           return pow;
       }
   };
   