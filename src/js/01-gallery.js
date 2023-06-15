// Add imports above this line

import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

const listItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item ">
      <a class="gallery__link" href=${original}>
      <img class="gallery__image"
         src=${preview}
               alt ='${description}'>
       </a>
        </li>`
  )
  .join('');

galleryEl.style.listStyle = 'none';

galleryEl.insertAdjacentHTML('beforeend', listItems);

galleryEl.addEventListener('click', onClick);

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

function onClick(evt) {
  evt.preventDefault();
}

console.log(galleryItems);
