var DB = require('../utils/mysql');
// var tokenJwt = require('jsonwebtoken');  
var jwt = require('../utils/token')
var { getUserList, getInfoDestail } = require('../data/user')

/**
 * 登录接口
 */
const login = (req, res) => {

    const { userName, password } = req.body;

    if (!userName) {
        res.send({ code: 50, msg: '用户名不能为空', data: null });
        return;
    }

    if (!password) {
        res.send({ code: 50, msg: '密码不能为空', data: null });
        return 
    }
    const sql = 'SELECT * FROM sys_user WHERE user_name=' + "'" + userName + "'";
    
    // DB.query(sql, (result) => {
        const result = getInfoDestail({ username: userName });
        console.log('userInof', result)
        const info = result.find(v => v.user_name === userName);

        if (!info) {
            res.send({ code: 50, msg: '用户不存在', data: null });
            return 
        }

        if(info.password !== password) {
            res.send({ code: 50, msg: '用户不存在', data: null });
            return 
        }

        console.log('login-user:', info)

        const token = jwt.encrypt({ user: {
            userName: info.user_name,
            userId: info.user_id
        }}, 'token', '1h');

        res.send({ code: 0, msg: '登录成功', data: token });
    // })
}

module.exports = {
    login
}