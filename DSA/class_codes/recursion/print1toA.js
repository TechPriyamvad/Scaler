module.exports = { 
    //param A : integer
       solve : function(A){
           this.print1toA(A);
           process.stdout.write("\n");
       },
       print1toA: function(A){
           if(A==0)
               return;
           this.print1toA(A-1);
           process.stdout.write(A+" ");
       }
   };
   