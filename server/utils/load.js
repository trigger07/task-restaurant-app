"use strict";

//set model
const Staff = require("../models/staff.model");

//clean previous data in collection
Staff.collection.drop();

// loop array with roles and populate initial data
const populateData = async () => {
    try{
        let ep = new Array("Cooks", "Waiters");

        ep.forEach(async (role) => {
            const jsonData = require("../data/" + role + ".json");
            const staff = new Staff({
                role: role,
                data: jsonData
            });
            await staff.save();
        });
    }catch (err){
        console.log(err);
    }
}

module.exports = populateData;