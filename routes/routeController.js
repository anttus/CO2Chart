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
    let results = [];
    result[1].forEach(e => {
        if (e['value'] != null) {
            if (e['date'] >= slider.noUiSlider.get()[0].slice(0, 4) && e['date'] <= slider.noUiSlider.get()[1].slice(0, 4)) results.push(e);
        }
    });
    chart = createGraph(ctx, results, label);
}

function destroyChart() {
    if (chart != null) chart.destroy();
}
