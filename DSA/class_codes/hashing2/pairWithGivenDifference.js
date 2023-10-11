module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
           // let set = new Set();
           // B = BigInt(B);
           // let count = 0;
           // for(let i=0;i < A.length;i++){
           //     let x = BigInt(A[i]);
           //     let y = (x - B);
           //     console.log(count++);
           //     // console.log(x,y);
           //     if(set.has(y)){
           //         // console.log("exists!!!");
           //         return 1;
           //     }
           //     else
           //         set.add((x));
           // }
           // // console.log(set);
           // return 0;
   
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
   
           for(let i=0; i < A.length;i++){
               let x = A[i];
               let y = x - B;
   
               if(x==y && map.has(y) && (map.get(x)>1))
                   return 1;
               if(x!=y && map.has(y))
                   return 1;  
           }
   
           return 0;
       }
   };
   