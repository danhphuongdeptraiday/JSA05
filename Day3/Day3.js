let input = document.querySelector("#name");
let btn = document.querySelector("button");

let containerContent = document.querySelector(".container_content");
let emptyString = "";
let count = 1;
let listBtn;
btn.addEventListener("click", function () {
  if (input.value != null && input.value != "") {
    let divItem = document.createElement("div");
    divItem.innerHTML = `<span>${count}</span>
            <div class="content">
                <p>${input.value}</p>
            </div>

            <div onclick="remove(event)" class="remove">
                X
            </div>`;
    divItem.className = "item";
    containerContent.appendChild(divItem);
    input.value = "";
    count = count + 1;
  }
});
function remove() {
  let span = document.querySelectorAll(".item span");
  for (let i = 0; i < span.length; i++) {
    span[i].innerHTML = i + 1;
    console.log(i + 1);
  }
  //   this.event.target.parentElement.remove();
}
// let removeBTN = document.querySelector(".remove");
//     console.log(removeBTN);
//     removeBTN.addEventListener("click", function () {
//       let t = removeBTN.parentElement;
//       console.log(t);
//     });

//   input.value = "";
//   let itemDiv = document.createElement("div");
//   let contentDiv = document.createElement("div");
//   let p = document.createElement("p");
//   p.innerText = "Hello";
//   contentDiv.appendChild(p);
//   itemDiv.appendChild(contentDiv);
//   containerContent.appendChild(itemDiv);
