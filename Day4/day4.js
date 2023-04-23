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

// Nguyên tắc: Khi set Value vào trong localStorage nếu dữ liệu chúng ta lưu là dạng Oject hoặc array => Phải dùng dùng JSON.stringify() giá trị đó trước
// rồi mới lưu vào localStorage
// let getValue = localStorage.getItem("StudentOfMindx"); // => JSON.parse(localStorage.getItem("StudentOfMindx"))

let inputName = document.getElementById("inputName");
let inputAge = document.getElementById("inputAge");
let inputUniversity = document.getElementById("inputUniversity");

let student = {
  name: "Phương",
  age: 22,
  university: "Hanu",
};

// let name = "Phương";
// console.log(name[1]);
console.log(student);
// let t = JSON.stringify(student);
// console.log(t);
// console.log(t[2]);

localStorage.setItem("StudentOfMindx", JSON.stringify(student));

let btnSave = document.querySelector("button");
btnSave.addEventListener("click", function () {
  let check =
    inputName.value != "" &&
    inputAge.value != "" &&
    inputUniversity.value != "";
  // console.log("Check = " + check);
  // Check điều kiện
  console.log(inputName == "" && inputAge == "" && inputUniversity == "");
  if (check) {
    let personLocalStorage = JSON.parse(localStorage.getItem("StudentOfMindx")); // => ĐỐi tương
    console.log("Value từ input = " + inputName.value);
    personLocalStorage.name = inputName.value;
    personLocalStorage.age = inputAge.value;
    personLocalStorage.university = inputUniversity.value;
    localStorage.setItem("StudentOfMindx", JSON.stringify(personLocalStorage));
    inputName.value = "";
    inputAge.value = "";
    inputUniversity.value = "";
  } else {
    if (inputName.value == "" && inputAge.value == "") {
      alert("Bạn còn đang nhập thiếu inputName và inputAge");
    } else if (inputName.value == "" && inputUniversity.value == "") {
      alert("Bạn còn đang nhập thiếu inputName và inputUniversity");
    }
  }
});
//Lấy đối string -> object: JSON.parse()
