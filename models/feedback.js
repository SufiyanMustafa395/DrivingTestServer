const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    service: { type: String, required: true } // Add service field
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
