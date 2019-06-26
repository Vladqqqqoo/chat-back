const ChatRoomModel = require('../models/chatRoomModel');

class ChatRoomService {
    createRoom(req, res, next) {
        ChatRoomModel.create(req.body)
            .then((newRoom) => {
                res.send(newRoom);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }

    getRoomsList(req, res, next) {
        ChatRoomModel.find({})
            .then((rooms) => {
                res.send(rooms);
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    }

    deleteRoom(req, res, next) {
        ChatRoomModel.findOneAndDelete({_id: req.params.id})
            .then((info) => {
                res.send(info);
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    }

}

let chatRoomService = new ChatRoomService();
module.exports = chatRoomService;
