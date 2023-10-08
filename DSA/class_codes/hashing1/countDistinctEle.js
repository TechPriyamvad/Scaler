module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           // Approach: create a hashset and store array elements in it
           // as hashset store only unique ele so hashset size will represent number of unique elements
   
           let set = new Set();
           for(let i=0;i < A.length;i++){
               set.add(A[i]);
           }
   
           // let uniqueCount = 0;
           // // console.log(typeof(set.keys()));
           // for( const key of set.keys()){
           //     uniqueCount++;
           // }
   
           // return uniqueCount;
           return set.size;
       }
   };
   