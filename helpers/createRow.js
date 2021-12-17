export function createRow(countryName, countryCode, countryCurrency, capital){
    let tbody = document.querySelector('tbody')
    let newRow = tbody.insertRow(-1);
    let countryNameCell = newRow.insertCell(0);
    let capmitalCell = newRow.insertCell(1)
    let countryCodeCell = newRow.insertCell(2);
    let countryCurrencyCell = newRow.insertCell(3);
    countryNameCell.innerText = countryName
    capmitalCell.innerText = capital
    countryCodeCell.innerText = String(countryCode)
    countryCurrencyCell.innerText = String(countryCurrency)
}
