## Today Topics:

- Union Types
- plus operator's role with string and other data type.
- String Concatenations.
- If - else.
- Conditional Operators.

### 1. Union Types:

Union types in TypeScript allow us to use more than one data type for a variable. This means a variable declared with Union types can hold values of multiple types. This is incredibly useful when a variable might have a couple or several types. For example, a variable could be string, number, or Boolean type.

Here's a simple example:

```jsx
let id: string | number;

id = '123'; // valid
console.log(id); // '123'

id = 123; // valid
console.log(id); // 123

id = true; // Error, 'true' is not assignable to type 'string | number'

```

In this example, the variable `id` can hold either a string or a number. If we try to assign any other type to `id`, TypeScript will throw an error because `id` only accepts string or number types. This is a powerful feature of TypeScript which helps us to keep our code safer and more predictable by enforcing type checking.

### 2. Plus Operator:

Here we are going to start some of the operators of JavaScript, first let understand the plus operator role between string and other data type values.

```jsx
let sum = "Hamza " + 5 // output will be "Hamza 5"
let bool = "State " + true // output will "State true"
let empty = "done " + null // output will be "done null" 
let combine = "Welcome " + "TypeScript" // output will be "Welcome TypeScript"
```

From the above examples it is clear that when we add any data type values like number, Boolean etc. with string value it converts it into string value.

### 3. String Concatenation:

In JavaScript, we can concatenate strings in several ways. The traditional way is to use the plus (+) operator. This operator combines two string values to create a single, concatenated string. Here's an example:

```jsx
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

```

In this example, the plus operator is used to concatenate the `firstName` and `lastName` variables, with a space in between.

After ES6 (ECMAScript 6), a new way of concatenating strings was introduced, using template literals (also known as template strings). Template literals are enclosed by back-ticks (``). You can include placeholder expressions within template literals, denoted by a dollar sign and curly braces (${expression}). The JavaScript engine replaces the placeholder with the string representation of a corresponding expression's value. Here's an example:

```jsx
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`; // "John Doe"

```

In this example, template literals are used to concatenate the `firstName` and `lastName` variables, with a space in between. The placeholders (${firstName} and ${lastName}) inside the template literal are replaced by the values of the `firstName` and `lastName` variables, respectively.

Using template literals can make your code cleaner and easier to read when dealing with complex strings or when using variables within strings.

### 4. If-Else Statements:

In TypeScript, `if-else` is a conditional statement that performs different computations or actions depending on whether a condition evaluates to true or false. The `if` statement consists of a Boolean expression followed by one or more statements. If the condition is true, the block of code inside the `if` statement will be executed. If the condition is false, the block of code will be ignored, and the program will continue with the next statement.

Here's an example:

```jsx
let num = 10;
if (num > 5) {
    console.log(`${num} is greater than 5`);
} else {
    console.log(`${num} is not greater than 5`);
}

```

In this example, the `if` statement checks if `num` is greater than 5. If the condition is true, it will print "`num` is greater than 5". If the condition is false, it will print "`num` is not greater than 5". The `else` statement is optional and can be omitted if not needed.

### 5. Conditional Operators:

Conditional (or ternary) operators are used to perform different computations or actions depending on whether a condition evaluates to true or false. Here's an example in TypeScript:

```jsx
let a = 10;
let b = 20;
let result = (a > b) ? 'a is greater' : 'b is greater';
console.log(result); // 'b is greater'

```

In this example, we use the ternary operator to check if 'a' is greater than 'b'. If the condition is true, 'a is greater' is printed. If false, 'b is greater' is printed.

### Assignment No 1:

* Please Visit to assignment section and complete your first task, use the given link to visit directly.

    https://github.com/HamzaRahiim/typescript/tree/main/ASSIGNMENTS/task_01