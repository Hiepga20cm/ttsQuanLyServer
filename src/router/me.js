const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const meController = require('../app/controller/MeController');


router.get('/stored/server', meController.storedServer);

router.get('/trash/server', meController.trashServer);


module.exports = router;