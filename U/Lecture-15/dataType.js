let a=10;
console.log(typeof(a));
a="str";
console.log(typeof(a));
a=true;
console.log(typeof(a));
a=[1,2,3,4,5,6];
console.log(typeof(a));
a=[1,"hgdfh",true,567];
console.log(typeof(a));





// object -> key : value 
let Person={
    id:1212,
    Isadult:true,
    name:"Rohit"
}

console.log(Person);
console.log(typeof(Person));
console.log("id",Person.id);
console.log("name",Person.name);



// make a cart object having Properties 
//  P_name,P_price,P_desc,P_img_url,P_quantity,IsAvailable,p_rating,P_review,p_variety:[a,b,c]




let str="abcdabcdhmjhghfd";
console.log(str.concat("hjdsf"));
console.log(str.lastIndexOf('c'));
console.log(str.indexOf('b'));
console.log(str.includes('abcdhmj'));
console.log(str.split('').reverse().join(''));

let str1 ="The sky is blue"
// op="blue is sky The";
// op="ehT yks si eulb"

console.log(str1.split(' ').reverse().join(" "));