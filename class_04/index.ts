// ************************** Union Types************************** //
let myName: string = "hamza";
// myName = 23 throw an error

// syntax
// let myCountry: string | number = "Pakistan"
// myCountry = 34
let myCountry: string | number | boolean = "Pakistan";
myCountry = 34;
myCountry = true;
// myCountry = null

let myStatus: null = null;

// *************************** String Concatenation ***********************
let num1 = "hamza";
let num2 = 63;
let sum = num1 + num2;
// console.log(sum);
// console.log(typeof sum);

let num3 = "Pakistan";
let num4 = true;
let add = num3 + num4;
// console.log("Addition of given numbers " + add);
// console.log(typeof add);

// let name1 = "Pakistan";
// let namae2 = "Zindabad";
// let res = name1 + namae2;
// console.log(res);

// back-ticks `` text is consider a string values
// best practice advance level
// when we not get any result in terminal
// console.log not use
// not save
let name1 = "user";
let namae2 = "Zindabad";
let res = `Hello, ${name1}`;
// console.log(res);
// let myCheck = `I am Living in swat ${name1}`
// console.log(`My name is ${name1}`);
// console.log("My name is " + name1);

// ******************** if - else **************************
// syntax
// if (condition) {
//     // run when conidtion is true
// } else {
//     // run when consition is false
// }

// let passowrd = "india";

// if (passowrd === "Pakistan") {
//   console.log("I am login");
// } else {
//   console.log("I am else body");
// }

let num = 3;

// if (num > 5) {
//   console.log("You are greater than 5");
// } else {
//   console.log("You are less than 5");
// }

// ************************ conditional Operators *******************

// ternory operators
// (condition) ? "true body" : "false body"
num > 5
  ? console.log("You are greater than 5")
  : console.log("You are less than 5");
