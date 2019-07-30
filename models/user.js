/*File Name; user.js
  Author; Sheethal Sebastian, Amal Baiju, Manu Cheriyan
  Website Name; survey site
  Description; Site structure
  */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  username: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;