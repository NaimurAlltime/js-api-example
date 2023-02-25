const countryLoad = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countryDisplay(data))
}

const countryDisplay = countries => {
    const countryContainer = document.getElementById('countries-container');
    // console.log(countries)
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        console.log(country.cca2)
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
           <h4>Country Name: ${country.name.common} </h4>
           <h6>Capital Name: ${country.capital ? country.capital[0] : 'No Capital'} </h4>
           <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    });
}

const loadCountryDetails = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countriesDetailDisplay(data[0]))

    // console.log(url)
}

const countriesDetailDisplay = country => {
    // console.log(country)
    const countryDetails = document.getElementById('countries-details');
    countryDetails.innerHTML = `
      <h4>name: ${country.name.common} </h4>
      <img src = "${country.flags.png}">
    `
}

countryLoad();