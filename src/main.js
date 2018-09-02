"use strict";
function testVar(){
  var a=60;
  if(true){
    var a = 30;
    console.log(a);
  }
  console.log(a);
}
function testLet(){
  let a=60;
  if(true){
    let a = 30;
    console.log(a);
  }
  console.log(a);
}
function testVarFor(){
  for(var i=0;i<10;i++){
    console.log(i);
  }
  console.log(i);
}
function testLetFor(){
  for(let i=0;i<10;i++){
    console.log(i);
  }
  //uncomment the below line to know the scope of let
  //console.log(i);
}
//testVar();
//testLet();
//testVarFor();
//testLetFor();
class User {
  constructor(username,email){
    this.username=username;
    this.email=email;
  }
  register(){
    console.log(this.username+"  is now registered");
  }
  static userCount(){
    console.log("there are 50 users");
  }
}
//let bob= new User('jithin','chjithin10@gmail.com');
//bob.register();
//User.userCount();

class Member extends User{
  constructor(username,email,memberPackage){
    super(username,email);
    this.memberPackage=memberPackage;
  }
  getPackage(){
    console.log(this.username+'is subscribed to '+this.memberPackage+' Package');
  }
}
let mem =  new Member('raju','raju@gmail.com','standard');
//mem.getPackage();
//mem.register();
let name='John';
function makeUpperCase(word){
  return word.toUpperCase();
}
 let template = `<h1>${makeUpperCase('hello')}, ${name}
<p>This is a simple template in javascript </p> `;
document.getElementById("template").innerHTML = template;

// string functions
let theString = "hello javascript";
//console.log(theString.startsWith('hello'));
//console.log(theString.includes('abc'));
//console.log(theString.endsWith('javascript'));
//console.log(isNaN('hello'));
//console.log(isNaN(1));

// default value
function greeting($greet='hello world'){
  console.log($greet);
}
greeting();

// spread operator
let args = [1,2,3];
function test(){
  console.log(args);
}
//test(...args);
//test.apply(null,args);
//test();

// how to create set
// set will not store duplicates
let myArray =  [1,22,22,44,55];
let mySet = new Set(myArray);
mySet.delete(1);
mySet.add(100);
mySet.forEach(function(value){
  //console.log(value);
})
// console.log(mySet.size);
//map example
let map1 = new Map([['a1','hello'],['b1','good morning']]);
map1.set('c1','hi');
map1.delete('a1');
//console.log(map1);

let carWeakSet = new WeakSet();
let car1={
  Make:'Honda',
  Model:'civic'
};
carWeakSet.add(car1);
//console.log(carWeakSet);

let carWeakMap = new WeakMap();
let car2={
  make:'Toyota',
  model:'camry'
};
let key={
  id:1
};
carWeakMap.set(key,car2);
//console.log(carWeakMap);
// normal Functions examples
let add = function(a,b){
  let result = a+b;
//  console.log(result);
  return false;
}
add(10,2);
// above normal function to arrow function
let addition = (a,b)=>{
  let result = a+b;
//  console.log(result);
  return false;
}
addition(11,2);
// complicated arrow functions and prototype
// prototype is used to save the memory
// FunctionName.prototype.variableName=10, is an assignment to that field
function Prefixer(prefix){
  this.prefix=prefix;
}
// declartion of array using function , and modifying it by iterating through map Function
// as it results in new array
Prefixer.prototype.prefixArray =function (arr){
//  let that=this;
  return arr.map((x)=>{
    //console.log(this.prefix + x);
  });
}

let prefix = new Prefixer('hello');
prefix.prefixArray(['john','david']);

// promises
// resolving promises
var myPromise = Promise.resolve('Foo');
myPromise.then((res)=>{
//  console.log(res);
})

// resolve and reject promise with certain time
var timePromise = new Promise(function(resolve,reject){
setTimeout(()=>resolve(4),2000);
});
timePromise.then((res)=>{
  //console.log(res);
})

// promises mostly used to fetch the data by doing the ajax request
function getData(method,url){
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onload = function(){
      if(this.status >=200 & this.status<300){
        resolve(xhr.response);
      }
      else {
        reject({
          status:this.status,
          statusText:xhr.statusText
        })
      }
    };
    xhr.onerror = function(){
      reject({
        status:this.status,
        statusText:xhr.statusText
      })
    };
    xhr.send();
  })
};

getData('GET','https://jsonplaceholder.typicode.com/todos').then(function(data){
  //console.log(data);
  let todos = JSON.parse(data);
//  console.log(todos);
  let output = '';
  for(let todo of todos){
    output +=  `
    <li>
    <h3>${todo.title}</h3>
    </li>
    `
  }
  document.getElementById("template1").innerHTML= output;
}).catch(function(err){
  console.log(err);
})
