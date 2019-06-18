const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    login: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
}, {versionKey: false});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
