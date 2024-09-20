const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

// console.log(colors["golden rod"]);

// Task 2

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
// console.log(car);

// Task 3
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

// console.log(student.physics.marks);

// Task 4

let student2 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
const keys = Object.keys(student2);
// console.log(keys.length);

// Task 5

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const keys2 = Object.keys(myObject);
for (let ke of keys2) {
  //   console.log(`key: ${ke} | ${typeof ke}`);
  console.log("key :", ke, "|", typeof ke);
}

// console.log(keys2);
