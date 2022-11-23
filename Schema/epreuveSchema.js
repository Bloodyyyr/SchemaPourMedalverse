const mongoose = require('mongoose')
const { Schema } = mongoose; 

const epreuveSchema = new Schema({
    nomEpreuve: String,
    description: String,
    url: String,
    organisateurId: String
})

const Epreuve = mongoose.model("Epreuve", epreuveSchema, "Epreuve")

module.exports = Epreuve;