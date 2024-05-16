"use strict";
// case sensitive
var myName = "hamza";
var myname = "khan";
var mynamE = "khan";
// console.log(myName, mynamE, myname);
// implicit type vs explicit type
var myCountry = "Pakistan";
var myUnkown;
var myState = "ASia";
var myNumber = 23;
var myCount;
myCount = 23;
// Operators
// Arithmetic Operators
// + , - , * , / , % , **
let num1 = 20;
let num2 = 5;
// console.log(num1, num2);
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
let result = num1 + num2;
// console.log(result);
let num3 = 5;
let num4 = 2;
let res = num3 % num4;
// console.log(res);
let res2 = num4 ** num3;
// console.log(res2);
// Bedmas
// bracket , division/multiplication, addition/Subraction
// left to right
let calculation = 2 + 4 * 5 - (6 + 2) / 5;
// console.log(calculation);
//  2 + 4 * 5 - 8 / 5
// 2 + 20 - 8 / 5
// 2 + 20 - 1.6
// 22 -1.6
// 20.4
// Assignment Operators
// = , += , -=, *=, /=
let name1 = 4;
// console.log(name1);
// how to change the variable value
// name1 = 6;
// console.log(name1);
// name1 = name1 + 2;
// console.log(name1);
let res4 = (name1 += 2);
// console.log(name1);
// name1 += 2   ===   name1 = name1 + 2
name1 /= 2;
// console.log(name1);
// Comparison Operators return boolean
// === , !== , == , != , > , < , <= , >=
let nume1 = 2;
let nume2 = 2;
// console.log(nume1 == nume2); // values same
// console.log(nume1 != nume2); // values check
// console.log(nume1 === nume2);  // type check also with calue
// console.log(nume1 !== nume2);
// console.log(2 > 5);
// console.log(5 <= 5);
// Logical Operators
// && , || , !
let number1 = 5;
let number2 = 6;
// let res9 = number1 === 5 && number2 !== 6;
// console.log(res9);
let res9 = number1 !== 5 || number2 !== 6;
console.log(res9);
let show_not = !res9;
console.log(show_not);
