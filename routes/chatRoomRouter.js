const express = require('express');
const router = express.Router();
const chatRoomContoller = require('../controllers/chatRoomController');
const passport = require('passport');

router.use(passport.authenticate('jwt',{session: false}));

router.get('/list', chatRoomContoller.getRoomsList);
router.post('/', chatRoomContoller.createRoom);
router.delete('/:id', chatRoomContoller.deleteRoom);

module.exports = router;
