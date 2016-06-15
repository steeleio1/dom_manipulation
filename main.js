// 


var addition = function (x) {
x.preventDefault();

var valueone = Number(document.querySelector("#value-one").value);
// console.log("WE MADE IT!");

var valuetwo = Number(document.querySelector("#value-two").value);

var addvalues = valueone + valuetwo;
// console.log(addvalues);
// console.log("uhhh .. am I here?");

answer.innerHTML = addvalues

};




var calculatebutton = document.querySelector("#calculate-button");
calculatebutton.addEventListener("click", addition);
