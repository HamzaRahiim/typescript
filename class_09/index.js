"use strict";
// ************************** Switch Statement ************************
// syntax
// concept
// fallthrough concept
// switch (expression) {
//   case "":
//     // body
//   case "":
//     // body
//   case "":
//     // body
//   default:
//     // body
// }
// let grade = "C";
// switch (grade) {
//   case "A":
//     console.log("Excellent Marks");
//     break;
//   case "B":
//     console.log("Good Marks");
//     break;
//   case "C":
//     console.log("Fail");
//     break;
//   default:
//     console.log("Invalid grade");
// }
// let grade = "A";
// switch (grade) {
//   case "A":
//     console.log("Excellent Marks");
//   case "B":
//     console.log("Good Marks");
//   case "C":
//     console.log("Fail");
//   default:
//     console.log("Invalid grade");
// }
// let category = "plant";
// switch (category) {
//   case "Cat":
//   case "Dog":
//   case "Cow":
//     console.log("Animals");
//     break;
// }
// const userInput = 2;
// const userInput2 = 4;
// const operator = "-";
// switch (operator) {
//   case "+":
//     let result = userInput + userInput2;
//     console.log(result);
//     break;
//   case "-":
//     let result2 = userInput - userInput2;
//     console.log(result2);
//     break;
//   default:
//     console.log("enter correct opeators");
// }
// ************************** type assertion *************************
// type assertion allows you to change the type of a variable
// type assertion is used to provide type safety
// two ways for type assertion
// as
// let dataApi: any = "khan";
// let res = (dataApi as string).length;
// console.log(res);
// angle-brakcet <>
// let dataApi: any = "khan";
// let res = (<string>dataApi).length
// console.log(res);
// interface apiType {
//   name: string,
//   age: number
// }
// let api : any = {
//   name: "khan",
//   age: 23
// }
// let res = (api as apiType).age
// ************************* Escape characters *******************
// let myBio: string = 'I am khan, from karachi. it"s beautiful';
// console.log(myBio);
let myBio = 'I am khan, from karachi. \nit"s beautiful';
console.log(myBio);
// let myBio: string = 'I am khan, from karachi.\tit"s beautiful';
// console.log(myBio);
