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

/* /Relational operators
var a=10;
var b="10";
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);
console.log();

logical operators
var a=true;
var b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a); */

//primitive datatypes
// var num=10;
// var str="varsha";
// var bool=true;
// var un;//undefined type
// var symbol=Symbol('li');//symbol type
// var nu=null;
// var big=12345588790088n;
// console.log(typeof(num));
// console.log(typeof(str));
// console.log(typeof(bool));
// console.log(typeof(un));
// console.log(typeof(symbol));
// console.log(typeof(nu));
// console.log(typeof(big));

// //non-primitive datatypes
// var arr=[1,2,3,4,5]//array
// console.log(arr);
// console.log(typeof arr);

// var Obj={
//     name:"Varsha",
//     dept:"DS"
// }
// console.log(Obj);
// console.log(typeof Obj);

//Arithmetic operator
// var a=10;
// var b="2";
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);



//control statements
//1. conditional statements(if, if ....else , if else if else,switch)
// if even
/* var a=10;
if(a%2==0)
{
    console.log("even");
}

// if .... else(Odd or Even)
if(a%2==0)
{
    console.log(`${a} is Even`);//Templet Literal
}
else{
    console.log(`${a} is odd`);
}

// if else if else
var marks=80;
if(marks>90)
    console.log("O Grade");
else if (marks>70)
    console.log("A Grade");
else if(marks>35)
    console.log("B grade");
else
    console.log("fail");


// Ternary operator(condition ? true:false)
var a=5;
const result=(a%2==0)? `${a} is even`:`${a} is odd`;
console.log(result);

var marks=90;
const r=(marks>80)?'A':(marks>70)?'B':(marks>50)?'C':(marks>35)?'D':'Fail';
console.log(r);
 */

/* //switch
var day=6;
switch(day)
{
    case 1:{
        console.log("Monday");
        break;
    }
    case 2:{
        console.log("Tuesday");
        break;
    }
    case 3:{
        console.log("Wednesday");
        break;
    }
    case 4:{
        console.log("Thursday");
        break;
    }
    case 5:{
        console.log("Friday");
        break;
    }
    case 6:{
        console.log("Saturday");
        break;
    }
    case 7:{
        console.log("Sunday");
        break;
    }
    default:{
        console.log("Not Invalid");
    }
} */
//2. looping statements(for, while, do.. while)
//for loop
/* for(let i=0;i<=10;i++)
{
    console.log(i);
}
console.log();
//while loop
let num=1234;
var count=0;
while(num>0){
    count++;
    num=Math.floor(num/10);
}
console.log(count); */

//do while
/* var a=0;
do{
    console.log("Example do while");
}while(a!==0)
 */

//functions

//normal function
/* function add(){
    var a=80;
    var b=90;
    console.log(a+b);
}
add(); */

//with parameter
/* function add(a,b)
{
    console.log(a+b);
}
add(10,90); */

//return type
/* function add(a,b)
{
    return a+b;
}
var r=add(10,80);
console.log(r); */

//Arrow function(ES6)
/* var add=()=>{
    console.log("Arrow function");
}
add();

// with parameter
var add=(a=0,b=0)=>{
    console.log(a+b);
}
add(10,20); */

/* // return type
var add=(a,b)=>{
    return a+b;
}
console.log(add(10,20)) */

// callback function

/* var add=(a,b,demo)=>{
    demo(a+b);
}
var result=(res)=>{
    console.log(res);
}
add(10,20,result);
other way
var add=(a,b,demo)=>{
    var c=a+b;
    demo(a+b);
}
add(10,20,(res)=>{
    console.log(res);
})
for example odd numbers
add(10,20,(res)=>{
    for(let i=1;i<=res;i++){
        if(i%2==0){
            console.log(i);
        }

    }
})  */
//* /spread operator(es6)
/*var arr=[1,2,3];
var arr2=[...arr,4,5,6];
console.log(arr);
console.log(arr2);

//destructuring operator(es6)
var [m1,m2,m3,m4,m5]=[99,98,97,98,96];
console.log(m1);

//with objects
var{name,age,dept,contact} = {
    name:'varsha',
    age:19,
    dept:['ds','cs'],
    contact:{
        mobile:9177292489,
        email:'varshinivarsha@gmail.com'
    }
}
console.log(contact);
//for in(indexes it will show)(ES6)
var arr=[10,20,30,40];//
for(let i in arr){
    console.log(i,arr[i]);
}

var obj={
    name:"varsha",
    age:19,
    isActive:true
}
for(let key in obj)
{
    console.log(key,obj[key]);
}

// for of(ES6)
var arr=[10,20,30,40]
for(let val of arr)
{
    console.log(val);
}
// forEach(ES6)
arr.forEach((val,index)=>{
    console.log(val,index);
}) */

/* var arr=[1,2,3,4,5];
//Map
var double=arr.map((val)=>(val*2));
console.log(double);

// filter the array (in array - even or odd)
var even=arr.filter((val)=>(val%2==0));
console.log(even);

// reducer
var total=arr.reduce((sum,val)=>(sum+val),0)
console.log(total);

result=arr.map((val)=>val**2).filter((val)=>val%2==0).reduce((sum,val)=>(sum+val),0);
console.log(result); */

// hositing
/* console.log(a)
var a=10;

// for function hositing possible
 add();
 function add(){
    console.log(10+20);
 } */


//scope
// for var
/* var a=20; // Global scope
if(true)
{
   var b=10;//Block scope is not applicable,it will come if we declare in variable in block scope
}
console.log(a);
console.log(b); */

//Block space

/* let a=10;
if(true){
   let b=20;
}
console.log(a);
console.log(b);
*/
/* const a=10;
 if(true){
     const b=20;
 }
console.log(a);
console.log(b); */

//promise(ES6)
/* const promise=new Promise((resolve,reject)=>{
    var success=true;
if(success){
    resolve("Task Completed");
}
else{
    reject("Task not completed");
}
})
promise.then((message)=>{
console.log(message);
}).catch((err)=>{
console.log(err);
}) */

//setTimeout
/* const promise =new Promise((resolve,reject)=>{
    var success=true;
    if(success){
        setTimeout(()=>{
            resolve("Task Completed");
        },2000);
    }
    else{
        reject("Task not Completed");
    }
})
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err)); */

//setTimeout
/* const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var success = true;
        if (success) {
            resolve("Task Completed");
        }
        else {
            reject("Task not completed");
        }
    },5000);
});
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err));  */


//setInterval
/* var count=1
const IntervalCount=setInterval(()=>{
    console.log(count);
    count++;
    if(count>5){
        clearInterval(IntervalCount);
    }
},2000);
 */

//fetch
/* const getData=()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
}
getData().then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err)); */

//async and await
 const getData=async()=>{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        console.log(data);

    }
    catch(err){
        console.log(err)
    }
}
getData();