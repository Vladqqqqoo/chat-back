const mongoose = require('mongoose');

const {Schema} = mongoose;

const chatRoomSchema = new Schema({
    name: {type: String, require: true, unique: true},
}, {versionKey: false});

const chatRoomModel = mongoose.model('chatRoom', chatRoomSchema);

module.exports = chatRoomModel;
