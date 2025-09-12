// let name1=prompt("enter your name");
// console.log(name1);

let menu=["roti","panner butter masala","chicken tikka","malai chaap","rajma chawal","leg piece","sweet"];

let inp=prompt("enter your fav food name");


// let flag=false;
// for(let i=0;i<menu.length;i++)
// {
//     if(inp.toLocaleLowerCase()==menu[i])
//         flag=true;
// }
// if(flag)
//     alert("Is avail");
// else
//     alert("Unavail")

console.log(menu.includes(inp));