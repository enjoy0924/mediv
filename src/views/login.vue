<template>
  <div>
    <mt-field :label="$t('profile.username')" placeholder="请输入用户名" v-model="credential.username"></mt-field>
    <mt-field :label="$t('profile.password')" placeholder="请输入密码" type="password" v-model="credential.password"></mt-field>
    <mt-field label="验证码" v-model="credential.captcha">
      <img :src="captcha" height="45px" width="100px">
    </mt-field>

    <mt-button @click.native="handleLogin">{{$t('label.submit')}}</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credential: {
        username: '',
        password: '',
        captcha: ''
      },
      loading: false
    }
  },
  computed: {
    captcha () {
      return 'http://n.sinaimg.cn/translate/20160811/lN_x-fxutsmv0296774.jpg'
    }
  },
  methods: {
    handleLogin () {
      this.loading = true
      this.$store.dispatch('LoginByUsername', this.credential).then(() => {
        debugger
        this.loading = false
        this.$router.push({ path: '/' })
      }).catch(() => {
        this.loading = false
      })
    }

  }
}
</script>
