
const res = require('express/lib/response');
const { model } = require('mongoose');
//const newRouter = require('./new');
const siteRouter = require('./site');
const serverRouter = require('./server');
const meRouter = require('./me');


function route(app) {
    //app.use('/new', newRouter);
    app.use('/server', serverRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;