// let name = "Nguyễn Danh Phương";
// let splitFunction = name.split("");
// console.log(splitFunction);

let phepToan = "88 x 66";
let tachTuString = phepToan.split(" ");

console.log(tachTuString);

let moreBTN = document.querySelector(".more");
let toggle = document.querySelector(".toggle");
moreBTN.addEventListener("mouseover", function () {
  toggle.style.backgroundColor = "blue";
});

moreBTN.addEventListener("mouseout", function () {
  toggle.style.backgroundColor = "red";
});
