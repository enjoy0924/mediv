import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'

Vue.use(VueI18n)

const i18n = new VueI18n({
  // locale: Cookies.get('language') || 'en', // set locale
  locale: 'zh',
  messages: {
    en: require('./en_US'),
    zh: require('./zh_CN')
  } // set locale messages
})

export default i18n
