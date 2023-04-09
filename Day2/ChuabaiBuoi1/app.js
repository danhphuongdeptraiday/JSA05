function bai1() {
  let operationInput = prompt("Enter (+, -, *, /)");

  function plus(a, b) {
    return a + b;
  }

  function minus(a, b) {
    return a - b;
  }

  function product(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  if (operationInput == "+") {
    let n1 = Number(prompt("Enter number 1: "));
    let n2 = Number(prompt("Enter number 2: "));
    let count = plus(n1, n2);
    alert(`Tong 2 so ${n1} + ${n2} = ${count}`);
  } else if (operationInput == "-") {
    let n1 = Number(prompt("Enter number 1: "));
    let n2 = Number(prompt("Enter number 2: "));
    let count = minus(n1, n2);
    alert(`Hiệu 2 số ${n1} - ${n2} = ${count}`);
  } else if (operationInput == "*") {
    let n1 = Number(prompt("Enter number 1: "));
    let n2 = Number(prompt("Enter number 2: "));
    let count = product(n1, n2);
    alert(`Tích 2 số ${n1} * ${n2} = ${count}`);
  } else if (operationInput == "/") {
    let n1 = Number(prompt("Enter number 1: "));
    let n2 = Number(prompt("Enter number 2: "));
    let count = divide(n1, n2);
    alert(`Thương 2 số ${n1} / ${n2} = ${count}`);
  } else {
    alert("Error input. Not exits operation");
  }
}

//  Bai sap xep  tang dan
// let array = [20, 2, 1, 9, 0];
//               i
//           j

// =>       [2, 20, 1, 9, 0];
//               i
//                  j

// =>       [2, 1, 20, 9, 0];
//              i
//                     j

// =>       [2, 9, 20, 1, 0];
//              i
//                     j
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//   console.log(`Khi i = ${i} thì đã có sự thay đổi như sau `);
//   for (let j = 0; j < array.length; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//       console.log(array);
//     }
//   }
//   console.log("------------------------");
// }

// console.log(array);
// ----------------------------------------------------------------

// Cong thuc hoan doi 2 so
// a = 10, b = 20
// function swap(a, b) {
//   console.log(`a = ${a}`);
//   console.log(`b = ${b}`);

//   console.log("Sau khi đổi chỗ..............");
//   //   let t = a;  ==> t = 10
//   //   a = b; ==> a = 20
//   //   b = t; ==> b = t = 10
//   a = b; // => a = 20;
//   b = a; // => b = a = 20
//   console.log(`a = ${a}`);
//   console.log(`b = ${b}`);
// }

// swap(10, 20);
// ----------------------------------------------------------------

// Chua bai 2

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

for (let i = 0; i < arrayPerson.length; i++) {
  for (let j = 0; j < arrayPerson.length; j++) {
    if (arrayPerson[i].age < arrayPerson[j].age) {
      let tempAge = arrayPerson[i];
      arrayPerson[i] = arrayPerson[j];
      arrayPerson[j] = tempAge;
    }
  }
}

console.log(arrayPerson);
