// Problem: row wise sum
for(let r=0;r < N;r++)
{
    let sum=0;
    for(let c=0;c < M;c++)
    {
        sum += arr[r][c];
    }
    console.log(sum+"\n");
}

//Problem: 2d matrix max column sum

let max_sum = Integer.MIN_INT;
for(let c=0;c < M;c++)
{
    let sum = 0;
    for(let r = 0; r < N;r++)
    {
        sum += arr[r][c];
    }
    if(sum > max_sum)
    {
        max_sum=sum;
    }
}

// Problem: 2d matrices - print left diagonal 
for(let r=0;r < M;r++)
{
    for(let c = 0; c < N;c++)
    {
        if(r==c)
        {
            console.log(arr[r][c])
        }
    }
}

//Problem:2d matrices - print all diagonals from R->L

for(let r=0;r < N;r++)
{
    for(let c = M-1; c >= 0;c--)
    {
        console.log(arr[r][c] + "\t");
    }
    console.log("\n");
}