const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const meController = require('../app/controller/MeController');
const authorMiddleware = require('../app/middleware/authorization')


router.get('/stored/server', authorMiddleware.requireAuthorization, meController.storedServer);

router.get('/trash/server', authorMiddleware.requireAuthorization, meController.trashServer);


module.exports = router;