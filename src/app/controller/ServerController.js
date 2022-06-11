const Server = require('../model/Server')
const { mongooseToObject } = require('../../ultill/mongooes');
const { mutipleMongooseToObject } = require('../../ultill/mongooes');
const { update } = require('../model/Server');
const res = require('express/lib/response');
const req = require('express/lib/request');
const { redirect } = require('express/lib/response');


class ServerController {

    // render : dẫn đến một view
    // redirect : dẫn đến một route

    //[get]/show
    show(req, res, next) {
        Server.findOne({ name: req.params.name }).lean()//findOne(key:Nội dung trong key)
            .then((server) => {
                console.log(server);
                //return res.send('done');
                return res.render('server/show', { server })
            })
            .catch(next);
    }

    //[get] /
    home(req, res, next) {

        // Course.find({}, function (err, course) {
        //     if (!err) {
        //         res.json(course);
        //     } else {
        //         next(err);// next dùng để đẩy lỗi ra một midle để xử lý lỗi ở một chỗ 
        //     }
        // });
        //res.render('home');

        Server.find({})
            .then(server => {
                res.render('home', { server: mutipleMongooseToObject(server) });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('server/create');
    }

    // [post] /server/store
    store(req, res, next) {
        // res.json(req.body);// body là dữ liệu nhận từ form gửi từ clien lên server
        const formData = req.body;
        console.log(req.body);
        formData.image = `https://freepngimg.com/thumb/server/36301-1-server-hd.png`;
        const server = new Server(formData);// tạo ra một đối tượng kiểu Couse và đưa  dữ liệu muốn ghi vào
        server.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    //[get]/server/:id/edit
    edit(req, res, next) {
        Server.findById(req.params.id)//tìm kiếm trong database là dùng params
            .then(server => res.render('server/edit',
                { server: mongooseToObject(server) }))
            .catch(next);
    }

    // [put]/server/:id
    update(req, res, next) {
        Server.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/server'))
            .catch(next);
    }

    //[delete]/server/:id
    destroy(req, res, next) {
        Server.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))// quay trowr laji trang trước đó
            .catch(next);
    }

    //[patch]/server/:id/restore

    restore(req, res, next) {
        Server.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [delete]/server/:id/deleteindatabase
    deleteindatabase() {
        Server.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }



}
module.exports = new ServerController();
