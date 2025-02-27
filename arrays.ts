let array = [1, 2, 3, "yes", 5];
let numbers: number[] = [5, 4, 3, 2, 1];
let names: string[] = ["Alice", "Bob"];
let stringAndNumbers: (string | number)[] = [1, "Bob"];
let element: string = names[0];
console.log(element);

names.push("Ani");
console.log(names);

names.unshift("Gosho");
console.log(names);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

let slicedNames: string[] =names.slice(1,3);
console.log(slicedNames);

let multipliedNumbers: number[] = numbers.map(element => element * 2);
console.log(multipliedNumbers);

let multipliedSomeNumbers: number[] = numbers.map(element => {
    if (element > 2) {
        return element * 2;
    } else {
        return element;
    }
});
console.log(multipliedNumbers);

let numbersGreaterThanTwo: number[] = numbers.filter(element => element > 2);
console.log(numbersGreaterThanTwo);

let sortedNumbers: number[] = numbers.sort();
console.log(sortedNumbers);

