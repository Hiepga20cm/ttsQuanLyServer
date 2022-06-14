const jwt = require('jsonwebtoken');
const User = require('../model/User');

const { default: jwtDecode } = require('jwt-decode');

module.exports.requireAuthorization = function (req, res, next) {

    var token = jwt.verify(req.cookies.token, '12345678');
    //console.log(token);

   // var user = User.findById(token._id)
    //console.log(user)

    if (!token.permissions === 'admin') {
        res.redirect('back');
        return;
    }
    else{
        next();
    }
};