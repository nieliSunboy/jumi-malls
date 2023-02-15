var mysql  = require("mysql2");

var clientDB = mysql.createPool({
    host: '192.168.18.139',
    user: 'root',
    password: 'fdauto',
    database: 'ai_dbs'
});

const query = (sql, callback) => {
    clientDB.query(sql, (error, results) => {
        if (error) {
            throw error
        } else {
            callback && callback(results);
        }
    })
}

//使用promise封装sql查询
const queryPromise = (sql) => {
    return new Promise((resolve, reject) => {
        clientDB.query(sql, (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
    })
  }

  module.exports = {
    query,
    queryPromise
  }