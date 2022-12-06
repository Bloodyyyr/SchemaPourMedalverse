const mongoose = require('mongoose')
const { Schema } = mongoose;

const sexeSchema = new Schema({
    _id: String,
    nom: String
})

const Sexe = mongoose.model("Sexe", sexeSchema, "Sexe")

module.exports = { Sexe : Sexe };