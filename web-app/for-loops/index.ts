// for...of loop
let fruits: string[] = ["Apple", "Banana", "Peach", "Watermelon"];

for (let fruit of fruits) {
  console.log(`Fruit is ${fruit}`);
}

console.log();

let numberss: number[] = [10, 20, 30, 40];

for (let number of numberss) {
  if (number > 20) {
    console.log(`Number is ${number}`);
  } else {
    console.log(`${number} plus 5 is ${number + 5}`);
  }
}

console.log();

let word: string = "Hello";

for (let letter of word) {
  console.log(letter);
}

console.log();

for (let letter of word) {
  if (letter === "o") {
    letter = "@";
  }
  console.log(letter);
}

console.log();

// for...in over object
interface StudentForLoops {
  name: string;
  lastName: string;
  age: number;
}

const studentPesho: StudentForLoops = {
  name: "Pesho",
  lastName: "Petrov",
  age: 20,
};

for (let key in studentPesho) {
  // accessing pbject value by passing object key as keyof StudentForLoops
  console.log(`${key} = ${studentPesho[key as keyof StudentForLoops]}`);
}

console.log();

// for...in over array
const nums: number[] = [35, 25, 45, 50];

for (let number in nums) {
  console.log(`The value of index ${number} is ${nums[number]}`);
}

console.log();

// for loop
const numsArr: number[] = [35, 25, 45, 50, 35, 25, 45, 50, 45, 50];

for (let i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i]);
}

console.log();

for (let i = 0; i < numsArr.length; i++) {
  console.log(i);
}

console.log();

for (let i = 0; i < numsArr.length; i += 2) {
  console.log(i);
}

console.log();

for (let i = numsArr.length; i >= 0; i--) {
  console.log(i);
}
