//  Thêm vào localStorage
// localStorage.setItem("name", "Phuong123");
// localStorage.setItem("age", 22);
// Lấy dữ liệu thông qua key từ localStorage
// let nameFromLocalStorage = localStorage.getItem("name");

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   localStorage.removeItem("name");
// });
// console.log("Name dc lấy từ localStorage: " + nameFromLocalStorage);

let student = {
  id: 1,
  name: "Phương",
  age: 22,
};

// let name = "Phương";
// console.log(name[1]);
console.log(student);
// let t = JSON.stringify(student);
// console.log(t);
// console.log(t[2]);

// Nguyên tắc: Khi set Value vào trong localStorage nếu dữ liệu chúng ta lưu là dạng Oject hoặc array => Phải dùng dùng JSON.stringify() giá trị đó trước
// rồi mới lưu vào localStorage
localStorage.setItem("StudentOfMindx", JSON.stringify(student));
let getValue = localStorage.getItem("StudentOfMindx");
console.log("Value = " + getValue);
