function getEmissionsPerCapita(countryCode) {
    let url = "http://api.worldbank.org/v2/countries/" + countryCode + "/indicators/EN.ATM.CO2E.PC?format=json";
    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            let country = result[1][0]["country"]["value"];
            let emissionsPerCapita = [];
            let years = [];
            result[1].forEach(e => {
                emissionsPerCapita.push(e["value"]);
                years.push(e["date"]);
            });
        }
    });
}

function getEmissionsKilotons(countryCode) {
    let url = "http://api.worldbank.org/v2/countries/" + countryCode + "/indicators/EN.ATM.CO2E.KT?format=json";
    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            let country = result[1][0]["country"]["value"];
            console.log("Country: " + country);
            result[1].forEach(e => {
                let emissionsPerCapita = e["value"];
                let year = e["date"];
                console.log("Emissions (Kilotons): " + emissionsPerCapita + " Year: " + year);
            });
        }
    });
}
