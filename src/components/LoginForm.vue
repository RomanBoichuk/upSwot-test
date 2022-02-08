<template lang="pug">
  .autorization
    form(class="autorization--login" @submit.prevent="loginEnter")
      p(class="autorization--login-name") Name
      input(class="autorization--login-input" type="text" placeholder="" v-model="username")
      p(class="autorization--login-name") Password
      input(class="autorization--login-input" type="text" placeholder="" v-model="password")
      button(class="button") LOGIN
    p(class="autorization--login-text") Forgot Password
    button(class="button btn") Register now
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      password: '',
      user:
        {
          username: 'Admin',
          password: '12345'
        }
    }
  },
  methods: {
    loginEnter () {
      if (this.user.username === this.username && this.user.password === this.password) {
        console.log(2222)
        const data = {
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('login', data)
        this.$router.push('/todopage')
      } else {
        console.log(333)
      }
    }
  }
}
</script>

<style scoped lang="sass">
.autorization
  position: absolute
  width: 481px
  height: 464px
  background: #FFFFFF
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1)
  left: 1067px
  top: 424px
.autorization--login
  padding-left: 30px
  padding-right: 30px
  margin-bottom: 20px
.autorization--login-input
  width: 421px
  height: 53px
  background: #FFFFFF
  border: 1px solid #9A9A9A
  font-size: 18px
  line-height: 21px
  padding: 30px 0
.autorization--login-name
  font-size: 18px
  line-height: 21px
  color: #333333
  margin: 40px 0 7px 0
.autorization--login-text
  font-size: 20px
  line-height: 23px
  color: #056DAE
  text-align: center
.button
  font-size: 25px
  line-height: 29px
  width: 100%
  padding: 12px 170px
  background: #0076C0
  color: #FFFFFF
  border: 1px solid teal
  margin-top: 40px
.btn
  font-size: 25px
  line-height: 29px
  background: #F6F6F6
  color: #333333
  padding: 17px 160px
  border: none
</style>
