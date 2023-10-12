module.exports = { 
    //param A : string
    //return a strings
       solve : function(A){
           // Approach: Use two pointer's technique
           // Note: As strings are immutable in javascript, we cannot directly swap individual characters of string
           // So we need to convert string into array, then perform swap operation on array and then convert array back into string
           let s = 0;
           let e = A.length-1;
           let ansStr = "";
           let ansArr = [];
   
           for(let i=0;i < A.length;i++){
               ansArr[i] = A[i];
           }
   
           while(s < e)
           {
               // this.swap(A,s,e);
               let temp = ansArr[s];
               ansArr[s] = ansArr[e];
               ansArr[e] = temp;
               // console.log(A[s],A[e],temp);
               // console.log(A[s].charCodeAt(0),A[e].charCodeAt(0),temp);
               s++;
               e--;
           }
           // console.log(s,e);
   
           for(let i=0; i < ansArr.length;i++){
               ansStr += ansArr[i];
           }
   
           return ansStr;
       },
       // swap(str,a,b){
       //     let temp = str[a];
       //     str[a] = str[b];
       //     str[b] = temp;
       // }
   };
   