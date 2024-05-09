// ******************************** Data types ******************************
// number 1,2,3,4,5
var myNum = 3;
// string "hello"
var mystring = "67";
// boolean true, false
var myBool = true;
// null
var myScore = null;
// undefined
var myResult = undefined;

// ***************************************** Adding type hinting ***********************
var myType: number = 23;
var myString: string = "welcome";
var myStatus: boolean = true;
var mySecurity: null = null;
var myEnd: undefined = undefined;

// ****************************** variables naming conventions ***************************
// Starting Variables name with number can show error because variable name cannot starts with number
// var 1myNum = 3;

// declaring variable name by reserved word can also show error
// var let = "hello";

// ******************************* changing variables values ************************
var my_name = "name";
console.log(my_name);
my_name = "IamChanged";
console.log(my_name);
// changing the variable value to number will show error because of type hinting
// my_name = 123;
// console.log(my_name);

// ************************** Difference between var, let and const *********************
var car: string = "BMW";

let car1: string = "BMW";

const car2: string = "BMW";

// car = "toyota"; // ok
// car1 = "honda"; // ok
// car2 = "vitz";  // throw an error because of const, we cannot change the value assign with const keyword

// ************************** finding type of any variables ***************************

console.log(typeof car);
