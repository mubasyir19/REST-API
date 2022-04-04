const mongoose = require('mongoose')

const Product = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    } 
})

module.exports = mongoose.model('Product', Product);