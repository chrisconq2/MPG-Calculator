"use strict";

function calculateMpg() {
let miles = parseFloat(document.getElementById("miles").value);
console.log(miles);
let gallons = parseFloat(document.getElementById("gallons").value);
console.log(gallons);

let mpg = parseFloat(miles/gallons).toFixed(2);
document.getElementById("mpg").textContent = mpg;
}

document.getElementById("submit").addEventListener("click", function(event) {
	calculateMpg();
});



