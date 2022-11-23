const mongoose = require('mongoose')
const { Schema } = mongoose;

const typeSchema = new Schema({
    nom: String,
    nbrJoueur: Number
})

const Type = mongoose.model("Type", typeSchema, "Type")

module.exports = Type;