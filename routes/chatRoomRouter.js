const express = require('express');
const router = express.Router();
const authController = require('../controllers/chatRoomController');
const passport = require('passport');

router.use(passport.authenticate('jwt',{session: false}));
router.get('/list', authController.getRoomsList);
router.post('/', authController.createRoom);

module.exports = router;
