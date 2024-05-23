### Today Topics:

- Global and Local Variables.
- Increment and Decrement Operators.
- String and Number Methods.

### 1. Global and Local Variables:

1. **Global Variables with `var`:**
- **Scope:** When a variable is declared with `var`, it is accessible both inside and outside of functions and blocks.
- **Example:**
    
    ```tsx
    typescriptCopy code
    var globalVar = "I am a global variable";
    
    if (true) {
    	console.log(globalVar); // Accessible here too
    }
    
    console.log(globalVar); // Accessible here too
    
    ```
    
    In this example, `globalVar` is accessible everywhere in the code because it is declared with `var` outside of any function or block.
    
1. **Local Variables with `let` and `const`:**
- **Scope:** Variables declared with `let` or `const` are block-scoped, meaning they are only accessible within the block (enclosed by `{}`) they are declared in.
- **Example:**
    
    ```tsx
    if (true) {
    let localLet = "I am a block-scoped variable (let)";
    const localConst = "I am a block-scoped variable (const)";
    console.log(localLet);  // Accessible here
    console.log(localConst); // Accessible here
    }
    
    // These lines will cause an error because localLet and localConst are not accessible outside the if block
    // console.log(localLet);  // Error: Cannot find name 'localLet'
    // console.log(localConst); // Error: Cannot find name 'localConst'
    
    ```
    

In this example, `localLet` and `localConst` are only accessible within the `showLetAndConst` function. They are not accessible outside of this function.

### 2. Increment & Decrement operators:

1. Pre-Increment & Pre-Decrement Operators:
    
    There are two types of increment and decrement operators: pre-increment (or pre-decrement) and post-increment (or post-decrement). The difference between them is when the increment or decrement occurs in relation to the rest of the expression.
    
    When the `++` or `--` operator is used before a variable (pre-increment or pre-decrement), the variable is incremented or decremented before the expression is evaluated. Here's an example in TypeScript:
    
    ```jsx
    let a = 10;
    console.log(++a); // 11
    console.log(--a); // 10
    
    ```
    
    In this example, when we use `++a`, the value of 'a' is incremented before the `console.log` statement is executed, so 11 is printed. When we use `--a`, the value of 'a' is decremented before the `console.log` statement is executed, so 10 is printed.
    
    So, in simple words, `++a` or `--a` means the operation is performed first and then the variable is used whereas `a++` or `a--` means the variable is used first and then the operation is performed.
    
2. Post-Increment & post-decrement:
    
    When the `++` or `--` operator is used after a variable (post-increment or post-decrement), the variable is incremented or decremented after the expression is evaluated. Here's an example in TypeScript:
    
    ```jsx
    let a = 10;
    console.log(a++); // 10
    console.log(a--); // 11
    
    ```
    
    In this example, when we use `a++`, the `console.log` statement is executed before the value of 'a' is incremented, so 10 is printed. When we use `a--`, the `console.log` statement is executed before the value of 'a' is decremented, so 11 is printed.
    
    ### 3. String and Number Methods:
    
    JavaScript provides a wide range of methods for manipulating and interacting with strings and numbers. These methods are essential for performing common tasks such as formatting, searching, and modifying data. Below are some important methods for both strings and numbers, along with examples.
    
    ### String Methods
    
    1. **`length` Property:**
        - **Description:** Returns the length of a string.
        - **Example:**
        
        ```jsx
        let exampleString = "Hello, World!";
        console.log(exampleString.length); // Output: 13
        
        ```
        
    2. **`toUpperCase()` Method:**
        - **Description:** Converts a string to uppercase letters.
        - **Example:**
        
        ```jsx
        let lowerCaseString = "hello, world!";
        let upperCaseString = lowerCaseString.toUpperCase();
        console.log(upperCaseString); // Output: HELLO, WORLD!
        
        ```
        
    3. **`toLowerCase()` Method:**
        - **Description:** Converts a string to lowercase letters.
        - **Example:**
        
        ```jsx
        let upperCaseString = "HELLO, WORLD!";
        let lowerCaseString = upperCaseString.toLowerCase();
        console.log(lowerCaseString); // Output: hello, world!
        
        ```
        
    
    ### Number Methods
    
    1. **`parseInt(string)` Function:**
        - **Description:** Parses a string and returns an integer.
        - **Example:**
        
        ```jsx
        let stringNumber = "123";
        let parsedNumber = parseInt(stringNumber);
        console.log(parsedNumber); // Output: 123
        
        ```
        
    2. **`parseFloat(string)` Function:**
        - **Description:** Parses a string and returns a floating-point number.
        - **Example:**
        
        ```jsx
        let stringNumber = "123.456";
        let parsedNumber = parseFloat(stringNumber);
        console.log(parsedNumber); // Output: 123.456
        
        ```
        
    3. **`Number(value)` Function:**
        - **Description:** Converts a value to a number.
        - **Example:**
        
        ```jsx
        let stringValue = "123.456";
        let numberValue = Number(stringValue);
        console.log(numberValue); // Output: 123.456
        
        ```
        
    
    These methods provide powerful tools for working with strings and numbers in JavaScript, allowing developers to perform a variety of tasks with ease and precision.
    