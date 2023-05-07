let input = document.querySelector("#name");
let btn = document.querySelector("button");

let containerContent = document.querySelector(".container_content");
let emptyString = "";
let count = 1;
let listBtn;

let firstGetTodoList = JSON.parse(localStorage.getItem("TodoListChuaBai"));
if (firstGetTodoList == null) {
  localStorage.setItem("TodoListChuaBai", JSON.stringify([]));
  window.location.reload();
} else {
  // Lặp các giá trong localStorage để render ra dữ liệu
  for (let i = 0; i < firstGetTodoList.length; i++) {
    let divItem = document.createElement("div");
    divItem.innerHTML = `<span>${firstGetTodoList[i].id}</span>
            <div class="content">
                <p>${firstGetTodoList[i].valueList}</p>
            </div>
            <div onclick="remove()" class="remove">
                X
            </div>`;
    divItem.className = "item";
    containerContent.appendChild(divItem);
  }

  // Add ne list
  btn.addEventListener("click", function () {
    let newList = {
      id: firstGetTodoList.length + 1,
      valueList: input.value,
    };

    // Input if thỏa mãn
    if (input.value != null && input.value != "") {
      let divItem = document.createElement("div");
      divItem.innerHTML = `<span>${firstGetTodoList.length + 1}</span>
            <div class="content">
                <p>${input.value}</p>
            </div>
            <div onclick="remove()" class="remove">
                X
            </div>`;
      divItem.className = "item";
      containerContent.appendChild(divItem);
      input.value = "";
      // count = count + 1;
      firstGetTodoList.push(newList);
      localStorage.setItem("TodoListChuaBai", JSON.stringify(firstGetTodoList));
    }
  });

  function remove() {
    let span = document.querySelectorAll(".item span");
    for (let i = 0; i < span.length; i++) {
      let t = span[i].innerHTML;
      console.log(t);
    }
    this.event.target.parentElement.remove();
  }
}
