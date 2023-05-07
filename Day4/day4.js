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

let btnSave = document.querySelector("button");

// Tạo 1 mảng rỗng trong localStorage
let checkLocal = JSON.parse(localStorage.getItem("Array person"));
// console.log(checkLocal);
if (checkLocal == null) {
  let emptyArray = [];
  localStorage.setItem("Array person", JSON.stringify(emptyArray));
  window.location.reload();
} else {
  btnSave.addEventListener("click", function () {
    let check =
      inputName.value != "" &&
      inputAge.value != "" &&
      inputUniversity.value != "";

    // Tạo đối tượng mới
    let newPerson = {
      name: inputName.value,
      age: inputAge.value,
      university: inputUniversity.value,
    };

    // Thêm đối tượng mới vừa được tạo và cái mảng được set ở dòng 32
    let getArrayPersonFromLocalStorage = JSON.parse(
      localStorage.getItem("Array person")
    );
    getArrayPersonFromLocalStorage.push(newPerson);
    localStorage.setItem(
      "Array person",
      JSON.stringify(getArrayPersonFromLocalStorage)
    );
    inputName.value = "";
    inputAge.value = "";
    inputUniversity.value = "";
    // }
  });
  //Lấy đối string -> object: JSON.parse()
}
