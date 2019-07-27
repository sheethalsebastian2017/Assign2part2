const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: { type: String, required: true},
    content: String,
    date: Date,
    authors: [String],
    hero: String,
});

const Survey = mongooose.model('Survey',surveySchema);

module.exports = Survey;