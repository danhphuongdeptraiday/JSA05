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
