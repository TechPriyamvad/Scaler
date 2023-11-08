module.exports = { 
    //param A : array of integers
    //return a strings
       largestNumber : function(A){
           for(let i=0;i < A.length;i++){
               A[i] = Number(A[i]);
           }
   
           if(A[0]==0)
               return 0;
           A.sort(this.compareFn.bind(this));
           let ans="";
           for(let i=0; i < A.length;i++){
               ans += A[i];
           }
   
           return ans;
       },
       compareFn:function(a,b){
           let r1 = this.concatenate(a,b); 
           let r2 = this.concatenate(b,a);
           // console.log("a and b");
           // console.log(a,b);
           // console.log("r1 and r2");
           // console.log(r1,r2);
           if(r1 > r2){
               // console.log("a"+a);
               return -1;
           }
           else if(r1==r2 && a > b){
               // console.log("a"+a);
               return -1;
           }
           else{
               // console.log("b"+b);
               return 1;
           }
       },
       concatenate:function(n1,n2){
           let ans = 0;
           let mul=1;
           let tempN2 = n2;
           while(n2 > 0){
               n2 = parseInt(n2/10);
               mul *= 10;
               // console.log(n2)
           }
           // console.log(n1,tempN2,mul);
           ans = ((n1*mul)+tempN2);
           // console.log(ans);
           return ans;
       }
   };
   