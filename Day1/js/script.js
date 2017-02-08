window.onload = function(){

var body = document.getElementById("body");
function image(){return document.createElement("img")};
function button(){return document.createElement("button")};
function div(){return document.createElement("div")};
function p(){return document.createElement("p")};
var buttonkeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
var soundTexts = ["clap", "Hihat", "Kick", "Openhat", "Boom",
"ride", "snare", "Tom", "Tink"];
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
  var paragraph = p();
  paragraph.innerText = soundTexts[i];
  console.log(paragraph);
  buttons.innerText=buttonkeys[i];
  buttons.appendChild(paragraph);
  div.appendChild(buttons);
}



}
