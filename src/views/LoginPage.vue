<template lang="pug">
  <div class="loginpage">
    HeaderLogin
    BackgroundLogin
    DescriptionLogin
    FooterLogin
    LoginForm
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLogin from '@/components/HeaderLogin.vue'
import BackgroundLogin from '@/components/BackgroundLogin.vue'
import DescriptionLogin from '@/components/DescriptionLogin.vue'
import FooterLogin from '@/components/FooterLogin.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    HeaderLogin,
    BackgroundLogin,
    DescriptionLogin,
    FooterLogin,
    LoginForm
  }
}
</script>

<style scoped lang="sass">
.loginpage
  position: relative
</style>
