"use strict";
//  ******************** Encapsulation ********************
class Person {
    constructor(name) {
        this.name = name;
    }
    // public method to get the name
    getName() {
        return this.name;
    }
    // public method to set the name
    setName(newName) {
        this.name = newName;
    }
}
let person = new Person("Alice");
console.log(person.getName()); // getting the name, Outputs: Alice
person.setName("Bob"); // setting a new name
console.log(person.getName()); // getting the new name, Outputs: Bob
