export default function createGalleryMarkup(hits) {
return hits.reduce((acc, image) => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = image;
    return `${acc}
        <div class="photo-card">
    <div class="img-wrap">
        <a href='${largeImageURL}'>
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    </a>
    </div>
    <div class="info">
    <p class="info-item">
        <b class="info-item-decor">Likes</b><span class="info-item-decor">${likes}</span>
    </p>
    <p class="info-item">
        <b class="info-item-decor">Views</b><span class="info-item-decor">${views}</span>
    </p>
    <p class="info-item">
        <b class="info-item-decor">Comments</b><span class="info-item-decor">${comments}</span>
    </p>
    <p class="info-item">
    <b class="info-item-decor">Downloads</b><span class="info-item-decor">${downloads}</span>
    </p>
    </div>
</div>`;
}, '');
}
