const mongoose = require('mongoose')
const { Schema } = mongoose;

const sexeSchema = new Schema({
    nom: String
})

const Sexe = mongoose.model("Sexe", sexeSchema, "Sexe")

module.exports = Sexe;