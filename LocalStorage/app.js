// Lưu dữ liệu vào trong localStorage: localStorage.setItem(key, value);
localStorage.setItem("name", "Quí");
localStorage.setItem("number", 1);

// Lấy dữ liệu từ trong localStorage: localStorage.getItem(key);
let t = localStorage.getItem("number");

// Xóa tất cả dữ liệu từ trong localStorage: localStorage.clear()
// ....... 1 ..............................: localStorage.removeItem(key)
let deleteBtn = document.querySelector("button");
let input = document.querySelector("input");
deleteBtn.addEventListener("click", function () {
  localStorage.removeItem(input.value);
});
console.log(t);

// Note: Advance localStorage JSON
let person = {
  name: "Quí",
  age: 18,
};

// let jsonObject = JSON.stringify(person);
// console.log(typeof jsonObject);

localStorage.setItem("newPerson", JSON.stringify(person));

let getValue = localStorage.getItem("newPerson");
console.log(person);
let temp = JSON.parse(localStorage.getItem("newPerson"));
console.log(temp.name);

console.log(JSON);
