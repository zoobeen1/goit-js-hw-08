// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

//Создание разметки элемента галлереи
const images = galleryItems.map(item => {
  const anchor = document.createElement('a');
  anchor.classList.add('gallery__item');
  anchor.href = item.original;
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;
  anchor.append(img);
  return anchor;
});

gallery.append(...images);

let lightbox = new SimpleLightbox('.gallery a', {
  //options
  caption: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
