let searchBtn = document.querySelector("#search-btn");
let countryInp = document.querySelector("#country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL).then((Response) => Response.json())
        .then((data) => {
            let capital = data[0].capital[0];
            let countryFlag = data[0].flags.svg;
            let countryName = data[0].name.common;
            let continents = data[0].continents[0];
            let currencies = Object.keys(data[0].currencies)[0];
            let population = data[0].population;
            let currenciesSympol = data[0].currencies[Object.keys(data[0].currencies)].name
            let language = Object.values(data[0].languages).toString().split(",").join(", ")
            let area = data[0].area


            result.innerHTML = `
        <img src="${countryFlag}" class="flag-img">
        <h2 class="country-name">${countryName}</h2>
        <div class="wrapper">

            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${capital}</span>
            </div>

            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${continents}</span>
            </div>
        
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${population}</span>
            </div>

            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${currencies} - ${currenciesSympol}}</span>
            </div>

            <div class="data-wrapper">
                <h4>Languages: </h4>
                <span>${language}</span>
            </div>

            <div class="data-wrapper">
                <h4>Area: </h4>
                <span>${area}km2</span>
            </div>
        </div>
        </div>
        `
        })
})