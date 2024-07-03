# Class_09

### Today, Topics:

- switch statement
- type assertion
- Escape Characters

### 1. Switch Statement:

A `switch` statement allows a program to evaluate an expression and attempt to match the expression's value to a `case` label. If a match is found, the program executes the associated statement.

A `switch` statement looks like this:

```tsx
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

Practical Example:

```tsx
const grade = "C";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Well done");
    break;
  case "C":
    console.log("Pass");
    break;
  case "D":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
    break;
}
```

### Fall-through in Switch Statement:

In a switch statement, the `fall-through` concept means that when a case matches, the program will execute the associated statements and all the statements of the cases that follow, until it meets a `break` statement or the end of the switch block.

Here's an example:

```tsx
let day = 3;
switch (day) {
  case 1:
  case 2:
  case 3:
    console.log("It is a weekday");
    break;
  case 4:
  case 5:
    console.log("It is almost weekend");
    break;
  case 6:
  case 7:
    console.log("It is weekend");
    break;
  default:
    console.log("Input must be a number between 1 and 7");
}
```

In this example, if `day` is 3, the program will match the third `case` and execute the statement `console.log('It is a weekday');`. After that, it will not execute any other statements because it encounters a `break` statement that terminates the switch block.

### Type Assertion:

**Type assertion** is a way to tell the TypeScript compiler to treat an entity as a different type. This can be useful when you know more about the type of a variable than the compiler does. Type assertions don't change the runtime type of the variable; they only affect the type checking and compile-time validation.

There are two ways to perform type assertions in TypeScript:

1. **Using the `as` keyword**:

   ```tsx
   let someValue: any = "this is a string";
   let strLength: number = (someValue as string).length;
   console.log(strLength); // Output: 16
   ```

2. **Using angle-bracket syntax**:

   ```tsx
   let someValue: any = "this is a string";
   let strLength: number = (<string>someValue).length;
   console.log(strLength); // Output: 16
   ```

In both examples, `someValue` is initially typed as `any`, which means it can hold any type of value. By using type assertion, we tell the compiler that `someValue` should be treated as a `string`, allowing us to access the `length` property safely.

### 3. Escape Characters:

In JavaScript, an escape character is a backslash (`\`) that allows you to include special characters in strings. The escape character tells the JavaScript interpreter to treat the following character as a part of the string, rather than as a special character or an operator. Here are some common uses of escape characters in JavaScript:

### Common Escape Sequences

- `\'` - Single quote
- `\"` - Double quote
- `\\` - Backslash
- `\n` - New line
- `\r` - Carriage return
- `\t` - Tab

### Example

Here's an example to illustrate the use of escape characters:

```jsx
javascriptCopy code
// Using single quotes inside a string
let singleQuoteExample = 'It\'s a beautiful day!';
console.log(singleQuoteExample); // Output: It's a beautiful day!

// Using double quotes inside a string
let doubleQuoteExample = "He said, \"Hello, World!\"";
console.log(doubleQuoteExample); // Output: He said, "Hello, World!"

// Including a backslash in a string
let backslashExample = "This is a backslash: \\";
console.log(backslashExample); // Output: This is a backslash: \

// Adding a new line in a string
let newLineExample = "Hello, \nWorld!";
console.log(newLineExample);
/*
Output:
Hello,
World!
*/

// Using tab in a string
let tabExample = "Column1\tColumn2\tColumn3";
console.log(tabExample); // Output: Column1    Column2    Column3

// Using backspace in a string
let backspaceExample = "ABC\bD";
console.log(backspaceExample); // Output: ABD

```

In these examples, the escape characters allow the inclusion of quotes, backslashes, new lines, and other special formatting within the strings.
