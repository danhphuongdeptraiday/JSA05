let inputLocation = document.getElementById("location");
let inputCheckIn = document.getElementById("checkIn");
let inputCheckOut = document.getElementById("checkOut");
let inputGest = document.getElementById("gest");

let arraySearchHistory = [];
let searchBtn = document.getElementById("search");

let getListSearchHistory = JSON.parse(localStorage.getItem("historySearch"));
if (getListSearchHistory == null) {
  localStorage.setItem("historySearch", JSON.stringify([]));
  location.reload();
} else {
  searchBtn.addEventListener("click", function () {
    console.log(inputLocation.value);
    console.log(inputCheckIn.value);
    console.log(inputCheckOut.value);
    console.log(inputGest.value);

    getListSearchHistory.push({
      locationName: inputLocation.value,
      checkIn: inputCheckIn.value,
      checkOut: inputCheckOut.value,
      gestName: inputGest.value,
    });

    localStorage.setItem("historySearch", JSON.stringify(getListSearchHistory));

    console.log(arraySearchHistory);
    if (inputLocation.value == "Hạ Long") {
      window.location.href = "./halong.html";
    }
  });
}
