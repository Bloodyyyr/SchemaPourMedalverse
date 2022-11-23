const mongoose = require('mongoose')
const { Schema } = mongoose;

const sportSchema = new Schema({
    labelSport: String
})

const Sport = mongoose.model("Sport", sportSchema, "Sport")

module.exports = Sport;