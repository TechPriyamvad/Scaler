module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let map = new Map();
           for(let i=0;i < A.length;i++){
               if(map.has(A[i])){
                   let ov = map.get(A[i]);
                   let nv = ov + 1;
                   map.set(A[i],nv);
               }
               else
                   map.set(A[i],1);
           }
   
           // console.log(map);
           for(let i=0; i < A.length;i++)
           {
               if(map.get(A[i]) > 1)
                   return A[i];
           }
   
           return -1;
       }
   };
   