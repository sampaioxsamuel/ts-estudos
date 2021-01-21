"use strict";
var numero1 = document.querySelector('.number1');
var numero2 = document.querySelector('.number2');
var button = document.querySelector('.somar');
var sum = function (a, b) {
    return a + b;
};
button.addEventListener('click', function () {
    return console.log(sum(Number(numero1.value), Number(numero2.value)));
});
