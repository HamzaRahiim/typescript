"use strict";
// // increment
// let myNumb1 = 5;
// // myNumb1++; // 6
// console.log(myNumb1++);  // 5
// console.log(myNumb1--);  // 6
// console.log(myNumb1); // 5
// // myNumb1++; // 7
// // myNumb1++; // 8
// // console.log(myNumb1);
// ******************* Array ******************************
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "mango";
let fruit4 = "peach";
// let mySchool: string[] = ["apple", "banan", "mango"];
// console.log(mySchool);
// console.log(mySchool.length);
// mySchool.push("I am push");
// console.log(mySchool);
// console.log(mySchool.length);
// let mySchool: string[] = ["apple", "banan", "mango"];
// mySchool.pop();
// mySchool.pop();
// console.log(mySchool);
let mySchool = ["apple", "banan", "mango"];
//     index                  0        1        2
//     length                 1         2        3
let res = mySchool[3];
// console.log(res); // apple
// mySchool.shift();
// console.log(mySchool);
// mySchool.unshift("start");
// console.log(mySchool);
// ****************************** For loop **********************************
// for (let i = 0; i <= 1; i++) {
//   console.log("I am body of for loop " + i);
// }
// let i = 0; // initialization
// i < 5; // condition
// i++; // increment
let students = ["ahmad", "shahzad", "husbaish", "khan"];
students[0]; // ahmad
students[3]; // khan
// console.log(students.length);
students.push("ali");
console.log("I am before loop");
for (let i = 0; i < students.length; i++) {
    console.log(`Regsiter student name is ${students[i]}`);
}
console.log("I am after loop");
