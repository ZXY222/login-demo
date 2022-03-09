const router = require('koa-router')();
const { getToken } = require('../utils/token')

router.prefix('/api')

router.post('/login', async (ctx) => {
    const body = ctx.request.body
    console.log(body);
    ctx.body = {
        message: '登录成功',
        token: getToken({user:body.user, password: body.password})
    }
    // if (body.user == '123456' && body.password == '123456') {
    //
    // } else {
    //     ctx.body = {
    //         message: '登录失败'
    //     }
    // }
})

router.post('/register', async (ctx) => {
    const body = ctx.request.body
    ctx.body = {
        message: 'sssssssss'
    }
})

module.exports = router