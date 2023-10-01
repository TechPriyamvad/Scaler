module.exports = { 
    //param A : integer
       solve : function(A){
           this.printAto1(A);
           process.stdout.write("\n");
       },
       printAto1: function(A){
           if(A==0)
               return;
           process.stdout.write(A+" ");
           this.printAto1(A-1);
       }
   };
   