
export default {
  loginByUsername: config => {
    // const { username } = JSON.parse(config.body)
    return {
      code: 20000,
      message: 'successful',
      data: {
        token: 'Token-dfesf-xgsdfe-fesfesf-2324d'
      }
    }
  },
  getUserInfo: config => {
    return {
      code: 20000,
      message: 'successful',
      data: {
        roles: ['admin']
      }
    }
  },
  logout: () => 'success'
}
