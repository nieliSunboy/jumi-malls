
var express = require('express');
var router = express.Router();

var testRouter = require('../control/test')
var userLogin = require('../control/userLogin')
var userRouter = require('../control/user')


router.get('/test', testRouter.test);
router.get('/test/info', testRouter.getTestInfo);

router.use('/login', userLogin.login);
router.use('/user/list', userRouter.getList);

module.exports = router