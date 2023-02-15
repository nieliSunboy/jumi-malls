
const list = [{
    user_id: '1',
    user_name: 'admin',
    password: '123456',
    nickName: '管理员',
    wvid: '1111',
    picture: '',
    describe: '',
},
{
    user_id: '2',
    user_name: 'user01',
    password: '123456',
    nickName: '普通用户',
    wvid: '1111',
    picture: '',
    describe: '',
}];

const getInfoDestail = (info) => {
    return list.filter(v => info?.username === v.user_name);
}

const getUserList = () => {
    return list.concat([1,2,3,4,5].map(v => {
        return {
            user_id: v + 2,
            user_name: 'user' + v+5,
            password: '123456',
            nickName: '普通用户'+ v+5,
            wvid: '1111',
            picture: '',
            describe: '', 
        }
    }))
}

module.exports = {
    getInfoDestail,
    getUserList
}