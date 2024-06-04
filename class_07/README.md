## Today, Topics:

- Functions in Details.

## 1. Function:

### Introduction to function & syntax:

A function is a reusable block of code that performs a specific task. Functions often take in data, process it, and return a result. Once a function is defined, it can be used over and over in your code. If you find yourself repeating a piece of code in multiple places in your program, a function can often make your code more readable and maintainable.

Sure, let's create a simple function in JavaScript.

```jsx
function greet(name) {
    return "Hello, " + name;
}

```

In the above example, `greet` is a function that takes one parameter, `name`. This function will concatenate "Hello, " with whatever value is passed into it as an argument. Let's see it in action:

```jsx
console.log(greet("John"));  // Outputs: Hello, John

```

Here's what's happening step by step:

1. We declare a function using the `function` keyword.
2. We give it a name, `greet`, which is how we'll refer to it later.
3. Inside the parentheses, we list any parameters our function needs to do its job. In this case, there's just one: `name`.
4. We write the code that our function will execute between curly braces `{}`. This code can be as simple or as complex as we like. Here, we're just returning a string that includes the `name` parameter.
5. We call or *invoke* our function by writing its name, followed by parentheses with any arguments we want to pass in. Here, we're calling `greet` with the argument `"John"`.
6. The function executes its code and returns a value. We can then do something with this return value, like log it to the console.

### Function Parameters:

Function parameters are the inputs to a function that the function needs to perform its task. They are placed in the parentheses that follow the function name and are separated by commas if there is more than one. In TypeScript, we can specify the type of the parameters.

```tsx
function greet(name: string) {
    return "Hello, " + name;
}

```

In this example, `name` is a parameter of type `string`.

### Default Parameters:

Default parameters are parameters that have a default value. If the function is called without an argument for that parameter, it uses the default value.

```tsx
function greet(name: string = 'Guest') {
    return "Hello, " + name;
}

```

In this example, if `greet` is called without any arguments, it will return "Hello, Guest".

### Rest Parameters:

Rest parameters allow functions to accept any number of arguments. The rest parameter is specified by three dots (`...`) before the parameter's name.

```tsx
function greet(name: string, ...otherNames: string[]) {
    return "Hello, " + name + ", " + otherNames.join(", ");
}

```

In this example, `greet` can be called with any number of arguments after `name`, and those arguments will be treated as an array within the function.

### Optional Parameters:

Optional parameters are parameters that may or may not receive a value. They are denoted by a question mark (`?`) following the parameter name.

```tsx
function greet(name: string, age?: number) {
    return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}`;
}

```

In this example, `age` is an optional parameter. If `greet` is called without an `age` argument, it will return a greeting without mentioning the recipient's age.

### Function Arguments:

Function arguments are the actual values that are passed into the function when it is invoked or called. These values are then assigned to the parameters defined in the function, in the same order in which they were passed.

```jsx
function greet(name) {
    return "Hello, " + name;
}

greet('John');

```

In this example, 'John' is an argument that is passed into the `greet` function. Inside the function, this argument value is assigned to the `name` parameter.

It's important to note that the number of arguments provided when calling a function should ideally match the number of parameters defined in the function. However, in JavaScript, if a function is called with more arguments than there are parameters, the extra arguments are ignored. On the other hand, if a function is called with fewer arguments than there are parameters, the missing arguments are assigned the value `undefined`.

Lastly, JavaScript functions have access to an `arguments` object, which behaves like an array and contains all the arguments passed to the function. This can be useful when working with functions that accept a variable number of arguments.

### Anonymous function:

Anonymous functions are functions that are declared without any named identifier to refer to it. As such, they are usually not accessible after their initial creation. An anonymous function is often not accessible after its initial creation. They are commonly used as arguments to other functions or as immediately invoked function expressions.

```jsx
let greet = function(name) {
    return "Hello, " + name;
}

console.log(greet('John'));  // Outputs: Hello, John

```

In this example, the function is stored in a variable and can be referred to using this variable.

### Arrow Function:

Arrow functions are a shorter form of function expression introduced in ES6. They are called arrow functions because they use an arrow-like symbol (=>) to define the function. Arrow functions have shorter syntax than function expressions and lexically bind the `this` value. Arrow functions are best suited for non-method functions.

Here's a simple JavaScript arrow function:

```jsx
let greet = (name) => {
    return "Hello, " + name;
}

console.log(greet('John'));  // Outputs: Hello, John

```

In TypeScript, we can specify the type of the parameters and the return type of the function. Here's the same function in TypeScript with types:

```tsx
let greet = (name: string): string => {
    return "Hello, " + name;
}

console.log(greet('John'));  // Outputs: Hello, John

```

In this example, `name` is a parameter of type `string`, and the function returns a `string`. If the function has exactly one statement which is the `return` statement, we can remove the `return` keyword and the curly braces.

```tsx
let greet = (name: string): string => "Hello, " + name;

console.log(greet('John'));  // Outputs: Hello, John

```

In this example, the function body is a single line, and the function immediately returns the result of evaluating `"Hello, " + name`.