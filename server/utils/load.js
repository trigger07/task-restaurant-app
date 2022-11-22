"use strict";

//set model
const Staff = require("../models/staff.model");

// loop array with roles and populate initial data
const populateData = async () => {
    try {
        let ep = ["Waiters", "Cooks"];

        //clean previous data in collection
        await Staff.collection.drop();

        ep.forEach(async (role) => {
            const jsonData = require("../data/" + role + ".json");
            const staff = new Staff({
                role: role,
                data: jsonData
            });
            await staff.save();
            console.log(role);
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = populateData;