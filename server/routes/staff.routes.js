'use strict';

const controller = require("../controllers/staff.controller");

const routes = [
    {
        url: '/GetCooks',
        method: 'GET',
        handler: controller.GetCooks,
    },
    {
        url: '/GetWaiters',
        method: 'GET',
        handler: controller.GetWaiters,
    }
]

module.exports = routes;