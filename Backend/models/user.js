const { Schema } = require('mongoose')

const User = new Schema (
    {
        id_number: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        age: {type: String, required: true}, 
    },

    {timestamps: true}
)

module.exports = User 