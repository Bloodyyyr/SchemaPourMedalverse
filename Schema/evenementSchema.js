const mongoose = require('mongoose');
const { Schema } = mongoose;

const evenementSchema = new Schema({
    dateDebutEvenement: Date,
    dateFinEvenement: Date,
    labelEvenement: String
})

const Evenement = mongoose.model("Evenement", evenementSchema, "Evenement")

module.exports = { Evenement : Evenement };

