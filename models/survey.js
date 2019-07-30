const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  title: String,
  datePosted: Date,
  content: String,
  authors: [String],
  hero: String
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;