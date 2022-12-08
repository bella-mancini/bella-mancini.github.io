const output1 = document.querySelector('.output1');
/*const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');*/

let output1Int = parseInt(output1.textContent);
/*let output2Int = parseInt(output2.textContent);
let output3Int = parseInt(output3.textContent);*/


const colorButton = document.querySelector('.color-button').addEventListener('click', deckBuilder);
/*const HLButton = document.querySelector('.HL-button').addEventListener('click', random3);
const BOButton = document.querySelector('.BO-button').addEventListener('click', random3);
const SuitButton = document.querySelector('.Suit-button').addEventListener('click', random3);*/


function deckBuilder () {
    const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

    const cards = [];
    for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
    const value = values[v];
    const suit = suits[s];
    cards.push({ value, suit });
  }
}
return cards;
}
console.log(deckBuilder());

function randomCard(cards) { 
    const random = Math.floor(Math.random() * 51);  
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
  }
  const cards = deckBuilder();
  randomCard(cards);

console.log(randomCard(cards));
function random() {
    outputInt = randomNumber(1, 14);
    output1.textContent = outputInt;
}

