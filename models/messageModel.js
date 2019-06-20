const mongoose = require('mongoose');

const {Schema} = mongoose;

const messageSchema = new Schema({
    userId: {type: String, require: true, unique: true},
    chatRoomId: {type: String, require: true, unique: true},
}, {versionKey: false});

const messageModel = mongoose.model('message', messageSchema);

module.exports = messageModel;
