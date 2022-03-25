const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Staff = new Schema(
    {
        id_number: {type: String, required: true},
        title: {type: String, required: true},
        name: {type: String, required: true},
        image: {type: String, required: true}
    }, 

    {timestamps: true}
)

module.exports = mongoose.model('staffs', Staff)