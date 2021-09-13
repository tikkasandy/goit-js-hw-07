const inputAmountEl = document.querySelector('input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxEl = document.querySelector('#boxes');

renderBtn.addEventListener('click', e => { createBoxes(inputAmountEl.value) });

function createBoxes(amount) {
  boxEl.innerHTML = '';
  const boxSize = 30;
  const arrayOfBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    box.style.width = `${boxSize + 10 * i}px`;
    box.style.height = `${boxSize + 10 * i}px`;
    box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    
    arrayOfBoxes.push(box);
  };

  boxEl.append(...arrayOfBoxes);

};

destroyBtn.addEventListener('click', cleanBoxes);

function cleanBoxes() {
  boxEl.innerHTML = '';
  inputAmountEl.value = '';
};


function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}