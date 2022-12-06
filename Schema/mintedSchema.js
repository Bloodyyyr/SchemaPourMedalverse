const mongoose = require('mongoose');
const  { Schema } = mongoose;

const mintedSchema = new Schema({
    _id: String,
    log_index: Number,
    transaction_hash: String,
    address: String,
    block_hash: String,
    block_number: Number,
    block_timestamp: Date,
    confirmed: Boolean,
    medalId: String,
    royalty : String,
    royaltyDecimal: Number,
    to: String,
    tokenId: String,
    tokenId_decimal: Number,
    transaction_index: Number
})

const Minted = mongoose.model("Minted", mintedSchema, "Minted");

module.exports = { Minted : Minted };
