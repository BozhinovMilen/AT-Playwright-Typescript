const carObjectWithParaneter: {
  type: string;
  model: string;
  color: string;
  horsePower: number;
} = {
  type: "Fiat",
  model: "500",
  color: "white",
  horsePower: 100,
};

const personObject = {
  name: "Ivan",
  hobbies: ["football", "hiking"],
  greet: function () {
    return "Hello!";
  },
};

type Role = {
  role: "manager" | "founder";
};
type Permission = {
  permission: "admin" | "user";
};
type User = Role & Permission;

const user: User = {
  role: "founder",
  permission: "admin",
};

console.log(user);

interface Animal {
  species: string;
  breed?: string;
  age: number;
  weight?: number;
  name: string;
}

const animal: Animal = {
  species: "dog",
  age: 5,
  name: "Tom",
};

interface AnotherCarInterface {
  type: string;
  model: "500" | "Bravo";
  color: "white" | "black";
  horsePower: number;
  startEngine: () => string;
}

const carObject: AnotherCarInterface = {
  type: "Fiat",
  model: "500",
  color: "white",
  horsePower: 100,
  startEngine: function () {
    return "Start engine";
  },
};

console.log(carObject.startEngine());

const keys = Object.keys(carObject);
console.log(keys);

const values = Object.values(carObject);
console.log(values);

const concatinatedObjects = Object.assign({}, carObject, animal);
console.log(concatinatedObjects);
