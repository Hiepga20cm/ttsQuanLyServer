const express = require('express');
const router = express.Router();
const authMiddleware = require('../app/middleware/auth')
const siteController = require('../app/controller/SiteController');

router.get('/logout',authMiddleware.requireAuth,siteController.logout);
router.get('/',authMiddleware.requireAuth, siteController.home);
router.get('/search',authMiddleware.requireAuth, siteController.search);
router.post('/login', siteController.login);
router.get('/login1', siteController.login1);



module.exports = router;