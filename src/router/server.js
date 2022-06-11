const express = require('express');
const router = express.Router();

const serverController = require('../app/controller/ServerController');


//router.get('/store/server', serverController.storedCourse);
//router.get('/create', serverController.create);
router.post('/store', serverController.store);
router.get('/create', serverController.create);
router.get('/:id/edit', serverController.edit);
router.put('/:id', serverController.update);
router.patch('/:id/restore', serverController.restore);
router.delete('/:id', serverController.destroy);
router.delete('/:id/deleteindatabase', serverController.deleteindatabase);
router.get('/:name', serverController.show);
router.get('/', serverController.home);


module.exports = router;
