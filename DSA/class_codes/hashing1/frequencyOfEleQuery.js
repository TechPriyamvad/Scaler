module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //return a array of integers
       solve : function(A, B){
           let ans = [];
           let map = new Map();
   
           // create hashmap
           for(let i=0; i < A.length;i++){
               // if array element exists in hashmap
               if(map.has(A[i])){
                   let ov = map.get(A[i]);
                   let nv = ov + 1;
                   map.set(A[i],nv);
               }
               else{
                   map.set(A[i],1);
               }
           }
   
           // console.log(map);
           // find frequency of each ele in b array
           for(let i=0; i < B.length;i++){
               if(map.has(B[i]))
                   ans.push(map.get(B[i]));
               else
                   ans.push(0);
           }
   
           return ans;
       }
   };
   