const mongoose = require('mongoose')
const { Schema } = mongoose; 

const epreuveSchema = new Schema({
    _id: String,
    nomEpreuve: String,
    description: String,
    url: String,
    _p_organisateurId: String,
    _created_at: Date,
    _updated_at: Date
})

const Epreuve = mongoose.model("Epreuve", epreuveSchema, "Epreuve")

module.exports = { Epreuve : Epreuve };