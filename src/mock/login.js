
export default {
  loginByUsername: config => {
    debugger
    // const { username } = JSON.parse(config.body)
    return {
      code: '20000',
      message: 'successful',
      data: {
        token: 'Token-dfesf-xgsdfe-fesfesf-2324d'
      }
    }
  },
  logout: () => 'success'
}
