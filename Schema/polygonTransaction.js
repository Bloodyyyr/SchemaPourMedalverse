const mongoose = require('mongoose')
const { Schema } = mongoose;

const polygonTransactionsSchema = new Schema({
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

const PolygonTransactions = mongoose.model("PolygonTransactions", polygonTransactionsSchema);

module.exports = { PolygonTransactions : PolygonTransactions };
