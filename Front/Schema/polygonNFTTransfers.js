const mongoose = require('mongoose')
const { Schema } = mongoose;

const polygonTransfersSchema = new Schema({
    fromAddress: String,
    hash: String,
    toAddress: String,
    blockHash: String,
    blockNumber: Number,
    blockTimestamp: Date,
    confirmed: Boolean,
    decimal: Number,
    gas: Number,
    gasPrice: Number,
    input: String,
    nonce: Number,
    receiptCumulativeGas: Number,
    receiptGasUsed: Number,
    receiptStatus: Number,
    transactionIndex: Number,
    value: String
})

const PolygonNFTTransfers = mongoose.model("PolygonNFTTransfers", polygonTransfersSchema, "PolygonNFTTransfers")

module.exports = { PolygonNFTTransfers : PolygonNFTTransfers };
