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

function greetingNameAgeOptionalPrameters(name: string, age?: number): string {
    return `Hello, ${name}, ${age ? `You are ${age} years old!` : ""} `;
}
console.log(greetingNameAgeOptionalPrameters("Alice"))
console.log(greetingNameAgeOptionalPrameters("Alice", 25))

function  subtractNumbers(firstNum: number = 10, secondNum: number = 5): number {
    return firstNum - secondNum;
}

console.log(subtractNumbers());
console.log(subtractNumbers(20));
console.log(subtractNumbers(20, 7));