function calculate() {
    'use strict';
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var bmi = document.getElementById('bmi');
    var bmiCalculation;
	bmiCalculation = height * height;
	bmiCalculation = weight / bmiCalculation;
	bmiCalculation = bmiCalculation * 703;
	alert('What is the value of bmiCalculation at this line of the program');
	bmiCalculation = Math.round(bmiCalculation * 100) / 100;
	bmi.value = bmiCalculation;
}
function init() {
    'use strict';
	var myButton = document.getElementById('calculateButton');
	myButton.onclick = calculate;
}

window.onload = init;