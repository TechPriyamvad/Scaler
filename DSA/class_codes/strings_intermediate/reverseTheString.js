module.exports = { 
    //param A : string
    //return a strings
       solve : function(A){
           let ansArr = [];
           let cntSpace = 0;
           let ansStr = "";
   
           for(let i=A.length-1; i >= 0;i--)
           {
               if(A[i] != ' ')
                   ansArr.push(A[i]);
   
               // reverse a word in a string and add word to answer string
               if(A[i] == ' ' || (i==0))
               {
                   let s=0;
                   let e=ansArr.length-1;
                   // reverse word
                   while(s < e)
                   {
                       let temp = ansArr[s];
                       ansArr[s] = ansArr[e];
                       ansArr[e] = temp;
                       s++;
                       e--;
                   }
                   // add reversed word to answer string
                   for(let j=0;j  < ansArr.length;j++){
                       ansStr += ansArr[j];
                   }
   
                   // move i until next non space character
                   for(let j=i;A[j] == ' ';j--){
                       i = j;
                   }
   
                   ansArr = [];
                   // add a space
                   ansStr += '\x20';
                   // console.log(ansArr);
                   // console.log(ansStr);
                   // console.log(i);
               }
           }
           // console.log(cntSpace);
           return ansStr.trim();
       }
   };
   