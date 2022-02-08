<template lang="pug">
  .backgroundsite
    .wrapper
      .backgroundsite--title
        h1(class="title") Welcome to <br> Business Analytics Online
</template>

<script>
export default {
  name: 'BackgroundLogin'
}
// url('../assets/images/CarsImg.jpg')
</script>

<style scoped lang="sass">
.backgroundsite
  height: 457px
  background-image: url('../assets/login-background.png')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  padding-top: 215px
  padding-bottom: 70px
  &--title
    display: flex
    align-items: center
.title
  font-style: normal
  font-weight: normal
  font-size: 55px
  line-height: 86px
  color: #FFFFFF
</style>
