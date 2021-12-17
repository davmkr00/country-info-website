import { getAllCountries } from "./helpers/getCountries.js";
import { createRow } from "./helpers/createRow.js";


function drawResult(filter=null){
    for (let country of countriesInfo){
        let countryName = country['name']['common']
        let companyNameLower = countryName.toLowerCase()
        if (filter && !companyNameLower.startsWith(filter.toLowerCase())) continue
        let countryCode = country['cca2']
        let countryCurrency = country['currencies']
        if (countryCurrency){
            countryCurrency = Object.keys(countryCurrency)[0]
        }else{
            countryCurrency = ''
        }
        let capital = country['capital']
        createRow(countryName, countryCode, countryCurrency, capital)
    }
}


function displayNewResult(){
    document.querySelector('tbody').innerHTML = ''
    drawResult(searchInput.value)
    createLinks()   
}


function newPage(element){
    document.location = 'country.html'
    localStorage.setItem('country', element);
}



function createLinks(){
    let elements = document.querySelectorAll('tbody tr td:first-child')
    Array.from(elements).forEach(function(element) {
        element.addEventListener('click', newPage.bind(null, element.innerText));
    });
}

let countriesInfo = await getAllCountries()
drawResult()
let searchInput = document.getElementById('search')
searchInput.addEventListener("keyup", displayNewResult);
createLinks()


