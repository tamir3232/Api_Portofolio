var express = require('express');
var router = express.Router();
var {login} = require('../controller/AuthController');
/* GET users listing. */
router.post('/login', login);

module.exports = router;
