<template lang="pug">
  <div id="app">
    .container
      <router-view/>
  </div>
</template>

<style lang="sass">

*
  padding: 0
  margin: 0
  box-sizing: border-box
html,body
  height: 100vh
body
  position: fixed
  bottom: 0
  left:  0
  right: 0
  font-family: 'Roboto', sans-serif
ul
  list-style: none
.container
  margin-left: auto
  margin-right: auto
  padding-left: 10px
  padding-right: 10px
  max-width: 1940px
.wrapper
  margin-left: auto
  margin-right: auto
  max-width: 1180px
  padding-left: 10px
  padding-right: 10px
</style>
