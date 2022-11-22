"use strict";

const boom = require("fastify-boom");
const Staff = require("../models/staff.model");

const GetCooks = async (req, reply) => {
    try {
        const cooks = await Staff.findOne({ role: 'Cooks' }).exec();
        reply.code(200).send(cooks);
    } catch (err) {
        throw boom.boomify(err);
    }
};

const GetWaiters = async (req, reply) => {
    try {
        const waiters = await Staff.findOne({ role: 'Waiters' }).exec();
        reply.code(200).send(waiters);
    } catch (err) {
        throw boom.boomify(err);
    }
};


module.exports = {
    GetCooks,
    GetWaiters
}