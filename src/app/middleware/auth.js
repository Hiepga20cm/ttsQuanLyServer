const jwt = require('jsonwebtoken');
const User = require('../model/User');

const { default: jwtDecode } = require('jwt-decode');

module.exports.requireAuth = function (req, res, next) {

    if (!req.cookies.token) {
        res.redirect('/login1');
        return;
    }
    var token = jwt.verify(req.cookies.token, '12345678');
    console.log(token);

    var user = User.findById(token._id)
    //console.log(user)

    if (!user) {
        res.redirect('/login1');
        return;
    }
    else{
        next();
    }
};