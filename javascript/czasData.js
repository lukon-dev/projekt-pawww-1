

document.addEventListener("DOMContentLoaded", startCzasData);
function startCzasData(){
setInterval(piszCzas,1000);
}
function piszCzas(){
   let d = new Date();
   let hh = d.getHours();
   let mm = d.getMinutes();
   let ss = d.getSeconds();
   let czas = "";
   czas += ((hh < 10) ? "0" : "" ) + hh;
   czas += ((mm < 10) ? "0" : ":" ) + mm;
   czas += ((ss < 10) ? "0" : ":" ) + ss;
   document.getElementById("czasData").innerHTML = "godz: " + czas;
}