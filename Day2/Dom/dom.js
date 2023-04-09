let h1Element = document.getElementById("name");
console.log(h1Element);
h1Element.innerText = "Lâm cute";
console.log(h1Element.innerText);

let listLiElement = document.getElementsByTagName("li"); // => trả về 1 mảng
console.log(listLiElement);

for (let i = 0; i < listLiElement.length; i++) {
  console.log(listLiElement[i].innerText);
}

let listClassNameHihi = document.querySelectorAll(".hihi");
console.log(listClassNameHihi);

let h1Created = document.createElement("h1");
h1Created.innerText = "Hà nội hôm nay khá đẹp";
h1Created.style.color = "red";
document.body.appendChild(h1Created);

// add event
let btn = document.querySelector("#btn");
let btnToggle = document.querySelector("#toggle");
let box = document.querySelector(".box");

btn.addEventListener("click", function () {
  let color = prompt("Enter color");
  box.style.backgroundColor = color;
});

btnToggle.addEventListener("click", function () {
  //   box.style.display = "none";
  if (box.style.display == "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});
