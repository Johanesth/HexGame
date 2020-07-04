

(function(){
    "use strict"


// Formula para obtener el color del fondo
function randomBackgorundColor () {
    var backgroundColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return backgroundColor2
}

// Variable para pintar cuando carga la pagina
var primerColor = randomBackgorundColor()

// Funcion para cambiar el color cuando carga la pagina
function pintar(){
    document.body.style.backgroundColor = primerColor 
    primerColor = randomBackgorundColor()
}

// Asignar color cuando carga la pagina
document.onload = pintar()







// Funcion para evaluar el color ingresado por el usuario
function evaluateHex() {
    let inputText = document.getElementById("Input").value;
    if ((inputText.length != 6 && inputText.length != 3) || (!(/^#[0-9A-F]{6}$/i.test("#" + inputText)) && !(/^#[0-9A-F]{3}$/i.test("#" + inputText)))) {
      alert("Please guess a valid 6-character (#000000 - #ffffff) or 3-character hex value (#000 - #fff)");
    } else {
      //if (("#" + inputText) == backgroundColor1) {
      //  console.log(inputText)
      //}
  
      document.getElementById("colorCircle").style.backgroundColor = "#" + inputText;
      document.getElementById("result-answer").innerText = primerColor;
      // document.getElementById("answerContainer").visibility = visible;
    }
  }
  
// Evento CHECK IT
var y = document.getElementById("checkIt")
// addEventListener
y.addEventListener('click',evaluateHex)





// Evento ANOTHER
var z = document.getElementById('cambioColor')
z.addEventListener('click',pintar)









/*
  const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
console.log(hexToRgb(backgroundColor1))




var hex2Rgb = function(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})|([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
    return result ? {        
      r: parseInt(hex.length <= 4 ? result[4]+result[4] : result[1], 16),
      g: parseInt(hex.length <= 4 ? result[5]+result[5] : result[2], 16),
      b: parseInt(hex.length <= 4 ? result[6]+result[6] : result[3], 16),
      toString: function() {
        var arr = [];
        arr.push(this.r);
        arr.push(this.g);
        arr.push(this.b);
        return "rgb(" + arr.join(",") + ")";
      }
    } : null;
  };
  console.log(hex2Rgb(backgroundColor1))
  */



})()