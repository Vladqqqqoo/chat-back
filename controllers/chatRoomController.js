const authService = require('../services/authService');

class ChatRoomController {

    createRoom(req, res, next) {
        authService.logIn(req, res, next);
    }

}

let chatRoomController = new ChatRoomController();
module.exports = chatRoomController;
