// let vs const

let number: number = 5;
number = 10;

const message: string = "Welcome";

// String
let welcomeMessage: string = "Hello, Typescript!";
let nameOne: string = "Ivan";
let welcomeMessageLength: number = welcomeMessage.length;
console.log("welcomeMessageLength", welcomeMessageLength);
// Streing interpolation
let welcomeMessageDetails: string = `My welcomemessage is ${welcomeMessageLength}`;
let userWelcomeMessage: string = `Welcome, ${nameOne}`;
console.log(welcomeMessageDetails);
console.log(userWelcomeMessage);

// Numbers
let firstNumber: number = 5;
let secondNumber: number = 10;
let result: number = secondNumber - firstNumber;
console.log("result", result);
result = secondNumber + firstNumber;
console.log("result", result);
result = secondNumber * firstNumber;
console.log("result", result);
result = secondNumber / firstNumber;
console.log("result", result);

// Boolean
let isGreater: boolean = firstNumber > secondNumber;
console.log("isGreater", isGreater);
let isLower: boolean = firstNumber < secondNumber;
console.log("isLower", isLower);
let isEqual: boolean = firstNumber === secondNumber;
console.log("isEqual", isEqual);
let isGrweaterOrEqual: boolean = firstNumber >= secondNumber;
console.log("isGrweaterOrEqualal", isGrweaterOrEqual);
let isLowerOrEqual: boolean = firstNumber <= secondNumber;
console.log("isLowerOrEqual", isLowerOrEqual);

let areNumbersEqual: boolean = 5 === firstNumber && 10 === secondNumber;
let areNumbersEqualOr: boolean = 5 === firstNumber || 10 === secondNumber;

// Any
let stringValue: any = "Hello";
console.log("stringValue", stringValue);
stringValue = 10;
console.log("stringValue", stringValue);
stringValue = 10 === 10;
console.log("stringValue", stringValue);
stringValue = [1, 2, 3];
console.log("stringValue", stringValue);

// let str: string = "Simple Test";
// console.log(str);
// let isBool = true;
// console.log(isBool);
// let undefinedValue;
// console.log(undefinedValue);
// let undefinedValue2: undefined = undefined;
// console.log(undefinedValue2);
// let street: any = '1600 Amphitheatre Prkway';
// let postalcode: unknown = 1000;

let num: number = 5;
const isPositive: string =
  num > 0 ? "The number is positive" : "The number is negative or 0";
console.log(`The "result" 'is' that: ${isPositive}`);

if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is equal to 0");
}

type CarYear = number;
type CarType = string;
type CarModel = string;
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corola";

type PersonInfoType = string | number;
const personNameInf: PersonInfoType = "Ivan";
const personAgeInf: PersonInfoType = 25;

type Car = {
  type: string;
  model: string;
  horsepower: number;
};

const car: Car = {
  type: "Fiat",
  model: "Punto",
  horsepower: 200,
};

type Status = "approved" | "rejected" | "pending" | "fullfiled";

const currentStatus: Status = "fullfiled";
