const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li');

    console.log(`Категория: ${categoryTitle}`);
    console.log(`Количество элементов: ${elements.length}`)
})