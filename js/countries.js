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
        console.log(country.capital)
        countryDiv.innerHTML = `
           <h4>Country Name: ${country.name.common} </h4>
           <h6>Capital Name: ${country.capital ? country.capital[0] : 'No Capital'} </h4>
        `;
        countryContainer.appendChild(countryDiv);
    });
}

countryLoad();