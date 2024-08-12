"use strict";
// ********** synchronous ******************
console.log(1);
console.log(2);
console.log(3);
console.log(4);
// *************** asynchronous ****************
console.log(1); // This will print 1 to the console immediately.
console.log(2); // This will print 2 to the console immediately.
setTimeout(function () {
    console.log("I am async function"); // This will print "I am async function" after a delay of 2 seconds.
}, 2000); // The delay is set to 2000 milliseconds (2 seconds).
console.log(3); // This will print 3 to the console immediately.
console.log(4); // This will print 4 to the console immediately.
