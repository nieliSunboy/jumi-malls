var DB = require("../utils/mysql");
var { authentication } = require('../utils/token')

exports.test = (req, res) => {
    console.log('test-req');
    DB.query('SELECT * FROM sys_user', (result) => {
        res.send({ code: 1, msg: '验证成功！', data: result || [] });
    })
    
}

exports.getTestInfo = (req, res) => {

    DB.query('SELECT * FROM sys_sty WHERE user_id=' + "'" + req.auth.user.userId + "'", (result) => {
        res.send({ code: 0, msg: '登陆验证！', data: result })
    })
}