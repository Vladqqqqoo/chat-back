const express = require('express');
const router = express.Router();
const authController = require('../controllers/chatRoomController');

router.get('/list', authController.getRoomsList);
router.post('/', authController.createRoom);

module.exports = router;
