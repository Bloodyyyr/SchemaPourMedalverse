const mongoose = require('mongoose')
const { Schema } = mongoose;

const medailleSchema = new Schema({
    dateResultat: Date,
    sportifId: String,
    evenementId: String,
    sportId: String,
    sexeId: String,
    epreuveId: String,
    categorieId: String,
    typeId: String,
    nom: String,
    minted: Number,
    uriMetadata: String,
    uriImage: String,
    tokenId: Number,
    passPhrase: String,
    to: String,
    decsription: String,
    hasVideo: Boolean,
    classement: Number,
    classementCatergorie: Number,
    uriVideo: String
})

const Medaille = mongoose.model("Medaille", medailleSchema, "Medaille")

module.exports = { Medaille : Medaille };

