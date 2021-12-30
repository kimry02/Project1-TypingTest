
var wordCount;
var globalQuote;


const quoteElement = document.getElementById('quote');

const inputElement = document.getElementById('input');

const timerElement = document.getElementById('timer');

function wordCounter(thisQuote){
    const arr = thisQuote.split(' ')

    return arr.filter(word => word !== '').length;
}

inputElement.addEventListener('input', () => {
    const arrayQuote = quoteElement.querySelectorAll('span')
    const arrayValue = inputElement.value.split('')
    let correct = true;
    arrayQuote.forEach((characterS, index) => {
        const character = arrayValue[index]
        if(character == null) {
            characterS.classList.remove('correct')
            characterS.classList.remove('incorrect')
            correct = false;
        }
        else if (character === characterS.innerText) {
            characterS.classList.add('correct');
            characterS.classList.remove('incorrect')
        }
        else{
            characterS.classList.remove('correct')
            characterS.classList.add('incorrect')
            correct = false;
        }
    })
    if(correct) getNext()

})


function getQuote() {
    return fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => data.content)
}

async function getNext() {
    const quote = await getQuote()
    globalQuote = quote;
    quoteElement.innerText = ''
    quote.split('').forEach(character => {
        const characterS = document.createElement('span')
        characterS.innerText = character
        quoteElement.appendChild(characterS)
    })
    
    inputElement.value = null
    timer()
}

let startT

function timer(){
    timerElement.innerText = 0
    startT = new Date()
    setInterval(() => {
        timerElement.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startT) / 1000)
}

getNext();

