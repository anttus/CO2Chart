'use strict';

const ctx = document.getElementById('chartContainer').getContext('2d');
const urlStart = 'http://localhost:8082/';

function getEmissionsKilotons(countryCode) {
    let url = urlStart + 'api/emissions_kilotons?countryCode=' + countryCode;
    $.ajax({
        url: url,
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader('Access-Control-Allow-Origin', urlStart);
        },
        success: function (result) {
            showResults(result, 'Emissions (Kilotons)')
        }
    });
}

function getEmissionsPerCapita(countryCode) {
    let url = urlStart + 'api/emissions_mt_percapita?countryCode=' + countryCode;
    $.ajax({
        url: url,
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader('Access-Control-Allow-Origin', urlStart);
        },
        success: function (result) {
            showResults(result, 'Emissions (Megatons per capita)')
        }
    });
}


