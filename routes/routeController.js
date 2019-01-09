const ctx = document.getElementById("chartContainer").getContext('2d');
var chart;

function getEmissionsKilotons(countryCode) {
    let url = "http://api.worldbank.org/v2/countries/" + countryCode + "/indicators/EN.ATM.CO2E.KT?format=json";
    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            showResults(result, 'Emissions (kilotons)')
        }
    });
}

function getEmissionsPerCapita(countryCode) {
    let url = "http://api.worldbank.org/v2/countries/" + countryCode + "/indicators/EN.ATM.CO2E.PC?format=json";
    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            showResults(result, 'Emissions (megatons per capita)')
        }
    });
}

function showResults(result, label) {
    destroyChart();
    let emissionsPerCapita = [];
    let years = [];
    result[1].forEach(e => {
        emissionsPerCapita.push(e["value"]);
        years.push(e["date"]);
    });
    chart = createGraph(ctx, emissionsPerCapita.reverse(), years.reverse(), label);
}

function destroyChart() {
    if (chart != null) chart.destroy();
}