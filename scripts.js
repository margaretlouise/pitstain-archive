// const app = document.getElementById('root');

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(container);

const KEY = 'adacd6cd18d175e61385823b60fbd7b6';
const PHOTOSET = '72157632598057210';
const USER = '67061766@N04';

// Get the Photo set (maybe just use getList)
// https://www.flickr.com/services/api/flickr.photosets.getList.html
// and pull out the list of photo ids so you can find the tags

fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${KEY}&photoset_id=${PHOTOSET}&user_id=${USER}&format=json&nojsoncallback=1`)
  .then((response) => {
    console.log(KEY);
    return response;
  })
  .then((data) => {
    console.log(data);
    //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

    // data.forEach((movie) => {
        // const card = document.createElement('div');
        // card.setAttribute('class', 'card');

        // const h1 = document.createElement('h1');
        // h1.textContent = movie.title;

        // const p = document.createElement('p');
        // movie.description = movie.description.substring(0, 300);
        // p.textContent = `${movie.description}...`

        // container.appendChild(card);
        // card.appendChild(h1);
        // card.appendChild(p);
    // });
  })
  .catch((err) => {
    // TODO: add better error handling
    console.log('hey marg', err);
})

// Get each photo's tags

const PHOTO = '';

fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${KEY}&photo_id=${PHOTO}&user_id=${USER}&format=json&nojsoncallback=1`)
  .then((response) => {
    return response;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // TODO: add better error handling
    console.log('hey marg', err);
})