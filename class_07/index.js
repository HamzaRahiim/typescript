"use strict";
// ****************************** Function ********************************
//syntax
// function word
// welcome function name
// body console.log
function welcome() {
    // main body of the function
    console.log("helllo function");
}
// welcome(); // calling function
// welcome(); // calling function
// console.log("checking file");
// function addition(a: number, b: number) {
//   let res = a + b;
//   console.log(res);
// }
// addition(1, 2); // arguments
// function
// parameters
// arguments
function login(userName) {
    console.log(`Welcome dear ${userName}`);
}
// login("Hubaish");
// login("Ali");
// login("khan");
// function userData(
//   firstName: string,
//   lastName: string,
//   email: string,
//   age: number = 18, // default parametor
//   gender?: string   // optional operators
// ) {
//   let data = `${firstName} ${lastName} has age ${age} login successfully.`;
//   console.log(data);
// }
// userData("hubaish", "khan", "abc@gmail.com", 23);
// function sum(a: number, ...b: any) {
//   for (let i = 0; i < b.length; i++) {
//     let res = b[i] + a;
//     console.log(res);
//   }
// }
// sum(4, 2, 7, 8, 9, 0);
// function sum(b: any, ...a: any) {}
// // sum()
// let summ = function () {}; // anonymous function
// summ()
// let minus = function (x: number, y: number) {
//   return x - y;
// };
// // console.log(minus(4, 2));
// let res = minus(4, 2);
// console.log(res);
// let minus1 = function (x: number, y: number) {
//   console.log(x - y);
// };
// minus1(6, 2);
// function add(a: number, b: number) {
//   let res = a + b;
//   return res;
// }
// let me = add(4, 5);
// console.log(me);
// ******************************* Arrow Function ***********************************
// () => {}
// let addds = (a: any, b: any) => {
// let a = 56
//   return a + b;
// };
// console.log(addds(5, 5));
let short = (a, b) => {
    return a + b;
};
console.log(short(5, 6));
