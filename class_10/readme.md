### Today, Topics:

- Date Object
- Class
- Accessors
- Inheritance (super)

## 1. Date Object:

The `Date` object in JavaScript is a built-in object that provides methods for managing dates and times. It can be used to create, manipulate, compare, and format dates and times in your code. Here’s a brief overview of how it works:

### Creation

You can create a `Date` object in various ways depending on the input you have:

- **No parameters**: If you call `new Date()` without any arguments, it creates a `Date` object with the current date and time.
- **Date string**: You can pass a date string (e.g., `"2024-06-25"`) to `new Date()` to create a date object representing that date.

### Methods

`Date` objects come with several methods to perform operations on dates:

- **Getters**: Methods like `getDate()`, `getMonth()`, `getFullYear()`, etc., retrieve parts of the date.
- **Setters**: Methods like `setDate()`, `setMonth()`, `setFullYear()`, etc., allow you to modify parts of the date.

### Example

Here’s a simple example of using a `Date` object:

```tsx
let today = new Date(); // Current date and time
console.log(today.toString()); // Converts today's date to string

let timestampDate = new Date(1656054000000); // Create date from timestamp
console.log(timestampDate.getFullYear()); // Get the year of the date
```

The `Date` object is crucial for handling all aspects of date and time in JavaScript, making it an indispensable tool for web developers, especially when dealing with any functionality related to timing or scheduling.

## Class:

TypeScript, a superset of JavaScript, offers static typing and class-based object-oriented programming, which can make the code easier to read, debug, and scale, especially in large applications. One of its key features is the ability to define classes much like you would in languages such as Java or C#. A class in TypeScript can encapsulate data and functionalities that belong together in a robust and reusable component.

Here’s an overview of some features that TypeScript classes can have:

- **Fields**: Variables that hold data for objects
- **Constructor**: A special method for initializing new objects
- **Methods**: Functions that provide behavior for an object
- **Access Modifiers**: Keywords like `public`, `private`, and `protected` that control access to class members

### Example: Creating a Simple User Class in TypeScript

Below is a basic example of a `User` class in TypeScript, demonstrating how to use constructors, fields, and methods:

```tsx
class User {
  // properties
  firstName: string;
  lastName: string;
  age: number;

  // Constructor
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Method to get full name
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Creating an instance of User
let user = new User("John", "Doe", 30);

// Accessing methods
console.log(user.getFullName()); // Outputs: John Doe
```

In this example:

- The **constructor** initializes the new objects with a first name, last name, and age.
- **Methods** (`getFullName)` are used to interact with the data. `getFullName` returns the full name of the user.

This structure makes it easier to manage user data and provides clear pathways (methods) for interacting with that data, ensuring that the object's state remains controlled and predictable.

## Accessors:

In TypeScript, the class members (fields and methods) can be defined with three specific access modifiers: `public`, `private`, and `protected`. These modifiers determine the accessibility of class members within the class itself and by instances of the class. Here's a brief overview of each:

1. **Public**:

   - **Description**: Members declared as `public` are accessible from any location where the class object is accessible.
   - **Default**: This is the default access level for class members if no modifier is explicitly specified.
   - **Usage Example**:

     ```tsx
     class Employee {
       public name: string;

       constructor(name: string) {
         this.name = name;
       }

       public displayInfo(): void {
         console.log(`Name: ${this.name}`);
       }
     }

     let emp = new Employee("Alice");
     console.log(emp.name); // Accessible
     emp.displayInfo(); // Accessible
     ```

2. **Private**:

   - **Description**: Members declared as `private` are only accessible within the class that defines them. TypeScript enforces this at compile time.
   - **Usage Example**:

     ```tsx
     class Employee {
       private salary: number;

       constructor(salary: number) {
         this.salary = salary;
       }

       displaySalary(): void {
         console.log(`Salary: ${this.salary}`);
       }
     }

     let emp = new Employee(50000);
     // console.log(emp.salary); // Error: 'salary' is private and only accessible within class 'Employee'.
     emp.displaySalary(); // Accessible
     ```

3. **Protected**:

   - **Description**: Members declared as `protected` are accessible within the class itself and by instances of subclasses. This is typically used when there is a need to hide information from the general public but allow access for modification and usage by child classes.
   - **Usage Example**:

     ```tsx
     class Employee {
       protected department: string;

       constructor(department: string) {
         this.department = department;
       }
     }

     class Manager extends Employee {
       constructor(department: string) {
         super(department);
       }

       displayDepartment(): void {
         console.log(`Department: ${this.department}`);
       }
     }

     let mgr = new Manager("HR");
     // console.log(mgr.department); // Error: 'department' is protected and only accessible within class 'Employee' and its subclasses.
     mgr.displayDepartment(); // Accessible
     ```

These access modifiers help you to encapsulate your data, providing a clear structure and protecting the internal state of objects from unintended interference, which aligns with the principles of object-oriented programming.

## Inheritance:

In TypeScript, inheritance is a fundamental concept that allows you to create a class based on another class. This is crucial for promoting code reuse and establishing a hierarchical relationship between classes. Here’s a detailed explanation of how inheritance works in TypeScript:

### Basic Concept

Inheritance lets you derive a class from another class, termed as the parent class (or superclass), to create a child class (or subclass). The child class inherits properties and methods from the parent class but can also define additional properties and methods or override existing methods from the parent class.

### Syntax

In TypeScript, you use the `extends` keyword to denote inheritance. Here's the basic syntax:

```tsx
class ParentClass {
  // Parent class members here
}

class ChildClass extends ParentClass {
  // Additional members or overrides here
}
```

### Example

Let's look at an example to understand how inheritance can be implemented in TypeScript:

```tsx
// Parent class
class Vehicle {
  constructor(public brand: string, protected model: string) {}

  displayInfo(): void {
    console.log(`Vehicle: ${this.brand} ${this.model}`);
  }
}

// Child class
class Car extends Vehicle {
  constructor(brand: string, model: string, private year: number) {
    super(brand, model); // Call to the parent class constructor
  }

  displayDetailedInfo(): void {
    console.log(`Car: ${this.brand} ${this.model} - ${this.year}`);
  }
}

let myCar = new Car("Toyota", "Corolla", 2021);
myCar.displayInfo(); // Accessing parent class method
myCar.displayDetailedInfo(); // Accessing child class method
```

### Key Concepts in TypeScript Inheritance

1. **Constructor Handling**:
   - When a class extends another class, the constructor of the child class must call `super()`, which is a reference to the constructor of the parent class. This call is necessary to ensure that the parent class is properly initialized before the child class adds its own properties or behavior.
2. **Access Modifiers with Inheritance**:
   - Private members of the parent class are not accessible directly from the child class, but protected members are. This makes protected members useful when you want to allow access to certain properties or methods within subclasses but not outside of the class hierarchy.

### Benefits of Using Inheritance

- **Code Reusability**: Avoids duplication by allowing child classes to use properties and methods of the parent class.
- **Simplicity**: Simplifies the codebase by splitting complex classes into more manageable, hierarchical structures.

Inheritance is a powerful feature in TypeScript that helps developers organize and structure their code more effectively, promoting maintainability and scalability in large applications.

## Assignment No 3:

- Please visit to the following link to complete the assignment:

  https://github.com/HamzaRahiim/typescript/tree/main/ASSIGNMENTS/task_03
