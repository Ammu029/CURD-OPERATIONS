const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports =  mongoose.model('emp', empSchema) 