<template lang="pug">
  <div class="todopage">
    .todopage--top
      img(class="todopage--top-image" :src=" require('../assets/logoUpSwotHeader.png')" alt="upSWOT")
    .todopage--footer
    ToDoLists
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoLists from '@/components/ToDoLists.vue'

export default {
  name: 'LoginPage',
  components: {
    ToDoLists
  }
}
</script>

<style scoped lang="sass">
.todopage
  position: relative
  &--top
    height: 797px
    background: linear-gradient(180deg, #00AFED 0%, #00569A 100%)
    text-align: center
    &-image
      width: 186px
      margin-top: 65px
  &--footer
    height: 283px
    background: #FAF7F7
</style>
