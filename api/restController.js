'use strict';
const path = require('path');
const appDir = path.dirname(require.main.filename);
const request = require('request');
let urlStart = "http://api.worldbank.org/v2/countries/";

exports.load_index = function (req, res, err) {
    res.sendFile(appDir + "/public/index.html");
};

exports.get_emissions_kilotons = async function (req, res, err) {
    let countryCode = req.query['countryCode'] || 'null';
    request(urlStart + countryCode + '/indicators/EN.ATM.CO2E.KT?format=json', { json: true }, (err, result, body) => {
        if (err) return console.log(err);
        res.send(body);
    });
};

exports.get_emissions_mt_percapita = async function (req, res, err) {
    let countryCode = req.query['countryCode'] || 'null';
    request(urlStart + countryCode + '/indicators/EN.ATM.CO2E.PC?format=json', { json: true }, (err, result, body) => {
        if (err) return console.log(err);
        res.send(body);
    });
};