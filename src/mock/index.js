import loginAPI from './login'
const Mock = require('mockjs')

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/login/, 'post', loginAPI.loginByUsername)
// Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)
// Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

export default Mock
