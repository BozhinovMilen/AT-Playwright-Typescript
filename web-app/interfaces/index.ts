type PersonData = {
  name: string;
  lastName: string;
  age: number;
  city: "Sofia" | "Plovdiv" | "Varna";
};

interface Person {
  name: string;
  lastName: string;
  age: number;
  adress: string;
  phoneNumber: number;
  city?: string;
  dateOfBirth?: Date | string;
}

interface Transmition {
  type: string;
}

interface CarWithTransmition extends Transmition {
  horsepower: number;
}

const carWithTransmition: CarWithTransmition = {
  type: "Automatic",
  horsepower: 300,
};

interface CarInterface {
  make: string;
  model: string;
  year: number;
}

interface EndinSpecification extends CarInterface {
  engineType: string;
  horsePower: number;
}
