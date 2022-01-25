const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String},
    content: { type: String, required: true},
    author: { type: String, required: true},
    date: String
})

module.exports = mongoose.model('Post', PostSchema)