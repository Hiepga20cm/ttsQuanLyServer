const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');

router.post('/search1', siteController.search1);
router.get('/search', siteController.search);
router.post('/login', siteController.login);
router.get('/login1', siteController.login1);
router.get('/', siteController.home);

module.exports = router;