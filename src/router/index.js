
const res = require('express/lib/response');
const { model } = require('mongoose');
//const newRouter = require('./new');
const siteRouter = require('./site');
const serverRouter = require('./server');
const meRouter = require('./me');
const authMiddleware = require('../app/middleware/auth')


function route(app) {
    //app.use('/new', newRouter);zzz
    app.use('/server',authMiddleware.requireAuth, serverRouter);
    app.use('/me',authMiddleware.requireAuth, meRouter);
    app.use('/', siteRouter);
}

module.exports = route;