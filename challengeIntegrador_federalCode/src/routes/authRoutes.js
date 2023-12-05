const express = require('express');
const router    = express.Router();
const authController = require('../controllers/authController');

router.get('/login',authController.login);
router.post('/login',authController.login_post);
router.get('/register',authController.register_get);
router.post('/register',authController.register_post);
router.get('/logout',authController.logout);

module.exports = router;
