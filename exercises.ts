// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
interface Country {
  name: string;
  capital: string | "Sofia";
  population: number;
  languaage: string;
}
// Step Two: Declare an object "country" with properties following "Country" interface
const country: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 7000000,
  languaage: "bulgarian",
};

const scondCountry: Country = {
  name: "Italy",
  capital: "Rome",
  population: 59000000,
  languaage: "italian",
};
// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it
function displayCountryDetails(country: Country): void {
  console.log(`The capital of ${country.name} is ${country.capital}.
        The official language is ${country.languaage} and the population is ${country.population} people.`);
}

displayCountryDetails(country);
displayCountryDetails(scondCountry);
//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number
interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}
// Step Two: Declare an object with properties following interface "Student"
const student: Student = {
  id: 1,
  name: "Pesho",
  age: 20,
  grade: 6,
};
// Step Three: Declare array "students" with objects of type "Student"
let students: Student[] = [
  student,
  { id: 2, name: "Gosho", age: 21, grade: 5 },
  { id: 3, name: "Tosho", age: 19, grade: 4 },
];

students.map((student) => (student.grade = 4));
students.map((student) => {
  if (student.name === "Tosho") {
    student.grade = 3;
  }
});

console.log(students);
// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result
function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

console.log(getStudents(students));
//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending
