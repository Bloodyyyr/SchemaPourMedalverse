const mongoose = require('mongoose')
const { Schema } = mongoose; 

const categorieSchema = new Schema({
    nbrParticipants: Number
});

const Categorie = mongoose.model("Categorie", categorieSchema, "Categorie");

module.exports = { Categorie : Categorie };