"use strict";
// ************************** OBJECT ****************************
// array
// function
// object -> parkingslot = car -> model, make, position
// syntax
// let car = {
//   model: 2020,
//   make: "Toyota",
//   position: 1,
// };
// data accessing in object
// console.log(car.model);
// console.log(car["make"]);
// let student = {
//   name: "Student1",
//   class: 5,
//   roll_no: 12,
//   age: 20,
//   hobbies: ["reading", "cricket"],
//   address: "Swat",
// };
// dot notation
// console.log(student.hobbies);
// console.log(student.roll_no);
// // square bracket
// console.log(student["age"]);
// let student = {
//   name: "Student1",
//   class: 5,
//   roll_no: 12,
//   age: 20,
//   hobbies: ["reading", "cricket"],
//   address: "Swat",
// };
// delete
// delete student.age;
// console.log(student);
// modify the values
// student.class = 6;
// console.log(student);
// adding new property to object
// student.education = "matric";
// console.log(student);
// ******************* Type alias & interface ***********************
// type mix = string | number
// let myStudy: mix = "hamza"
// // myStudy = true
// type CarType = {
//   model: number;
//   make: string;
// };
// interface CarType {
//   model: number;
//   make: string;
//   position?: number;
//   owner?: string;
// };
// let car: CarType = {
//   model: 2020,
//   make: "Toyota",
//   position: 9,
// };
// delete car.position
// car.owner = "Pakistan";
// interface CarType {
//   model: number;
//   make: string;
// }
// let car: CarType = {
//   model: 2020,
//   make: "Toyota",
// };
// interface modernCartype extends CarType {
//   country: string;
// }
// let modernCar: modernCartype = {
//   model: 2020,
//   make: "Toyota",
//   country: "Pakistan",
// };
// type CarType = {
//   model: number;
//   make: string;
// };
// type moderCartype = CarType & {
//   country : string
// }
// type idType = { name: string };
// interface idtype {
//   name: string;
// }
// let myID: idtype = {
//   name: "l",
// };
// ************************** While Loop ***************
// syntax
// while (condition) {
//  // body
// }
// let n = 0;
// while (n < 0) {
//   n++;
//   console.log(n);
// }
// let n = 0;
// while (n === 3) {
//   console.log(n);
//   n++; // increment
// }
// ****************************** do-while *********************
// syntax
// do {
//   // body
// } while ( condition )
// let n = 0;
// do {
//   console.log(n);
//   n++;
// } while (n === 3);
// ************************* break & continue ***************
// let i = 0;
// while (i < 6) {
//   if (i === 3) {
//     break;  // terminate the loop
//   }
//   console.log(i);
//   i++;
// }
// let i = 0;
// while (i < 6) {
//   if (i === 3) {
//     i++;
//     continue; // skip that values
//   }
//   console.log(i);
//   i++;
// }
let i = 0;
while (i < 6) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}
