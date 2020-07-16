const {Schema, model, Types} = require('mongoose')
const Column = require('./Column')

const schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    columns: [
        {
            type: Types.ObjectId,
            ref: 'Column',
            default: []
        },
    ],
    href: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Board', schema)