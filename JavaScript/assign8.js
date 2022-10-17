const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, when Bob was walking to :insertx:. When they got there :inserty: was handed to Bob to start the event. the main speaker of the night, :insertz:, stepped on the stage and started weighing everyones :inserty:. Bobs  :inserty: was the biggest weighing in at 200 pounds. Bob was so proud they lifted :inserty: above their head and passed out. When they woke up they was in their bed.';
const insertX = ['your moms house', 'the foot fetish convention', 'the cult meeting'];
const insertY = ['a tube of liquid', 'a pamphet', 'your mom'];
const insertZ = ['Danny Devito', 'Debby Ryan', 'the Koolaid man'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const ItemX = randomValueFromArray(insertX);
  const ItemY = randomValueFromArray(insertY);
  const ItemZ = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',ItemX);
  newStory = newStory.replaceAll(':inserty:',ItemY);
  newStory = newStory.replaceAll(':insertz:',ItemZ);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}