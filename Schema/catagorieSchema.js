const mongoose = require('mongoose')
const { Schema } = mongoose; 

const categorieSchema = new Schema({
    _id: String,
    nbrParticipants: Number,
    _created_at: Date,
    _updated_at: Date
});

const Categorie = mongoose.model("Categorie", categorieSchema, "Categorie");

module.exports = { Categorie : Categorie };