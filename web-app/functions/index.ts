function greetingName(name: string): string {
  return `Hello, ${name}!`;
}

greetingName("Alice");

let greetingsName: string = greetingName("Alice");
console.log(greetingsName);

function greetingNameAge(name: string, age: number): string {
  return `Hello, ${name}, ${age} years old!`;
}

greetingNameAge("Alice", 25);
console.log(greetingNameAge("Alice", 25));

function greeting(): void {
  console.log("Hello");
}

greeting();

// Optional parameters
function greetingNameAgeOptionalPrameters(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}, You are ${age} years old!`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(greetingNameAgeOptionalPrameters("Alice"));
console.log(greetingNameAgeOptionalPrameters("Alice", 25));

function greetingNameAgeOptionalPrametersTernary(
  name: string,
  age?: number
): string {
  return `Hello, ${name}, ${age ? `You are ${age} years old!` : ""} `;
}
console.log(greetingNameAgeOptionalPrametersTernary("Alice"));
console.log(greetingNameAgeOptionalPrametersTernary("Alice", 25));

// Default parameters
function subtractNumbers(firstNum: number = 10, secondNum: number = 5): number {
  return firstNum - secondNum;
}

console.log(subtractNumbers());
console.log(subtractNumbers(20));
console.log(subtractNumbers(20, 7));

// Arrow functions
const square = (x: number): number => x * x;
// let square = (x: number): number => x * x;
square(5);
let squareResult: number = square(3);
console.log(square(3));
console.log(square(5));
