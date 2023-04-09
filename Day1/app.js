// Bai 1
function bai1() {
  // Cach 1
  //     let a = prompt("Enter some thing");
  // let b = prompt("Enter some thing");
  // let c = prompt("Enter some thing");
  // let d = prompt("Enter some thing");
  // let e = prompt("Enter some thing");

  // let array = [a, b, c, d, e];
  // console.log(array);

  // Cach 2:

  let array = [];
  for (let i = 0; i < 5; i++) {
    let value = prompt("Enter value at position " + i);
    while (value === "" || value == null) {
      // => Neu nhap la null || ""
      let newValue = prompt("Enter value at position " + i + " again !"); // => tao bien newValue moi
      if (newValue !== "" && newValue != null) {
        // => neu newValue thoa man dk trong if
        value = newValue; // => gan cho value bi null thanh value = newValue
        break;
      }
    }
    array.push(value);
  }

  console.log(array);
}
// Bai 2
function bai2() {
  let car = {
    carName: "Civic",
    bran: "Honda",
  };

  let arrayObject = [];
  let n = prompt("Enter members ?");

  for (let i = 0; i < n; i++) {
    let personNameFromInput = prompt("Enter person's name at " + i + " ?");
    let personAgeFromInput = prompt("Enter person's age at " + i + " ?");
    let person = {
      personName: personNameFromInput,
      personAge: personAgeFromInput,
    };
    arrayObject.push(person);
  }

  console.log(arrayObject);
}

let arrayPerson = [
  {
    name: "Vinh",
    age: 15,
  },
  {
    name: "Lâm",
    age: 14,
  },
  {
    name: "Đức Anh",
    age: 12,
  },
  {
    name: "Quý",
    age: 18,
  },
  {
    name: "Việt Anh",
    age: 1,
  },
];

// let tenCauBai = prompt("Enter bai ");
// if (tenCauBai == 1) {
//   bai1();
// } else if (tenCauBai == 2) {
//   bai2();
// } else {
//   alert("Ban da nhap sai bai");
// }

function doSomething(name, age) {
  return "My name is " + name + ", I am " + age;
}
let name = prompt("Enter name");
let age = prompt("Enter age");
let valueOfFunction = doSomething(name, age);
console.log(valueOfFunction);
