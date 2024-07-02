"use strict";
const password = document.getElementById('password');
const slider = document.getElementById('passlen');
const sliderValue = document.getElementById('value');
const button = document.getElementById('button');
const AZCheckbox = document.getElementById('AZ');
const azCheckbox = document.getElementById('az');
const numbersCheckbox = document.getElementById('numbers');
const specialCharCheckbox = document.getElementById('specialChar');
const charUpperList = 'ABCDEFGHIJKLMNOPRSTUWVYZ';
const charList = 'abcdefghijklmnoprstuwvyz';
const numberList = '0123456789';
const specialCharList = '!#$^&()-=+/';
let finalCharList = '';
let valueToAppend = '';
slider.addEventListener('input', () => {
    sliderValue.innerHTML = slider.value;
});
AZCheckbox.addEventListener('change', () => {
    if (AZCheckbox.checked) {
        finalCharList = finalCharList.concat(charUpperList);
    }
    else {
        finalCharList = finalCharList.replace(charUpperList, '');
    }
});
azCheckbox.addEventListener('change', () => {
    if (azCheckbox.checked) {
        finalCharList = finalCharList.concat(charList);
    }
    else {
        finalCharList = finalCharList.replace(charList, '');
    }
});
numbersCheckbox.addEventListener('change', () => {
    if (numbersCheckbox.checked) {
        finalCharList = finalCharList.concat(numberList);
    }
    else {
        finalCharList = finalCharList.replace(numberList, '');
    }
});
specialCharCheckbox.addEventListener('change', () => {
    if (specialCharCheckbox.checked) {
        finalCharList = finalCharList.concat(specialCharList);
    }
    else {
        finalCharList = finalCharList.replace(specialCharList, '');
    }
});
button.addEventListener('click', () => {
    for (let i = 0; i < Number(slider.value); i++) {
        const toAppend = finalCharList[Math.floor(Math.random() * finalCharList.length)];
        valueToAppend = toAppend.concat(valueToAppend);
    }
    password.value = valueToAppend;
    valueToAppend = '';
});
