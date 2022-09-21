import { fetchImages } from './fetchImages'

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
 

const input = document.querySelector('input'); //форма пошуку
const btnSearch = document.querySelector('.submit'); //кнопка пошуку
const gallery = document.querySelector('.gallery'); //галерея
const btnLoadMore = document.querySelector('.load-more'); //кнопка більше

let simplelightbox = new SimpleLightbox('.gallery a')

btnLoadMore.style.display = 'none'

let numberPage = 1;

btnSearch.addEventListener('click', evt => {
    evt.preventDefault();
    //очистити галерею (виклик функції)
    clearGallery();

    //видалити пробіли на початку і вкінці рядка запиту
    const valueTrim = input.value.trim(); //запит

    //пошук (за умовами)
    if (valueTrim !== '') {
        fetchImages(valueTrim, numberPage).then(data => {
            if (data.hits.length === 0) {
                alert(
                    'Sorry, there are no images matching your search query. Please try again.'
                );
            } else {
                renderImageList(data.hits)
                alert(`Hooray! We found ${data.totalhits} images.`);
                btnLoadMore.style.display = 'block'
                simplelightbox.refresh();
            }
        })
    }
})

btnLoadMore.addEventListener('click', () => {
    numberPage++
    btnLoadMore.style.display = 'none'
    const valueTrim = input.value.trim();
    fetchImages(valueTrim, numberPage).then(data => {
      if (data.hits.length === 0) {
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        renderImageList(data.hits);
        btnLoadMore.style.display = 'block';
        simplelightbox.refresh();
      }
    });

})

//відповідь:
// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
function renderImageList(images) {
    // console.log(images)
    const resolt = images
        .map(image => {
            return `<div class="photo-card">
  <a href='${image.largeImageURL}'><img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>${image.likes}</b>
    </p>
    <p class="info-item">
      <b>${image.views}</b>
    </p>
    <p class="info-item">
      <b>${image.comments}</b>
    </p>
    <p class="info-item">
      <b>${image.downloads}</b>
    </p>
  </div>
</div>`;
        })
        .join('');
    gallery.innerHTML += resolt
}

function clearGallery() {
    gallery.innerHTML = '';
    numberPage = 1;
    btnLoadMore.style.display = 'none'
}




//hits - результат (об'єкт відповідей)
//totalhits - кількість знайдених зображень 