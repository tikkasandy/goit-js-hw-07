// const fontSize = document.querySelector('#font-size-control');
// console.dir(fontSize.value);

// const textEl = document.querySelector('#text');
// textEl.style.fontSize = `${fontSize.value}px`;

const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const primaryInputFontSize = fontSizeEl.value;
const primaryTextFontSize = 16;

fontSizeEl.addEventListener('input', onFontChange);

function onFontChange(event) {
    const value = event.currentTarget.value;
    textEl.style.fontSize = `${value * primaryTextFontSize / primaryInputFontSize}px`;
};