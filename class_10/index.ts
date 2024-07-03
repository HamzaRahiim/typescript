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

let today = new Date(); // Current date and time
console.log(today.toString()); // Converts today's date to string

let timestampDate = new Date(1656054000000); // Create date from timestamp
console.log(timestampDate.getFullYear()); // Get the year of the date

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

// class School {

// }

// *********************** Class Inheritance *****************
