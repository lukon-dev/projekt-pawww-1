document.addEventListener("DOMContentLoaded", startCzasData);
function startCzasData() {
  piszData();
  piszCzas();
  setInterval(piszCzas, 1000);
}
function piszCzas() {
  let d = new Date();
  let hh = d.getHours();
  let mm = d.getMinutes();
  let ss = d.getSeconds();
  let czas = "";
  czas += (hh < 10 ? "0" : "") + hh;
  czas += (mm < 10 ? ":0" : ":") + mm;
  czas += (ss < 10 ? ":0" : ":") + ss;
  document.getElementById("czas").innerHTML = czas;
}

function piszData() {
  let d = new Date();
  let dd = d.getDate();
  let mm = d.getMonth() + 1;
  let yyyy = d.getFullYear();
  let data = "";

  data += (dd < 10 ? "0" : "") + dd;
  data += "." + (mm < 10 ? "0" : "") + mm;
  data += "." + yyyy;

  document.getElementById("data").innerHTML = data;
}
