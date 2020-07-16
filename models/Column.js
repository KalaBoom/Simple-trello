const {Schema, model, Types} = require('mongoose')
const Card = require('./Card')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    cards: [
        {
            type: Types.ObjectId,
            ref: 'Card',
            default: []
        }
    ]
})

module.exports = model('Column', schema)