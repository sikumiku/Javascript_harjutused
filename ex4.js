'use strict';

//Tehke nupp, millele vajutades kuvatakse lehel "Hello".

var button = document.createElement("button");
button.id = "button1";

document.body.appendChild(button);

button.onclick = function () {
    var text = document.createElement("p");
    text.innerText = "Hello";
    document.body.appendChild(text);
};