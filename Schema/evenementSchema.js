const mongoose = require('mongoose');
const { Schema } = mongoose;

const evenementSchema = new Schema({
    _id: String,
    dateDebutEvenement: Date,
    dateFinEvenement: Date,
    labelEvenement: String,
    _created_at: Date,
    _updated_at: Date
})

const Evenement = mongoose.model("Evenement", evenementSchema, "Evenement")

module.exports = { Evenement : Evenement };

