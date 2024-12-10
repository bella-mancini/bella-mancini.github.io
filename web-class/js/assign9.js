const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const img = ['../../img/Photoshoot-1.jpg', `../../img/Photoshoot-2.jpg`, `../../img/Photoshoot-3.jpg`, `../../img/Photoshoot-4.jpg`, `../../img/Photoshoot-5.jpg`];
const alts = {
  '../../img/Photoshoot-1.jpg' : 'girl in purple',
  '../../img/Photoshoot-2.jpg' : 'girl in purple',
  '../../img/Photoshoot-3.jpg' : 'girl in red',
  '../../img/Photoshoot-4.jpg' : 'girl in red',
  '../../img/Photoshoot-5.jpg' : 'girl in blue'
}

/* Looping through images */

for (const image of img) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `../img/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

