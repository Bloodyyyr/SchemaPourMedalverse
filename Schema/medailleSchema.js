const mongoose = require('mongoose')
const { Schema } = mongoose;

const medailleSchema = new Schema({
    _id: String,
    _created_at: Date,
    _updated_at: Date,
    dateResultat: Date,
    _p_sportifId: String,
    _p_evenementId: String,
    _p_sportId: String,
    _p_sexeId: String,
    _p_epreuveId: String,
    _p_categorieId: String,
    _p_typeId: String,
    nom: String,
    minted: Number,
    uriMetadata: String,
    _p_uriImage: String,
    tokenId: Number,
    passPhrase: String,
    to: String,
    decsription: String,
    hasVideo: Boolean,
    classement: Number,
    classementCatergorie: Number,
    _p_uriVideo: String
})

const Medaille = mongoose.model("Medaille", medailleSchema, "Medaille")

module.exports = { Medaille : Medaille };

