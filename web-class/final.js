//Input Fields
const input1 = document.createElement("input1");
input1.setAttribute("type", "text");
document.body.appendChild(input1);

const input2 = document.createElement("input2");
input2.setAttribute("type", "text");
document.body.appendChild(input2);

const input3 = document.createElement("input3");
input3.setAttribute("type", "text");
document.body.appendChild(input3);

const input4 = document.createElement("input4");
input4.setAttribute("type", "text");
document.body.appendChild(input4);



//Output buttons
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
const output4 = document.querySelector('.output4');



//Card Output Type
const cardButton = document.querySelector('.card-button').addEventListener('click', ()=> {
    const getCard = randomCard(oneCard);
    output1.innerHTML = getCard.cardValue +" "+"of"+" "+ getCard.cardSuit;
    if (getCard.cardSuit === 'Hearts' || getCard.cardSuit === 'Diamonds' && input1.innerHTML === 'red') {
        alert("Correct! Go to next round!");
    }
    
    else if (getCard.cardSuit == 'Clubs' || getCard.cardSuit == 'Spades' && input1.innerHTML == 'black') {
        alert("Correct! Go to next round!");
    }
    else {
        alert("Your wrong drink and start over");
    }
    
});

const card2Button = document.querySelector('.card2-button').addEventListener('click', ()=> {
    const getCard = randomCard(oneCard);
    output2.innerHTML = getCard.cardValue +" "+"of"+" "+ getCard.cardSuit;

  

    if (getCard.cardValue < output1 && input2.innerHTML === 'higher') {
        alert("Correct! Go to next round!");
    }

    if (getCard.cardValue > output1 && input2.innerHTML === 'lower') {
        alert("Correct! Go to next round!");
    }
    
    else {
        alert("Your wrong drink and start over");
    }

});

const card3Button = document.querySelector('.card3-button').addEventListener('click', ()=> {
    const getCard = randomCard(oneCard);
    output3.innerHTML = getCard.cardValue +" "+"of"+" "+ getCard.cardSuit;

  
});

const card4Button = document.querySelector('.card4-button').addEventListener('click', ()=> {
    const getCard = randomCard(oneCard);
    output4.innerHTML = getCard.cardValue +" "+"of"+" "+ getCard.cardSuit;

    if (getCard.cardSuit === 'Hearts' && input1.innerHTML === 'Hearts') {
        alert("Correct! Go to next round!");
    }
    
    else if (getCard.cardSuit === 'Clubs' && input1.innerHTML === 'Clubs') {
        alert("Correct! Go to next round!");
    }

    else if (getCard.cardSuit === 'Diamonds' && input1.innerHTML === 'Diamonds') {
        alert("Correct! Go to next round!");
    }

    else if (getCard.cardSuit === 'Spades' && input1.innerHTML === 'Spades') {
        alert("Correct! Go to next round!");
    }

    else {
        alert("Your wrong drink and start over");
    }

  
});


function HL() {
    if (input2 === 'higher' && output2 > output1) {
        alert("Correct! Go to next round!");
    }
    else {
        alert("Your wrong drink and start over");
    }

    if (input2 === 'lower' && output2 < output1) {
        alert("Correct! Go to next round!");
    }
    else {
        alert("Your wrong drink and start over");
    }
}

function BO() {
    if (input3 === 'between' && output3 > 0 && output4 < 0 ) {
        alert("Correct! You got off the Bus!");
    }
    if (input3 === 'between' && output3 > output4) {
        alert("Correct! You got off the Bus!");
    }

}




//Random Card Generator
function deckBuilder () {
    const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
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
const oneCard = deckBuilder();

function randomCard(oneCard) { 
    const random = Math.floor(Math.random() * 51);  
    const cardValue = oneCard[random].value;
    const cardSuit = oneCard[random].suit;

    const yourC = ({cardValue, cardSuit});
    return yourC;

}
console.log(randomCard(oneCard));





