const mongoose = require('mongoose');
 const contactSchema = new mongoose.Schema({
    name: {
        type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
    },
    email: {
        type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    message: {
        type: String,
        required: true
    }
},{timestamps: true});
module.exports = mongoose.model('Contact', contactSchema);

