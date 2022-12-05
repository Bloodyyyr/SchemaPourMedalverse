const mongoose = require('mongoose');
const { Schema } = mongoose;

const mvMintedSchema = new Schema({
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

const MVMinted = mongoose.model("MVMinted", mvMintedSchema, "MVMinted");

module.exports = { MVMinted : MVMinted };