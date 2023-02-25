const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => quoteDisplay(data))
}

const quoteDisplay = quote => {
    const quoteContainer = document.getElementById('quote-container');
    // console.log(quote);
    quoteContainer.innerText = quote.quote;
}


loadQuote();