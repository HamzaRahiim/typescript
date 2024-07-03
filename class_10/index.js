"use strict";
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
// property
// methods
// constructor
// *********************** Class Inheritance *****************
