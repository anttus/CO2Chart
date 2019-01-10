let chart;
const ctx = $("#chartContainer")[0].getContext('2d');

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
    let yearFrom = $("#fromYear").val();
    let yearTo = $("#toYear").val();
    console.log(yearFrom);
    console.log(yearTo);
    let results = [];
    result[1].forEach(e => {
        if (e['value'] != null) {
            if (e['date'] >= yearFrom && e['date'] <= yearTo) results.push(e);
            else if (yearFrom == '') results.push(e);
            else if (yearTo == '') results.push(e);
        }
    });
    chart = createGraph(ctx, results, label);
}

function destroyChart() {
    if (chart != null) chart.destroy();
}
