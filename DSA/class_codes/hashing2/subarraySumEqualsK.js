module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
           // create a prefix sum array
           let pf = [];
           let nSubarr = 0;
           let map = new Map();
           pf[0] = A[0];
           if(pf[0]==B)
               nSubarr += 1;
   
           for(let i=1; i < A.length;i++){
               pf[i] = pf[i-1]+ A[i];
               if(pf[i]==B)
                   nSubarr += 1;
           }
   
           // console.log(pf);
           // insert prefix array elements in hashmap
           // for(let i=0; i < pf.length;i++){
           //     if(map.has(pf[i])){
           //         let ov = map.get(pf[i]);
           //         let nv = ov+1;
           //         map.set(pf[i],nv);
           //     }
           //     else{
           //         map.set(pf[i],1);
           //     }
           // }
   
           // console.log(map)
           // console.log(nSubarr);
           // counting number of subarrays using prefix sum array and hashmap
           for(let i=0; i < pf.length;i++){
               let x = pf[i];
               let y = x - B;
   
               if(map.has(y)){
                   // console.log(y);
                   nSubarr += map.get(y);
               }
               // nSubarr += map.get(y);
   
               if(map.has(x)){
                   let ov = map.get(x);
                   let nv = ov+1;
                   map.set(x,nv);
               }
               else{
                   map.set(x,1);
               }
           }
   
           return nSubarr;
       }
   };
   