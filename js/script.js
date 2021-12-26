


const quoteElement = document.getElementById('quote');

const inputElement = document.getElementById('input');

const timerElement = document.getElementById('timer');

inputElement.addEventListener('input', () => {
    const arrayQuote = quoteElement.querySelectorAll('span')
    const arrayValue = inputElement.value.split('')
    let correct = true;
    arrayQuote.forEach((charSpan, index) => {
        const character = arrayValue[index]
        if(character == null) {
            charSpan.classList.remove('correct')
            charSpan.classList.remove('incorrect')
            correct = false;
        }
        else if (character === characterSpan.innerText) {
            charSpan.classList.add('correct');
            charSpan.classList.remove('incorrect')
        }
        else{
            charSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
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
    quoteElement.innerText = quote
    quoteElement.split('').forEach(character => {
        const characterS = document.createElement('span')
        characterS.innerText = character
        quoteElement.appendChild(characterS)
    })
    inputElement.value = null;
}

let startT
function timer(){
    timerElement.innerText = 0
    startT = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    Math.floor((new Date() - startTime) / 1000)
}

getNext();

