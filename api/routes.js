'use strict';

module.exports = function (app) {
    const controller = require('./restController');

    app.route('/').get(controller.load_index);

    app.route('/api/emissions_kilotons').get(controller.get_emissions_kilotons);

    app.route('/api/emissions_mt_percapita').get(controller.get_emissions_mt_percapita);

};
