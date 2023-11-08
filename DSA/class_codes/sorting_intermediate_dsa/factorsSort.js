module.exports = { 
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           for(let i=0;i < A.length;i++){
               A[i] = Number(A[i]);
           }
           // sort on the basis of number of factors
           A.sort(this.compareFn.bind(this));
           // console.log(typeof this.calcFactor);
           return A;
       },
       compareFn:function(a,b){
           let f1 = this.calcFactor(a);
           let f2 = this.calcFactor(b);
           if(f1 < f2)
               return -1;
           else if((f1==f2) && (a < b)){
               return -1;
           }
           else
               return 1;
       },
       calcFactor:function(num){
           let ans=0;
           for(let i=1;i*i <= num;i++){
               if(num%i==0)
               {
                   if((num/i)==i){
                       ans += 1; 
                   }
                   else{
                       ans += 2;
                   }
   
               }
           }
   
           return ans;
       }
   };
   