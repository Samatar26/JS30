window.onload = function(){

function body(){return document.getElementById("body")};
function image(){return document.createElement("img")};
function button(){return document.createElement("button")};


//Background Image
var backgroundImage = image();
backgroundImage.src = "images/background-18.jpg";
backgroundImage.alt = "Psychedelic Background";
body().appendChild(backgroundImage);



}
