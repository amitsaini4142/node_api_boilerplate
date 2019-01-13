const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authPolicy = require('../policies/authentication');

router.post('/registerUser', userController.registerUser);
router.get('/fetchUser',authPolicy, userController.fetchUser);

module.exports = router;
