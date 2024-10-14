// Imported express library.
const express = require('express');
// added check is a function provided by the express-validator library to valid user's input.
const { check } = require('express-validator');
// This syntax is used to directly extract the signup and login functions from userController.js.
const { signup, login } = require('../controllers/userController');
const router = express.Router();

// router for user signup.
// added express-validator to get all required information based on userSchema.
router.post('/signup', [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
], signup);

// router for user login.
// added express-validator to validate user's credentials.
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').not().isEmpty()
], login);

module.exports = router;