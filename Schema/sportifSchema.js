const mongoose = require('mongoose')
const { Schema } = mongoose;

const sportifSchema = new Schema({
    _id: String,
    nom: String,
    prenom: String
})

const Sportif = mongoose.model("Sportif", sportifSchema, "Sportif")

module.exports = { Sportif : Sportif };