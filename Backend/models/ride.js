const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Ride = new Schema(
    {
        id_number: {type: String, required: true},
        name: {type: String, required: true},
        description: {type: String, required: true},
        url: {type: String, required: true},
        min_height: {type: Boolean, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('ride', Ride)