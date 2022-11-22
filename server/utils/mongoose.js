'use strict';

const mongoose = require('mongoose');

//init database connection
mongoose
  .connect("mongodb+srv://trigger07:fdsaedfadfasdf@cluster0.nems2mg.mongodb.net/restaurantdb")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err))