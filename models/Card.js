const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    complite: {
        type: Boolean,
        default: false
    }
})

module.exports = model('Card', schema)