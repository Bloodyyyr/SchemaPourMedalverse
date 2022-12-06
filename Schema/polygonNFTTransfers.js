const mongoose = require('mongoose')
const { Schema } = mongoose;

const polygonTransfersSchema = new Schema({
    _id: String,
    from_address: String,
    log_index: String,
    to_address: String,
    token_address: String,
    token_id: String,
    transaction_hash: String,
    _created_at: Date,
    _updated_at: Date,
    amount: String,
    block_hash: String,
    block_number: Number,
    block_timestamp: Date,
    contract_type: String,
    transaction_index: Number,
    transaction_type: String,
    confirmed: Boolean
})

const PolygonNFTTransfers = mongoose.model("PolygonNFTTransfers", polygonTransfersSchema, "PolygonNFTTransfers")

module.exports = { PolygonNFTTransfers : PolygonNFTTransfers };
