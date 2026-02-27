// console.log("Hello World!!");
// var a;// Reinitialize and redclare
// a=10;
// var a;
// a=20;
// //Reinitialize
// let b=10;
// //let b
// b=20;
// //can't redclare and reinitialize
// const c=30;
// console.log(a,b,c);


//primitive datatypes
var num=10;
var str="varsha";
var bool=true;
var un;//undefined type
var symbol=Symbol('li');//symbol type
var nu=null;
var big=12345588790088n;
console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(un));
console.log(typeof(symbol));
console.log(typeof(nu));
console.log(typeof(big));

//non-primitive datatypes
var arr=[1,2,3,4,5]//array
console.log(arr);
console.log(typeof arr);

var Obj={
    name:"Varsha",
    dept:"DS"
}
console.log(Obj);
console.log(typeof Obj);

//Arithmetic operator
var a=10;
var b="2";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Relational operators
var a=10;
var b="20";
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);
console.log();
//logical operators
var a=true;
var b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);