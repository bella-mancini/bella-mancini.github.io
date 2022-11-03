
const qouteButton = document.querySelector('.new-quote');
qouteButton.addEventListener('click',getQuote);

const endpoint = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';

async function getQuote() {
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response['drinks'][0]['strDrink']);
    console.log(json_response['drinks'][0]['strInstructions']);



    displayQuote(json_response['drinks'][0]['strDrink']);
    displayING(json_response['drinks'][0]['strInstructions']);

   
}

function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
}
function displayING(x) {
    document.getElementById('js-ing-text').textContent = x;
}


getQuote();