### Today, Topics:

- Encapsulation
- Polymorphism
- Abstraction

### 1. Encapsulation

**Encapsulation** is the concept of wrapping data (variables) and code (methods) together into a single unit called a class. It helps to hide the internal state of the object from the outside and only expose what is necessary. This is done using access modifiers like `private`, `protected`, and `public`.

**Simple Example:**

```tsx
class Person {
  private name: string; // private variable

  constructor(name: string) {
    this.name = name;
  }

  // public method to get the name
  public getName(): string {
    return this.name;
  }

  // public method to set the name
  public setName(newName: string): void {
    this.name = newName;
  }
}

let person = new Person("Alice");
console.log(person.getName()); // getting the name, Outputs: Alice

person.setName("Bob"); // setting a new name
console.log(person.getName()); // getting the new name, Outputs: Bob
```

Here, `name` is a private variable, and it cannot be accessed directly from outside the class. Instead, we use `getName` and `setName` methods to interact with it.

### 2. Polymorphism

**Polymorphism** means "many forms".

Polymorphism in object-oriented programming refers to a situation where multiple classes inherit from a parent and override a particular functionality, i.e. the ability of a method or property to exist in different forms.

When you override inherited methods or properties, that's polymorphism

**Example (Runtime Polymorphism):**

```tsx
class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

let myAnimal: Animal;
myAnimal = new Dog();
myAnimal.makeSound(); // Outputs: Bark

myAnimal = new Cat();
myAnimal.makeSound(); // Outputs: Meow
```

In this example, `makeSound` method behaves differently based on the object (Dog or Cat) that calls it.

### 3. Abstraction

**Abstraction** is the concept of hiding the complex implementation details and showing only the essential features of the object. It can be achieved using abstract classes and interfaces.

**Example:**

```tsx
// Define an abstract class
abstract class Animal {
  constructor(public name: string) {}

  // Abstract method (must be implemented in derived classes)
  abstract makeSound(): void;

  // Regular method
  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

// Extend the abstract class
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  // Implement the abstract method
  makeSound(): void {
    console.log("Bark bark!");
  }
}

// Create an instance of the derived class
const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Bark bark!
myDog.move(); // Output: Buddy is moving.
```

In this example:

- The **`Animal`** class is abstract and includes an abstract method **`makeSound()`** that must be implemented by any class that extends **`Animal`**.
- The **`Dog`** class extends **`Animal`** and provides an implementation for the **`makeSound()`** method.
- You can create an instance of **`Dog`** and call both the **`makeSound()`** and **`move()`** methods.

By understanding and using these three pillars—Encapsulation, Polymorphism, and Abstraction—you can write more modular, maintainable, and flexible code in TypeScript.
