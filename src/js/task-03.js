const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Make Gallery
const createGalleryItem = items => {
  return items.map(({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}"</li>`
  }).join("");
}

const galleryEl = document.querySelector('#gallery');
galleryEl.insertAdjacentHTML("beforeend", createGalleryItem(images));

// Add classes
galleryEl.classList.add("gallery");

const itemsEl = galleryEl.querySelectorAll('li');
itemsEl.forEach(element => element.classList.add("gallery__item"));

const imgEl = galleryEl.querySelectorAll('img');
imgEl.forEach(element => element.classList.add("gallery__img"));

//Add styles
const galleryStyle = document.querySelectorAll('.gallery');
galleryStyle.forEach(element => {
  element.style.listStyle = "none";
  element.style.display = "flex";
  element.style.justifyContent = "space-around";
  element.style.padding = "0";
});

const galleryImgStyle = document.querySelectorAll('.gallery__img');
galleryImgStyle.forEach(element => {
  element.style.width = "400px";
  element.style.height = "250px";
  element.style.objectFit = "cover";
});