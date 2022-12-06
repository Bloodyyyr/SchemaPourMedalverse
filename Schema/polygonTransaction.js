const mongoose = require('mongoose')
const { Schema } = mongoose;

const polygonTransactionsSchema = new Schema({
    _id: String,
    fromAddress: String,
    hash: String,
    to_address: String,
    _created_at: Date,
    _updated_at: Date,
    block_hash: String,
    block_number: Number,
    block_timestamp: Date,
    confirmed: Boolean,
    decimal: Number,
    gas: Number,
    gas_price: Number,
    input: String,
    nonce: Number,
    receipt_cumulative_gas_used: Number,
    receipt_gas_used: Number,
    receipt_status: Number,
    transaction_index: Number,
    value: String
})

const PolygonTransactions = mongoose.model("PolygonTransactions", polygonTransactionsSchema, "PolygonTransactions");

module.exports = { PolygonTransactions : PolygonTransactions };
