const chatRoomService = require('../services/chatRoomService');

class ChatRoomController {
    createRoom(req, res, next) {
        chatRoomService.createRoom(req, res, next);
    }

    getRoomsList(req, res, next) {
        chatRoomService.getRoomsList(req, res, next);
    }

    deleteRoom(req, res, next) {
        chatRoomService.deleteRoom(req, res, next);
    }

}

let chatRoomController = new ChatRoomController();
module.exports = chatRoomController;
