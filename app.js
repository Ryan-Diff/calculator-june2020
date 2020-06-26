import { addtest, subtest, multtest, divtest } from './utils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const boogerButton = document.getElementById('add-button');
const boogerSpan = document.getElementById('add-result');
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divspan = document.getElementById('div-result');
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subSpan = document.getElementById('sub-result');
const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multspan = document.getElementById('mult-result');

boogerButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    const sum = addtest(value1, value2);
    boogerSpan.textContent = sum;
});

subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;
    const sub = subtest(value1, value2);
    subSpan.textContent = sub;
});

multButton.addEventListener('click', () => {
    const value1 = multInput1.value;
    const value2 = multInput2.value;
    const mult = multtest(value1, value2);
    multspan.textContent = mult;
});

divButton.addEventListener('click', () => {
    const value1 = divInput1.value;
    const value2 = divInput2.value;
    const div = divtest(value1, value2);
    divspan.textContent = div;
});


