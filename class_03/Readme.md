## Today, Topics:

- Case Sensitive.
- Implicit type Vs Explicit type.
- Arithmetic Operators.
- Bodmas Operations.
- Assignment Operators.
- Comparison Operators.
- Logical Operators.

### 1. Case Sensitive:

Variables names are case sensitive, let understand with the following examples:

```jsx
let country = “Pakistan”
let Country = “Dubai”
```

Here this both Variables are considering different variables, this is what variables names are case sensitive.

### 2. Implicit Type Vs Explicit Type:

1. Explicit Type:
    
    Let First Understand the Explicit type in TypeScript with the given example.
    
    ```jsx
    let myName : string = "Hamza"
    // here we add the type explicitly means 
    // we are forcefully saying that myName must be string.
    ```
    
    Now when we hover on myName variable it will shows that myName is of type String.
    
2. Implicit Type:
    
    Now, let's understand the Implicit type in TypeScript with the given example.
    
    ```jsx
    let myCountry = "Pakistan"
    // here we did not specify the type explicitly,
    // TypeScript will automatically consider myCountry as a string.
    
    ```
    
    Now when we hover over the myCountry variable, it will show that myCountry is of type String. This is called Implicit Typing.
    

### 3. Arithmetic's Operators:

Arithmetic Operators include addition (+), subtraction (-), multiplication (*), division (/), modulus (%) and power (***). They are used to perform mathematical operations between numeric operands. Here is an example in TypeScript:

```jsx
let a = 10;
let b = 20;
console.log(a+b); // 30
console.log(a-b); // -10
console.log(a*b); // 200
console.log(a/b); // 0.5
console.log(a%b); // 0
console.log(a**b);
```

In this example, we performed addition, subtraction, multiplication, and division operations between two numeric variables, a and b.

### 4. Bodmas Operations:

Bodmas stands for Brackets, Orders, Division/Multiplication, Addition/Subtraction. It's the order in which operations should be performed in an arithmetic expression. See the following TypeScript example:

```jsx
let result = (2 + 3) * 4 // output will be 20

```

In this example, the operation inside the brackets (2 + 3) is performed first due to the Bodmas rule, and then the result is multiplied by 4.

### 5. Assignment Operators:

Assignment operators in JavaScript are used to assign values to variables. The most common assignment operator is "=", but there are also compound assignment operators like "+=", "-=", "*=", and "/=" which perform an operation and assign the result to the variable. Here's an example in TypeScript:

```jsx
let x = 10; // "=" operator
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 2; // x = x / 2

```

In this example, we first assign the value 10 to the variable x. Then we use the compound assignment operators to modify the value of x.

### 6. Comparison Operators:

Comparison operators are used in logical statements to determine equality or difference between variables or values. These operators include "==", "!=", ">", "<", ">=", "<=", "===" and "!==". Here's an example in TypeScript:

```jsx
let a = 10;
let b = 20;
console.log(a == b);  // false
console.log(a != b);  // true
console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= b);  // false
console.log(a <= b);  // true
console.log(a === b); // false
console.log(a !== b); // true

```

In this example, we are comparing the variables a and b using various comparison operators.

### 7. Logical Operators:

Logical operators in JavaScript include "&&" (logical AND), "||" (logical OR), and "!" (logical NOT). They are used to combine or invert Boolean expressions. Here's an example in TypeScript:

```jsx
let a = true;
let b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

```

In this example, we use the logical AND operator to get the result of 'a AND b', the logical OR operator to get the result of 'a OR b', and the logical NOT operator to invert the value of 'a'.