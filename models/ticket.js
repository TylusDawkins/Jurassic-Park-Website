const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const Ticket = new Schema (
    {
        Type: {type: String, required: true},
        Price: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('tickets', Ticket)