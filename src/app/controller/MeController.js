const Server = require('../model/Server')
const { mutipleMongooseToObject } = require('../../ultill/mongooes');
const { render } = require('express/lib/response');


class MeController {

    // [get] /me/stored/server
    storedServer(req, res, next) {
        Server.find({})
            .then(server => res.render('me/stored-server', {
                server: mutipleMongooseToObject(server)
            }))
            .catch(next)
    }

    //[get] /me/trash/server
    trashServer(req, res, next) {
        Server.findDeleted({})
            .then(server => res.render('me/trash-server', {
                server: mutipleMongooseToObject(server)
            }))
            .catch(next)
    }
}


module.exports = new MeController();