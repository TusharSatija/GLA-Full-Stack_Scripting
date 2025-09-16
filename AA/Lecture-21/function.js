// Normal  function

function fun()
{
    console.log("This is fun function");
}
fun();
function add(a,b)
{
    return a+b;
} 
console.log(add(4,5));

// write a function to calculate factorial of n;
// wap to find permutaion of n ,r where n=5 , r=2;
//  (n!)/((n-r)!*r!)
// write a function to calculate sum of n natural number.

function factorial(n)
{
    let fact=1;
    for(let i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));
console.log(factorial(5)/(factorial(5-2)*factorial(2)));
function natural(n)
{
    return (n*(n+1))/2;
}
console.log(natural(4));