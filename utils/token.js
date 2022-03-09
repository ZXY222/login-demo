const jwt = require('jsonwebtoken')
let SECRET = 'zxy-token'

/* 获取一个期限为4小时的token */
function getToken(users = {}) {
    return jwt.sign(users, SECRET, { expiresIn: '1h' });
}

/* 通过token获取JWT的payload部分 */
function getJWTPayload(token) {
    // 验证并解析JWT
    return jwt.verify(token.split(' ')[1], SECRET);
}

module.exports = {
    SECRET,
    getToken,
    getJWTPayload
}