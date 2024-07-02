const password = document.getElementById('password') as HTMLInputElement;
const slider = document.getElementById('passlen') as HTMLInputElement;
const sliderValue = document.getElementById('value') as HTMLDivElement;
const button = document.getElementById('button') as HTMLButtonElement;

const AZCheckbox = document.getElementById('AZ') as HTMLInputElement;
const azCheckbox = document.getElementById('az') as HTMLInputElement;
const numbersCheckbox = document.getElementById('numbers') as HTMLInputElement;
const specialCharCheckbox = document.getElementById('specialChar') as HTMLInputElement;

const charUpperList: string = 'ABCDEFGHIJKLMNOPRSTUWVYZ';
const charList: string = 'abcdefghijklmnoprstuwvyz';
const numberList: string = '0123456789';
const specialCharList: string = '!#$^&()-=+/';

let finalCharList: string = '';
let valueToAppend: string = '';

slider.addEventListener('input', () => {
    sliderValue.innerHTML = slider.value;
});

AZCheckbox.addEventListener('change', () => {
    if(AZCheckbox.checked) {
        finalCharList = finalCharList.concat(charUpperList);
    } else {
        finalCharList = finalCharList.replace(charUpperList, '');
    }
});

azCheckbox.addEventListener('change', () => {
    if(azCheckbox.checked) {
        finalCharList = finalCharList.concat(charList);
    } else {
        finalCharList = finalCharList.replace(charList, '');
    }
});

numbersCheckbox.addEventListener('change', () => {
    if(numbersCheckbox.checked) {
        finalCharList = finalCharList.concat(numberList);
    } else {
        finalCharList = finalCharList.replace(numberList, '');
    }
});

specialCharCheckbox.addEventListener('change', () => {
    if(specialCharCheckbox.checked) {
        finalCharList = finalCharList.concat(specialCharList);
    } else {
        finalCharList = finalCharList.replace(specialCharList, '');
    }
});

button.addEventListener('click', () => {
    for(let i = 0; i < Number(slider.value); i++){
        const toAppend: string = finalCharList[Math.floor(Math.random() * finalCharList.length)];
        valueToAppend = toAppend.concat(valueToAppend);
    }
    password.value = valueToAppend;
    valueToAppend = '';
});