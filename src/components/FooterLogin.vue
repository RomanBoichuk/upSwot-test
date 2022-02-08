<template lang="pug">
  .footerlogin
    .wrapper
      .footerlogin--inner
        .footerlogin--top
          img(:src=" require('../assets/LogoUpSwotFooter.png')" alt="upSWOT")
          .menu
            ul(class="menu--lists")
              li(class="menu--lists-item" v-for='item in footerBarMenu' :key='item')
                a(class="menu--lists-link" href='#') {{item}}
        .footerlogin--under
          p Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
</template>

<script>
export default {
  name: 'FooterLogin',
  data () {
    return {
      footerBarMenu: [
        'Terms & Conditions',
        'Privacy',
        'Notice at Collection',
        'CA Privacy Hub',
        'Contact Us',
        'Sitemap'
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.footerlogin
  height: 175px
  background: #333333
  color: #FFFFFF
  &--inner
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: 175px
    padding-top: 30px
    padding-bottom: 30px
  &--top
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    &::after
      content: ''
      position: absolute
      border: 1px solid #FFFFFF
      width: 100%
      height: 0px
      bottom: -100%
  &--under p
    font-size: 12px
    line-height: 19px
.menu--lists
  display: flex
  &-item
    margin-left: 20px
  &-link
    color: #FFFFFF
    text-decoration: none
    font-size: 16px
    line-height: 25px
</style>
