import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form");

const galleryList = document.querySelector(".gallery");

const loader = document.querySelector('.loader');


const lightbox = new SimpleLightbox('.gallery a', {
    nav: true,
    captionDelay: 250,
    captionsData: 'alt',
    close: true,
    enableKeyboard: true,
    docClose: true,
  });


 function searchImg (q = "cat") {
  const searchParamsDefaults = new URLSearchParams({
    key: '41901315-991c01eb87449dbd0d544d02b',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
});
    return fetch(`https://pixabay.com/api/?${searchParamsDefaults}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Request is not OK");
            }
            return response.json();
        })
        .then(({ hits }) => {
            if(hits.length > 0){
                const renderImg = hits.reduce((html, img) => {
                    return (
                      html +
                      `<li class="gallery-item">
                  <a href=${img.largeImageURL}> 
                    <img class="gallery-img" src =${img.webformatURL} alt=${img.tags}/>
                  </a>
                  <div class="gallery-text-box">
                    <p>Likes: <span class="text-value">${img.likes}</span></p>
                    <p>views: <span class="text-value">${img.views}</span></p>
                    <p>comments: <span class="text-value">${img.comments}</span></p>
                    <p>downloads: <span class="text-value">${img.downloads}</span></p>
                </div>
                </li>`
                    );
                  }, '');

                  galleryList.innerHTML = renderImg;
                  lightbox.refresh();
            } 
            else {
                iziToast.error({
                  position: 'topRight',
                  message:
                    'Sorry, there are no images matching your search query. Please try again!',
                });
        }
     })
     .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        loader.style.display = 'none';
      });
}

form.addEventListener('submit', event => {
    event.preventDefault();
    galleryList.innerHTML = '';
    loader.style.display = 'block';
    searchImg(event.target.elements.search.value.trim());
    event.currentTarget.reset();
  });



