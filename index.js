//DOM how to select html element
var x =document.getElementById("love");
x.innerHTML="Ofcourse love my homeland bangladesh";

document.getElementsByTagName("p")[0].innerHTML="Paragraph change by using tagName";//tag er index mention korte hobe
document.getElementsByClassName("lov")[0].innerHTML="love u java script";//class er index mention korte hobe
// query selector id hole (#) dite hobe class hole (.) dite hobe
document.querySelector("#fjj").innerHTML="mobile game id";
document.querySelector(".fjj").innerHTML="mobile game class";
document.querySelector("h2").innerHTML="mobile game tag";
// element er moddha element select korte hole...
document.querySelector("p a").innerHTML="yes we can do";