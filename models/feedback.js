const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
