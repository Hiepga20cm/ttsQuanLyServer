const Server = require('../model/Server');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const { mutipleMongooseToObject } = require('../../ultill/mongooes');
const { update } = require('../model/Server');
const res = require('express/lib/response');
const req = require('express/lib/request');
const { status, cookie } = require('express/lib/response');
const { query } = require('express');

class SiteController {

    //[get] home
    home(req, res, next) {
        Server.find({})
            .then(server => {
                res.render('home', { server: mutipleMongooseToObject(server) });
            })
            .catch(next);
    }
    //[get]/search
    search(req, res, next) {
        const { name } = req.query
        Server.find({ name: name })//name đầu là name trong model
            .then(server => res.render('search', {
                server: mutipleMongooseToObject(server)
            }))
            .catch(next)

    }

    //[get]/login1
    login1(req, res, next) {
        res.render('login')
    }

    //[post]/login
    login(req, res) {
        User.findOne({
            userName: req.body.userName,
            passWord: req.body.passWord
        }, (err, user) => {
            if (err) {
                res.status(404).json(err)

            } else {
                const token = jwt.sign(
                    {
                        _id: user._id,
                        permissions: user.permissions,
                    },
                    "12345678",
                    {
                        expiresIn: 10000,
                    }
                );
                // res.status(200).json({
                //     message: "Successfuly",
                //     token: token,
                //     username: user.username,
                // });
                res.cookie('token', token);
                //console.log(req.cookies)
                res.redirect('/');
            }
        })
    }

    //[get]/logout
    logout(req,res,next){
        res.clearCookie('token');
        console.log("Cookie cleared");
        res.redirect('/login1')
    }
}

module.exports = new SiteController();