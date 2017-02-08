window.onload = function(){

var body = document.getElementById("body");
function image(){return document.createElement("img")};
function button(){return document.createElement("button")};
function div(){return document.createElement("div")};
function p(){return document.createElement("p")};
var buttonkeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
var keycodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];
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

  buttons.innerText=buttonkeys[i];
  buttons.id=soundTexts[i];
  buttons.appendChild(paragraph);
  div.appendChild(buttons);
}

//SoundPlay function
function play(el){
  for (var j = 0; j<keycodes.length; j++){

      if (el.keyCode===keycodes[j]){
        var sound = new Audio("sounds/"+soundTexts[j]+".wav");
        sound.play();
        var event = document.getElementById(soundTexts[j]);
        event.style.borderColor="Yellow";
        event.style.fontSize= "3.1em";


        setTimeout(function(){
            event.style.borderColor="Black";
            event.style.fontSize = "3em";


        }, 300)
      }


  }

}



//Add EventListener
    window.addEventListener("keydown", play);




}
