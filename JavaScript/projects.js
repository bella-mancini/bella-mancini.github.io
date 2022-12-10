const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const img = ['Photoshoot-1.jpg', `Photoshoot-2.jpg`, `Photoshoot-3.jpg`, `Photoshoot-4.jpg`, `Photoshoot-5.jpg`,'Photoshoot-6.jpg', `Photoshoot-7.jpg`, `Photoshoot-8.jpg`, `Photoshoot-9.jpg`, `Photoshoot-10.jpg`];
const alts = {
    'Photoshoot-1.jpg' : 'girl in purple',
    'Photoshoot-2.jpg' : 'girl in purple',
    'Photoshoot-3.jpg' : 'girl in red',
    'Photoshoot-4.jpg' : 'girl in red',
    'Photoshoot-5.jpg' : 'girl in blue',
    'Photoshoot-6.jpg' : 'girl in purple',
    'Photoshoot-7.jpg' : 'girl in purple',
    'Photoshoot-8.jpg' : 'girl in red',
    'Photoshoot-9.jpg' : 'girl in red',
    'Photoshoot-10.jpg' : 'girl in blue'
}

/* Looping through images */

for (const image of img) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `img/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

