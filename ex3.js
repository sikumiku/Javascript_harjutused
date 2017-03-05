'use strict';

/*Kirjutage funktsioon, mis teeb nähtavaks index.html-is oleva DIV-i ID-ga
     "result-div" ja paneb DIV-i ID-ga "result" sisuks "Hello".

     Nähtavaks tegemiseks peaks muutma objekti stiili "display".
     Väärtuseks tuleb panna "block".*/

function makeDivVisible() {

    var resultDiv = document.getElementById("result-div");
    var changeddisplay = resultDiv.getAttribute("display");
    changeddisplay.innerText = "block";
}

function changetoHello() {
    var resultContent = document.getElementById("result");
    resultContent.innerText = 'Hello';
}

