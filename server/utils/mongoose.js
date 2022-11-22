'use strict';

const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost/restaurantdb")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err))