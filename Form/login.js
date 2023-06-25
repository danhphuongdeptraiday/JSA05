let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let userLoginSuccess = document.querySelector("#userLoginSuccess");

let buttonLogin = document.querySelector("#loginButton");
buttonLogin.addEventListener("click", function () {
  let dataUser = JSON.parse(localStorage.getItem("ListUser"));

  // Tạo biến check Login để lưu giá trị của checkAccount trả về (check account sẽ luôn = true/false tùy thuộc vào trị ng dùng nhập)
  let checkLogin = checkAccount(
    usernameInput.value,
    passwordInput.value,
    dataUser
  );

  if (checkLogin == true) {
    userLoginSuccess.innerText = usernameInput.value; // ghi đè tên đăng nhập thành công ra màn hình
    alert("Đăng nhập thành công");
  } else {
    alert("Đăng nhập thất bại, bạn kiểm tra lại tên đăng nhập hoặc mật khẩu");
  }
});

// Tạo hàm check account gồm 3 đầu vào
// 1: tên đăng nhập
// 2: mật khẩu của người dùng
// 3: các tài khoản đã đăng nhập thành công (chúng được lưu trong localStorage)
function checkAccount(username, password, dataUser) {
  for (let i = 0; i < dataUser.length; i++) {
    // check xem tài khoản mật khẩu của ngườu dùng nhập có đúng với 1 trong những account lưu trong localStorage hay k
    if (username == dataUser[i].username && password == dataUser[i].password) {
      return true;
    }
  }
  return false; // chỉ trả về false nếu điều kiện trong if không baoh thoải mãn (tức là usernam chưa tồn tại);
}
