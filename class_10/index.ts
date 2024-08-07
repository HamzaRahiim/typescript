// ************************ Date Object *****************
// The `Date` object in JavaScript is a built-in object that provides methods for managing dates and times. It can be used to create, manipulate, compare, and format dates and times in your code. Here’s a brief overview of how it works:

// ### Creation

// You can create a `Date` object in various ways depending on the input you have:

// - **No parameters**: If you call `new Date()` without any arguments, it creates a `Date` object with the current date and time.
// - **Date string**: You can pass a date string (e.g., `"2024-06-25"`) to `new Date()` to create a date object representing that date.

// ### Methods

// `Date` objects come with several methods to perform operations on dates:

// - **Getters**: Methods like `getDate()`, `getMonth()`, `getFullYear()`, etc., retrieve parts of the date.
// - **Setters**: Methods like `setDate()`, `setMonth()`, `setFullYear()`, etc., allow you to modify parts of the date.

// const today = new Date();
// today.setDate(29);
// today.setFullYear(2020);
// console.log(today);

// console.log(today.getDate());
// console.log(today.getFullYear());
// console.log(today.getTime());
// console.log(today.getHours());
// 1 jan 1970

// let today = new Date(); // Current date and time
// console.log(today.toString()); // Converts today's date to string

// let timestampDate = new Date(1656054000000); // Create date from timestamp
// console.log(timestampDate.getFullYear()); // Get the year of the date

// ************************ Class ******************
// oop
// property
// methods
// constructor
// TypeScript, a superset of JavaScript, offers static typing and class-based object-oriented programming, which can make the code easier to read, debug, and scale, especially in large applications. One of its key features is the ability to define classes much like you would in languages such as Java or C#. A class in TypeScript can encapsulate data and functionalities that belong together in a robust and reusable component.

// Here’s an overview of some features that TypeScript classes can have:

// - **Fields**: Variables that hold data for objects
// - **Constructor**: A special method for initializing new objects
// - **Methods**: Functions that provide behavior for an object
// - **Access Modifiers**: Keywords like `public`, `private`, and `protected` that control access to class members

// function grt(a:number){
//     console.log("helo");

// }
// grt()

// class School {
//   // properties
//   name: string;
//   location: string;
//   role: string;
//   constructor(name: string, locatio: string, role: string) {
//     (this.name = name), (this.location = locatio), (this.role = role);
//   }
//   // methods -> function
//   getFullSchoolDetails() {
//     return `your school ${this.name} is in ${this.location}`;
//   }

//   showRoleMessage() {
//     if (this.role == "admin") {
//       console.log(`hello admin welcome to your schoole ${this.name}`);
//     } else {
//       console.log("welcome user");
//     }
//   }
// }
// let obj = new School("AMS", "Swat", "admin");
// let obj2 = new School("SPS", "Mingora", "user");
// console.log(obj.name);
// console.log(obj2.location);
// console.log(obj.getFullSchoolDetails());
// console.log(obj.showRoleMessage());

// class Student {
//   name: string;
//   age: number;
//   grade: string;
//   constructor(studentName: string, studentAge: number, studentGrade: string) {
//     this.age = studentAge;
//     this.grade = studentGrade;
//     this.name = studentName;
//   }
// }

// let student1 = new Student("Hubaish", 23, "A");
// let student2 = new Student("hamza", 23, "D");
// let student3 = new Student("ali", 25, "B");

// console.log(student1, student2, student3);

// let hub = new School();
// console.log(hub.name);
// console.log(hub.roll);

// class Person {
//   age: number;
//   constructor(userage: number) {
//     this.age = userage;
//   }

//   Age(name: string) {
//     return `person age is ${this.age} presented by ${name}`;
//   }
// }
// let person1 = new Person(40);
// console.log(person1.Age);
// person1.Age("hamza");

// *********************** Class Inheritance *****************

class Vehicles {
  no_of_wheels: number;
  no_of_seats: number;
  constructor(seats: number, wheels: number) {
    (this.no_of_seats = seats), (this.no_of_wheels = wheels);
  }

  getFullVichels() {
    return `your vichles has ${this.no_of_seats} and ${this.no_of_wheels}`;
  }
}
// let vichle1 = new Vehicles(4, 4);
// console.log(vichle1);
class Car extends Vehicles {
  no_of_doors: number;
  constructor(no_of_wheels: number, no_of_seats: number, doors: number) {
    super(no_of_seats, no_of_wheels);
    this.no_of_doors = doors;
  }
}

let car1 = new Car(4, 6, 4);
console.log(car1);

class Bike extends Vehicles {
  no_of_person: number;
  constructor(no_of_seats: number, no_of_wheels: number, persons: number) {
    super(no_of_seats, no_of_wheels);
    this.no_of_person = persons;
  }
  getFullBikeDetials() {
    return `your vichles has ${this.no_of_seats} and ${this.no_of_wheels} and has person ${this.no_of_person}`;
  }
}

let bike1 = new Bike(2, 2, 3);
console.log(bike1.getFullBikeDetials());
