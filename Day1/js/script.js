window.onload = function(){

var body = document.getElementById("body");
function image(){return document.createElement("img")};
function button(){return document.createElement("button")};
function div(){return document.createElement("div")};
var buttonkeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

//Background Image
var backgroundImage = image();
backgroundImage.src = "images/background-18.jpg";
backgroundImage.alt = "Psychedelic Background";
body.appendChild(backgroundImage);

//Append div
var div = div();
body.appendChild(div);

//Create Drumkit Buttons

for (var i = 0; i<9; i++){
  var buttons = button();
  buttons.innerText=buttonkeys[i];
  div.appendChild(buttons);
}



}
