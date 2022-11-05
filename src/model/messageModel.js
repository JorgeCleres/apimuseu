const mongoose = require('mongoose')

const newSchema = mongoose.Schema

const messageSchema = newSchema({
    message: {type: String, maxLenght: 380}
}, {
    timestamps: true,
})

const Message = mongoose.model('Cliente', messageSchema)

module.exports = Message