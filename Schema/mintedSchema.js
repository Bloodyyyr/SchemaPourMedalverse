const mongoose = require('mongoose');
const  { Schema } = mongoose;

const mintedSchema = new Schema({
    logIndex: Number,
    transactionHash: String,
    address: String,
    blockHash: String,
    blockNumber: Number,
    blockTimestamp: Date,
    confirmed: Boolean,
    medalId: String,
    royalty : String,
    royaltyDecimal: Number,
    to: String,
    tokenId: String,
    tokenIdDecimal: Number,
    transactionIndex: Number
})

const Minted = mongoose.model("Minted", mintedSchema, "Minted");

module.exports = Minted;
