const QUOTE_API_URL = 'http://api.quotable.io/random'

const quoteElement = document.getElementById('quote');

const inputElement = document.getElementById('input');

inputElement.addEventListener('input', () => {
    
})


function getQuote() {
    return fetch(QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function getNext() {
    /*const quote = await getQuote();
    quoteElement.innerText = quote;*/
    quoteElement.split('').forEach(character => {
        const characterS = document.createElement('span')
        characterS.innerText = character
        quoteElement.appendChild(characterS)
    })
    inputElement.value = null;
}

getNext();

