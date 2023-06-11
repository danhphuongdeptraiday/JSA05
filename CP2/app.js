let d = document.getElementById("day");

setInterval(function () {
  let t = new Date();
  let d1 = t.getDay();
  let h = t.getHours();
  let m = t.getMinutes();
  let s = t.getSeconds();

  if (d1 == 0) {
    d.innerText = "SU";
  } else if (d1 == 1) {
    d.innerText = "MO";
  } else if (d1 == 2) {
    d.innerText = "TU";
  } else if (d1 == 3) {
    d.innerText = "WE";
  } else if (d1 == 4) {
    d.innerText = "TH";
  } else if (d1 == 5) {
    d.innerText = "FR";
  } else if (d1 == 6) {
    d.innerText = "SA";
  }
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}, 1000);
