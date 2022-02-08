<template lang="pug">
  .header
    .header--top
    .header--logo
      .header--logo-image
        img(:src=" require('../assets/logoUpSwotHeader.png')" alt="upSWOT")
</template>

<script>
export default {
  name: 'HeaderLogin'
}
</script>

<style scoped lang="sass">
.header
  &--top
    height: 53px
    background: #333333
  &--logo
    height: 96px
    background: linear-gradient(180deg, #00AFED 0%, #00569A 100%)
    display: flex
    align-items: center
    &-image
      margin-left: 330px
</style>
