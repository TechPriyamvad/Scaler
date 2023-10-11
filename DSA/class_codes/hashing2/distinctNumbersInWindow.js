module.exports = { 
    //param A : array of integers
    //param B : integer
    //return a array of integers
       dNums : function(A, B){
           // B: window
           let map = new Map();
           let ans = [];
           for(let i=0; i < B;i++){
               if(map.has(A[i])){
                   let ov = map.get(A[i]);
                   let nv = ov + 1;
                   // console.log(ov+"!!!!!")
                   map.set(A[i],nv);
               }
               else
                   map.set(A[i],1);
           }
   
           let countDele = map.size;
           ans.push(countDele);
   
           let s = 1;
           let e = B;
   
           // console.log(map);
           while(e < A.length){
               let oldF = map.get(A[s-1]);
               map.set(A[s-1],oldF-1);
               if((map.get(A[s-1])) == 0)
                   map.delete(A[s-1]);
               // console.log(map);
               if(map.has(A[e]))
               {
                   let ov = map.get(A[e]);
                   let nv = ov + 1;
                   map.set(A[e],nv);
               }
               else
                   map.set(A[e],1);
                   
               countDele = map.size;
               ans.push(countDele);
               ++s;
               ++e;
           }
           return ans;
       }
   };
   