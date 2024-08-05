//  ******************** Encapsulation ********************
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
