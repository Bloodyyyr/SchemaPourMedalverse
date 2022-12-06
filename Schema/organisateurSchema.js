const mongoose = require('mongoose');
const { Schema } = mongoose;

const organisateurSchema = new Schema({
    _id: String,
    nom: String
})

const Organisateur = mongoose.model("Organisateur", organisateurSchema, "Organisateur")

module.exports = { Organisateur : Organisateur };