module.exports = { 
    //param A : integer
    //return a array of array of integers
       generateMatrix : function(A){
           // Initialize an empty matrix filled with zeros
           // const matrix = Array.from({ length: A }, () => Array(A).fill(0));
           let matrix = [];
           for(let i=0;i < A;i++){
               matrix[i] = [];
               for(let j=0;j < A;j++){
                   matrix[i][j] = 0;
               }
           }
           // console.log(matrix)
           let val = 1;
           let left = 0;
           let top = 0;
           let right = A-1;
           let bottom = A-1;
   
           while(val <= A*A){
   
               // top wall
               for(let i=left;i <= right;i++){
                   matrix[top][i] = val++; 
               }
               // console.log(matrix);
               top ++;
               // right wall
               for(let i=top;i <= bottom;i++){
                   matrix[i][right] = val++;
               }
   
               right--;
   
               // bottom wall
               for(let i=right;i >= left;i--){
                   matrix[bottom][i] = val++;
               }
   
               bottom--;
               // left wall
               for(let i=bottom;i >= top;i--){
                   matrix[i][left] = val++;
               }
   
               left++;
           }
           return matrix;
       }
   };
   