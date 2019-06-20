const mongoose = require('mongoose');

const {Schema} = mongoose;

const userChatRoomSchema = new Schema({
    userId: {type: String, require: true, unique: true},
    chatRoomId: {type: String, require: true, unique: true},
}, {versionKey: false});

const userChatRoomModel = mongoose.model('chatRoom', userChatRoomSchema);

module.exports = userChatRoomModel;
