'use strict'

//instantiate database
const db = require("../utils/mongoose");
const populateData = require('../utils/load')

// exec data population test
const test = async () => {
    db;
    try{
        const app = await populateData();
        console.log('status: ', "success");
    }catch(err){
        console.log('status: ', "error");
    }
    
}
test();