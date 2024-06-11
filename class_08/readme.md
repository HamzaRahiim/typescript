### Today, Topics:

- Objects
- type alias & interface
- while loop
- do while loop
- break and continue

## 1. Objects:

### Basics of Objects:

In JavaScript, an object is a standalone entity, with properties and type. It is like a container which holds related data and functions together. Each value in an object is known as a property if it is a function it is known as a method.

The syntax for creating an object is as follows:

```jsx
let student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  grade: "A",
};
```

In this example, `student` is an object. The object `student` has properties `firstName`, `lastName`, `age`, and `grade`.

Each property name before colons is an identifier (either a name, a number, or a string literal), and each `valueN` is an expression whose value is assigned to the property name.

### Accessing Object Properties:

There are two main ways to access the properties of an object:

- Dot notation
- Square bracket notation

Dot notation is used most of the time. To access a property of an object using dot notation, you type the object name, followed by a dot (.), followed by the property name.

```jsx
console.log(student.firstName); // Output: John
```

Square bracket notation is used if the property name is a number, contains spaces, or if it is computed.

```jsx
console.log(student["lastName"]); // Output: Doe
```

In this example, the last name of the student is accessed using square bracket notation.

Operations On Object Properties:

### Modifying Object Properties:

You can modify the properties of an object by simply assigning new values to them. The syntax is similar to how you access properties.

```jsx
student.age = 21;
console.log(student.age); // Output: 21
console.log(student); // check the output that is the property values modify?
```

In this example, the `age` property of the `student` object is updated to 21.

### Deleting Object Properties:

To delete a property from an object, you can use the `delete` operator.

```jsx
delete student.grade;
console.log(student.grade); // Output: undefined
console.log(student); // check the output that the property is deleted?
```

Here, the `grade` property of the `student` object is deleted.

### Adding New Properties to an Object:

You can add new properties to an object in the same way you modify them: simply assign a value to a new property on the object.

```jsx
student.school = "XYZ High School";
console.log(student.school); // Output: XYZ High School
console.log(student); // check is the property really added to the object?
```

In this example, a new property `school` is added to the `student` object.

## 2. Type alias & interface:

### Type Alias

A type alias in TypeScript is a way to provide a new name for a type. It can be used to give a type a new name for simplicity, readability, or to constrain unions and intersections.

Here's an example:

```tsx
type Point = {
  x: number;
  y: number;
};

let p: Point = { x: 10, y: 20 };
```

In this example, `Point` is a type alias for the type `{ x: number; y: number; }`. We can then use `Point` as a type elsewhere in our code.

### Interface

An interface in TypeScript is a way to define a contract on a function or object to define the shape of an object. This is a powerful way to define entities that can be used across different parts of a program.

Here's an example:

```tsx
interface Point {
  x: number;
  y: number;
}

function drawPoint(point: Point) {
  // ...
}

drawPoint({ x: 1, y: 2 });
```

In this example, `Point` is an interface that specifies that an object has an `x` and `y` property, both of which are numbers. The `drawPoint` function requires an object that fits the `Point` interface.

## 3. [do...while statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement)

The [`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) statement repeats until a specified condition evaluates to false.

A `do...while` statement looks as follows:

```tsx
do statement;
while (condition);
```

`statement` is always executed once before the condition is checked. (To execute multiple statements, use a block statement (`{ }`) to group those statements.)

If `condition` is `true`, the statement executes again. At the end of every execution, the condition is checked. When the condition is `false`, execution stops, and control passes to the statement following `do...while`.

### [Example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#example_2)

In the following example, the `do` loop iterates at least once and reiterates until `i` is no longer less than `5`.

```tsx
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## 4. [while statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)

A [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) statement executes its statements as long as a specified condition evaluates to `true`. A `while` statement looks as follows:

```tsx
while (condition) {
  statement;
}
```

If the `condition` becomes `false`, `statement` within the loop stops executing and control passes to the statement following the loop.

The condition test occurs *before* `statement` in the loop is executed. If the condition returns `true`, `statement` is executed and the `condition` is tested again. If the condition returns `false`, execution stops, and control is passed to the statement following `while`.

To execute multiple statements, use a block statement (`{ }`) to group those statements.

### [Example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#example_1)

The following `while` loop iterates as long as `n` is less than `3`:

```tsx
let n = 0;
while (n < 3) {
  n++;
  console.log(n);
}
// 1, 2, 3
```

With each iteration, the loop increments `n` and adds that value to `x`. Therefore, `x` and `n` take on the following values:

- After the first pass: `n` = `1` and `x` = `1`
- After the second pass: `n` = `2` and `x` = `3`
- After the third pass: `n` = `3` and `x` = `6`

After completing the third pass, the condition `n < 3` is no longer `true`, so the loop terminates.

## Break and Continue:

The "break" and "continue" statements in JavaScript are used to control the flow of loops.

### Break:

The "break" statement stops the execution of a loop entirely and transfers execution to the line immediately following the loop. Here's an example:

```jsx
let i = 0;
while (i < 6) {
  if (i === 3) {
    break;
  }
  console.log(i);
  i++;
}
```

In this example, the loop will cease execution when `i` equals `3`. So, the console will log `0`, `1`, and `2`.

### Continue:

The "continue" statement "jumps over" one iteration in the loop and continues with the next iteration. Here's an example:

```jsx
let i = 0;
while (i < 6) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

In this example, when `i` equals `3`, the `continue` statement skips the rest of the loop iteration and proceeds to the next one. Therefore, the console will log `1`, `2`, `4`, `5`, and `6`.
