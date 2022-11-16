var bilListe = ["Saab", "Volvo", "BMW"];
var submit = document.getElementById("sub");
var del = document.getElementById("del");
var loop = document.getElementById("loop");
var key = document.getElementById("key");
var ver = document.getElementById("ver");
var first = document.getElementById("first");
var last = document.getElementById("last");
var firmaNavn = document.getElementById("name").value;
var bilFirma = {
  firmaNavn: "",

  antallAnsatte: "10",

  bilListe,

  betaltSkatt: 1,

  info: function myfunc(tall1, tall2, tall3) {},

  nettSide: "https://github.com/",

  Status: true,
};

submit.onclick = function myfunc() {
  var fNavn = document.getElementById("name");
  bilFirma.firmaNavn = fNavn.value;
  var car = document.getElementById("car").value;
  var len = bilListe.length;
  if (car != "") {
    bilListe[len] = car;
  }

  console.log(bilFirma);
};
//Slett fra array
del.onclick = function myfunc2() {
  bilListe.shift();
  console.log(bilFirma);
};
//Slett nettside
delnett.onclick = function delnettside() {
  delete bilFirma.nettSide;
  console.log(bilFirma);
};
//Loop alle elementene
loop.onclick = function loop() {
  for (const key in bilFirma) {
    console.log(`${key}: ${bilFirma[key]}`);
  }
};
//Loop nøklene
key.onclick = function keyloop() {
  for (let i = 0; i < 10; i++) {
    var keystatus = bilFirma.Status;
    console.log(keystatus);
  }
};
//Loop verdier
ver.onclick = function verloop() {
  alert("Jeg forstår ikke oppgaven");
};
//første element
first.onclick = function first() {
  for (const key in bilFirma) {
    console.log(`${key}: ${bilFirma[key]}`);
    break;
  }
};
last.onclick = function last() {
  // var a = Object.keys(bilFirma);
  var sorted =
    bilFirma[Object.keys(bilFirma)[Object.keys(bilFirma).length - 1]];
  console.log(sorted);
};
