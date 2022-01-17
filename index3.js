





const api = "https://api.covid19api.com/summary";
let country = 'Canada'




document.getElementById('myButton').onclick = function() {
    const country1 = document.getElementById('myText').value.toLowerCase();
    const country = country1.charAt(0).toUpperCase() + country1.slice(1);
    if (country !== undefined) {
        data2(country);
        document.getElementById('result').innerHTML = `Current Covid-19 data for ${country}`;
    } else {
        document.getElementById('result').innerHTML = `Invalid Country`;
    } 
}


async function data2(country){
    const covidData1 = await fetch(`${api}`)
    const covidData2 = await covidData1.json()
    const covidData = covidData2.Countries;
    const index = covidData.findIndex(x => x.Country === `${country}`)
    const finalDatatotalConfirmed = covidData[index].TotalConfirmed
    const finalDatatotalDeaths = covidData[index].TotalDeaths
    const finalDatatotalRecovered = finalDatatotalConfirmed - finalDatatotalDeaths


    document.getElementById('Confirmed').innerHTML = `<td>${finalDatatotalConfirmed}</td>`; 
    document.getElementById('recovered').innerHTML = `<td>${finalDatatotalRecovered}</td>`;
    document.getElementById('deaths').innerHTML = `<td>${finalDatatotalDeaths}</td>`;
    
}


