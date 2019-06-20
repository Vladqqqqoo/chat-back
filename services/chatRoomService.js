const ChatRoomModel = require('../models/chatRoomModel');

class AuthService {
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
            .then((rooms)=>{
                res.send(rooms);
            })
            .catch((error)=> {
                res.send(500).send(error);
            })
    }

}

let authService = new AuthService();
module.exports = authService;
