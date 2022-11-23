require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const PORT = process.env.PORT || 5000;
const BDD = process.env.BDD 


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

mongoose.connect(BDD);
app.listen(PORT, function () {
  console.log(`Le serveur express est en route sur le port: ${PORT}`);
});

