# Class_06

### Today, Topics:

- Array & its basic Methods.
- for loop.

### 4. Array and its basic Methods:

In TypeScript, arrays are used to store multiple values in a single variable. Arrays are a fundamental data structure that allows you to perform various operations such as adding, removing, and manipulating elements. Here’s an overview of arrays and some basic methods to work with them.

### Declaring and Initializing Arrays

You can declare and initialize arrays in TypeScript in several ways:

1. **Using Square Brackets:**
    
    ```tsx
    typescriptCopy code
    let numbers: number[] = [1, 2, 3, 4, 5];
    let fruits: string[] = ["apple", "banana", "cherry"];
    
    ```
    
2. **Using the Array Generic Type:**
    
    ```tsx
    typescriptCopy code
    let numbers: Array<number> = [1, 2, 3, 4, 5];
    let fruits: Array<string> = ["apple", "banana", "cherry"];
    
    ```
    

### Basic Array Methods

1. **`push` Method:**
    - Adds one or more elements to the end of an array and returns the new length of the array.
    - **Example:**
        
        ```tsx
        typescriptCopy code
        let fruits: string[] = ["apple", "banana"];
        fruits.push("cherry");
        console.log(fruits); // Output: ["apple", "banana", "cherry"]
        
        ```
        
2. **`pop` Method:**
    - Removes the last element from an array and returns that element.
    - **Example:**
        
        ```tsx
        typescriptCopy code
        let fruits: string[] = ["apple", "banana", "cherry"];
        let lastFruit = fruits.pop();
        console.log(lastFruit); // Output: "cherry"
        console.log(fruits); // Output: ["apple", "banana"]
        
        ```
        
3. **`shift` Method:**
    - Removes the first element from an array and returns that element.
    - **Example:**
        
        ```tsx
        typescriptCopy code
        let fruits: string[] = ["apple", "banana", "cherry"];
        let firstFruit = fruits.shift();
        console.log(firstFruit); // Output: "apple"
        console.log(fruits); // Output: ["banana", "cherry"]
        
        ```
        
4. **`unshift` Method:**
    - Adds one or more elements to the beginning of an array and returns the new length of the array.
    - **Example:**
        
        ```tsx
        typescriptCopy code
        let fruits: string[] = ["banana", "cherry"];
        fruits.unshift("apple");
        console.log(fruits); // Output: ["apple", "banana", "cherry"]
        
        ```
        
    
    ### Conclusion
    
    Arrays in TypeScript are versatile and powerful, offering a range of methods to manipulate and work with data. Understanding these basic methods will allow you to perform common tasks efficiently and effectively in your TypeScript programs.
    

### 5. For Loop:

A `for` loop in TypeScript is used to execute a block of code repeatedly until a specified condition evaluates to false. The loop consists of three main parts: the initialization, the condition, and the increment/decrement. Here’s a detailed explanation with examples:

### Basic Structure of a `for` Loop:

```tsx
for (initialization; condition; increment/decrement) {
    // Code to be executed
}
```

### Example and Explanation:

Let's break down a simple `for` loop that prints numbers from 1 to 5:

```tsx
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

1. **Initialization (`let i = 1`):**
    - This part is executed only once at the beginning of the loop.
    - Here, we declare a variable `i` and initialize it to 1.
2. **Condition (`i <= 5`):**
    - This condition is evaluated before each iteration of the loop.
    - If the condition is `true`, the loop executes the code block.
    - If the condition is `false`, the loop terminates.
3. **Increment/Decrement (`i++`):**
    - This part is executed after each iteration of the loop.
    - Here, `i++` increments the value of `i` by 1 after each loop iteration.

### Execution Flow:

- **First Iteration:**
    - Initialization: `let i = 1`
    - Condition: `1 <= 5` (true)
    - Code Block: `console.log(1)` prints `1`
    - Increment: `i++` makes `i = 2`
- **Second Iteration:**
    - Condition: `2 <= 5` (true)
    - Code Block: `console.log(2)` prints `2`
    - Increment: `i++` makes `i = 3`
- This process repeats until `i` becomes 6.
- **Final Iteration:**
    - Condition: `6 <= 5` (false)
    - The loop terminates.