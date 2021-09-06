const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('ul');

const createListItems = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    console.log(itemEl);
    return itemEl;
  });
}

const elements = createListItems(ingredients);
listEl.append(...elements);