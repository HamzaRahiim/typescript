### Today, Topics:

- synchronous Vs Asynchronous
- callback function
- Promises
- async/await
- try catch

## 1. Synchronous Programming

In synchronous programming, tasks are performed one after another. Each task waits for the previous one to complete before starting. Think of it like a line at a coffee shop where each customer waits their turn.

```tsx
console.log(1);
console.log(2);
console.log(3);
console.log(4);
// this code will run line be line which is basically the concept of synchronous
```

## Asynchronous Programming

In asynchronous programming, tasks can start without waiting for the previous tasks to complete. This is useful when a task might take some time to finish, like fetching data from the internet. It's like placing an order at a coffee shop and then finding a seat while waiting for your coffee.

Example:

```tsx
console.log(1); // This will print 1 to the console immediately.
console.log(2); // This will print 2 to the console immediately.

setTimeout(function () {
  console.log("I am async function"); // This will print "I am async function" after a delay of 2 seconds.
}, 2000); // The delay is set to 2000 milliseconds (2 seconds).

console.log(3); // This will print 3 to the console immediately.
console.log(4); // This will print 4 to the console immediately.
```

**Asynchronous Function:** The `setTimeout` function is asynchronous. It schedules the function inside it to run after 2 seconds but does not block the code that follows it.

### Order of Execution:

1. Print `1`
2. Print `2`
3. Schedule the asynchronous function to run after 2 seconds.
4. Print `3`
5. Print `4`
6. After 2 seconds, print "I am async function"

## 2. Callback Function:

A callback function is a function that you pass to another function as an argument, and then it gets called (or "called back") inside that function to complete some kind of routine or action.

```tsx
// Define a function named 'greet' that takes a function as an argument
function greet(call: any) {
  // Call the passed function
  call();
}

// Define a function named 'back' that logs a message to the console
function back() {
  console.log("I am callback");
}

// Call the 'greet' function and pass the 'back' function as the argument
greet(back); // This will output: "I am callback"
```

## 3. Promises:

let understand callback hell before Promises.

### Callback Hell:

**Definition**: Callback hell refers to a situation where multiple nested callbacks make the code difficult to read and maintain.

**Example**:

```tsx
function first(callback) {
  setTimeout(() => {
    console.log("First function");
    callback();
  }, 1000);
}

function second(callback) {
  setTimeout(() => {
    console.log("Second function");
    callback();
  }, 1000);
}

function third() {
  setTimeout(() => {
    console.log("Third function");
  }, 1000);
}

// Nested callbacks leading to callback hell
first(() => {
  second(() => {
    third();
  });
});
```

### Promises:

**Definition**: A promise is an object representing the eventual completion or failure of an asynchronous operation.

**Creating a Promise**:

```tsx
let promise = new Promise((resolve, reject) => {
  let success = true; // Simulate a successful operation
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
```

**Using Promises**:

```tsx
promise
  .then((message) => {
    console.log(message); // Output: "Operation was successful!"
  })
  .catch((error) => {
    console.log(error);
  });
```

### Solving Callback Hell with Promises

First, let's rewrite the functions to return promises instead of using callbacks:

```tsx
function first() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First function");
      resolve();
    }, 1000);
  });
}

function second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second function");
      resolve();
    }, 1000);
  });
}

function third() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third function");
      resolve();
    }, 1000);
  });
}

// Chaining promises to avoid callback hell
first()
  .then(() => second())
  .then(() => third())
  .catch((error) => {
    console.log(error);
  });
```

## 4. Using Async/Await

`async` and `await` are syntax sugars for promises, making asynchronous code look and behave more like synchronous code.

```tsx
async function data() {
  const data = await fetch("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  const res = await data.json();
  return res;
}
data();
```

Now, let's convert the promise-based solution to use async/await for even cleaner and more readable code:

```tsx
function first() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First function");
      resolve();
    }, 1000);
  });
}

function second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second function");
      resolve();
    }, 1000);
  });
}

function third() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third function");
      resolve();
    }, 1000);
  });
}

async function executeFunctions() {
  try {
    await first();
    await second();
    await third();
  } catch (error) {
    console.log(error);
  }
}

executeFunctions();
```

## 5. try catch:

The **`try...catch`** statement is comprised of a `try` block and either a `catch` block, a `finally` block, or both. The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed. The code in the `finally` block will always be executed before control flow exits the entire construct.

### Syntax:

```tsx
try {
  tryStatements;
} catch (exceptionVar) {
  catchStatements;
} finally {
  finallyStatements;
}
```

**try Statements**

- The statements to be executed.

**catch Statements**

- Statement that is executed if an exception is thrown in the `try` block.

**finally Statements**

- Statements that are executed before control flow exits the `try...catch...finally` construct.
- These statements execute regardless of whether an exception was thrown or caught

**Practical Example:**
