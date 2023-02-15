var DB = require('../utils/mysql');
var { authentication } = require('../utils/token')
var { getUserList } = require('../data/user')

const getInfo = (req, res) => {

    // DB.query('SELECT * FROM sys_user WHERE user_name=' + "'" + tokenInfo?.gadID + "'", (result) => {
        const info = result.shirt();
        console.log('token--', tokenInfo);
        res.send({ code: 0, msg: '登陆验证！', data: null })
    //})
}

const getList = (req, res) => {
    
    const result = getUserList();

    if (!result) {
        res.send({ code: 50, msg: '暂无数据', data: null });
        return 
    }

    res.send({ code: 0, msg: '查询成功', data: result });
}

module.exports = {
    getList
}