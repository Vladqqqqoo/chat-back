const passport = require('passport');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const validation = require('../modules/validation');

class AuthService {

    static generateTokens(data) {
        const jwtToken = jwt.sign({_id: data._id}, 'access', {expiresIn: "1h"});
        const refreshToken = jwt.sign({_id: data._id}, 'refresh', {expiresIn: "5h"});
        return {jwt: jwtToken, refreshToken: refreshToken, userId: data._id};
    }

    logIn(req, res, next) {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if (err || !user) {
                console.log(`This is user - ${user}`);
                console.log(`This is error - ${err}`);
                return res.status(400).json({
                    message: info ? info.message : 'Login failed',
                    user: user
                });
            }
            res.json(AuthService.generateTokens(user));
        })
        (req, res);
    }

    logOut(req, res, next) {
        jwt.verify(req.body.refreshToken, 'refresh', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data._id);
            }
        });
        res.sendStatus(204);
    }

    signUp(req, res, next) {
        const errorMessage = validation.checkSignIn(req);
        if (!errorMessage.status) {
            res.status(406).send({errorMessage, user: req.body});
        } else {
            UserModel.create(req.body)
                .then(user => {
                    console.log(user);
                    res.json(AuthService.generateTokens(user))
                })
                .catch(error => {
                    res.status(400).send(error)
                });
        }
    }

    refresh(req, res, next) {
        jwt.verify(req.body.refreshToken, 'refresh', function (err, data) {
            if (err) {
                console.log(err);
                res.status(403).send('Refresh token is expired');
            } else {
                console.log(data._id);
                res.json(AuthService.generateTokens(data));
            }
        });
    }
}

let authService = new AuthService();
module.exports = authService;
