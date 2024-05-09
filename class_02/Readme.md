# Topics Cover:
* Data Types.
* type hinting.
* variable naming convention.
* difference between var, let and const.
* Finding variable type. 

## Data types:
The latest ECMAScript standard defines eight data types:
* Seven data types that are primitives: (But in today class we only cover the five)
1. Boolean: true and false.
2. Number: An integer or floating point number. For example: 42 or 3.14159.
3. String: A sequence of characters that represent a text value. For example: "Howdy".
4. null: A special keyword denoting a null value. 
5. undefined: A top-level property whose value is not defined.

## Type Hinting:
Type hinting in TypeScript specifies the expected data types of variables. It makes your code safer and easier to understand.
1. const name: string = "Alice";
2. const age: number = 30;

## Variable Naming Convention:
Proper naming conventions make code more readable and maintainable.

### General naming rule:
1. Use camelCase for variables.
2. Avoid using single-letter variable names (e.g., x, y), except in loops.
3. Don't use number in the start of variables name. (e.g var 2name = "welcome")
4. Don't use reserved words for variables name. (e.g var let)


## Difference Between var, let, and const:
* var and let values can changed later.
    e.g let name = "Pakistan"
    name = "Islamabad"
* const values can't changed.
    e.g const age = 23
    age = 34 (throw an error)

## Finding Variable Data type:
Use the word "typeof" with the specific variable name and print, it show the variable data type.
    let my_roll = 23
    console.log(typeof my_roll) 

# Important Commands:
The following are the command for creating files of "tsconfig.json" and "package.json".

For tsconfig.json:

    tsc --init

For package.json:

    npm init -y

For running the files of typescript and javascript with single command:

    tsc && node fileName.js  

* change the fileName with your javascript file name.
