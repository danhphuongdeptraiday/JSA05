let input = document.querySelector("#name");
let btn = document.querySelector("button");

let containerContent = document.querySelector(".container_content");
let emptyString = "";
let count = 1;
let listBtn;
let getTodoList = JSON.parse(localStorage.getItem("todoList"));

if (getTodoList == null) {
  localStorage.setItem("todoList", JSON.stringify([]));
  window.location.reload();
} else {
  //

  for (let i = 0; i < getTodoList.length; i++) {
    let divItem = document.createElement("div");
    divItem.innerHTML = `
    <span>${getTodoList[i].id}</span>
    <div class="content">
        <p>${getTodoList[i].job}</p>
    </div>
  
    <div onclick="remove()" class="remove">
        X
    </div>
    `;
    divItem.className = "item";
    containerContent.appendChild(divItem);
  }

  //
  btn.addEventListener("click", function () {
    let count = getTodoList.length + 1;
    let check = true;
    for (let i = 0; i < getTodoList.length; i++) {
      if (input.value == getTodoList[i].job) {
        check = false;
        console.log(input.value);
      }
    }
    createNotification(check);
    setTimeout(() => {
      let notification = document.querySelector(".notification");
      notification.style.display = "none";
    }, 3000);
    if (input.value != null && input.value != "" && check) {
      let divItem = document.createElement("div");
      divItem.innerHTML = `<span>${count}</span>
      <div class="content">
      <p>${input.value}</p>
      </div>
      
      <div onclick="remove()" class="remove">
      X
      </div>`;
      divItem.className = "item";
      containerContent.appendChild(divItem);
      let newTodoObject = {
        id: count,
        job: input.value,
      };
      getTodoList.push(newTodoObject);
      localStorage.setItem("todoList", JSON.stringify(getTodoList));
      input.value = "";
      count = count + 1;
    }
  });
  function remove() {
    let span = document.querySelectorAll(".item span");
    for (let i = 0; i < span.length; i++) {
      let t = span[i].innerHTML;
      console.log(t);
      // console.log(i + 1);
    }

    this.event.target.parentElement.remove();
    // span = document.querySelectorAll(".item span");
  }
}

function createNotification(check) {
  let notification = document.querySelector(".notification");
  let img = document.querySelector(".notification img");
  let text = document.querySelector(".notification p");

  notification.style.display = "block";

  if (check == true) {
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCjn2ed54xUybuXsD_zSFMCoz7JwzpBuYYx1ROBg&s";
    text.innerText =
      "Oh new job to man :DDD. Try to complete them and have a go !!!";
  } else {
    img.src =
      "https://cdn.iconscout.com/icon/free/png-256/angry-face-14-894765.png?f=webp&w=256";
    text.innerText = "Opps. This job you mentioned above !! -.-";
  }
}
