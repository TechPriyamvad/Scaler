module.exports = { 
    //param A : integer
    //return an integer
       findAthFibonacci : function(A){
           // Assumption: given number A, return Ath fibonacci number
   
           // base condition
           if(A <= 1)
               return A;
           // main logic
           return this.findAthFibonacci(A-1) + this.findAthFibonacci(A-2);
       }
   };
   