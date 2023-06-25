let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");

let registerButton = document.querySelector("#registerButton");

let arrayPerson = [];
let getListUser = JSON.parse(localStorage.getItem("ListUser"));
if (getListUser == null) {
  localStorage.setItem("ListUser", JSON.stringify([]));
  window.location.reload();
} else {
  registerButton.addEventListener("click", function () {
    if (getListUser.length < 1) {
      console.log("Hello");
      getListUser.push({
        username: usernameInput.value,
        password: passwordInput.value,
      });
      localStorage.setItem("ListUser", JSON.stringify(getListUser));
    } else {
      if (checkUserExisted(usernameInput.value, getListUser) == true) {
        getListUser.push({
          username: usernameInput.value,
          password: passwordInput.value,
        });
        localStorage.setItem("ListUser", JSON.stringify(getListUser));
      } else {
        alert("Ten da duoc ton tai");
      }
    }
  });
}
// function có 2 đầu vào, đầu vào thứ 1 là username đc nhập từ input, đầu vào thú 2 là mảng user đã có tài khoản trong localStorage
function checkUserExisted(userLoginFromInput, dataUser) {
  for (let i = 0; i < dataUser.length; i++) {
    if (userLoginFromInput == dataUser[i].username) {
      return false;
    } else {
      return true;
    }
  }
}
