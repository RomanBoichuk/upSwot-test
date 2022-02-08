<template lang="pug">
  .todolists
    p(class="title") Thank you
      span(class="title--username") {{USER.username}}!
    .div(class="add-task")
      input(class="task-input" type="text" placeholder="Add New Task" v-model="taskInput")
      button(class="btn-submit" @click="addtask")
        <font-awesome-icon class="btn-icon"  icon="plus"/>
    .task
      ul( class="task--list")
        li(class="task--list-item" v-for="(task, index) in tasks" :key='task.id')
          label(class="task--list-item-label" )
            <input type="checkbox">
            span(
              class="list-input"
              ref='element'
              :contenteditable = 'editTable'
              ) {{task.name}}
          div(class="task--list-item-icon")
            <font-awesome-icon class="btn-list" icon="pencil-alt" @click='changeItem(task.id, index)'/>
            |
            <font-awesome-icon class="btn-list" icon="trash-alt" @click='removeItem(task.id)'/>
</template>

<script>
export default {
  name: 'ToDoLists',
  data () {
    return {
      taskInput: '',
      editTable: false,
      completed: true
    }
  },
  computed: {
    tasks () {
      return this.$store.getters.tasks
    },
    USER () {
      return this.$store.getters.user
    }
  },
  methods: {
    addtask () {
      const data = {
        id: Math.floor(Math.random() * 1000),
        name: this.taskInput
      }
      this.$store.dispatch('addNEWTASK', data)
      this.taskInput = ''
    },
    changeItem (id, index) {
      if (this.editTable === false) {
        this.editTable = true
      } else {
        const data = {
          name: this.$refs.element[index].innerText,
          id: id
        }
        this.editTable = false
        this.$store.dispatch('updateTASK', data)
      }
    },
    removeItem (id) {
      this.$store.dispatch('removeTASK', id)
    }
  }
}
</script>

<style scoped lang="sass">
ul
  list-style: none
  padding: 0
.todolists
  position: absolute
  width: 1191px
  min-height: 660px
  background: #FFFFFF
  left: 378px
  top: 250px
  padding: 0 10px 10px 10px
.title
  font-weight: bold
  font-size: 60px
  line-height: 94px
  text-align: center
  margin-top: 32px
  margin-bottom: 30px
  &--username
    margin-left: 15px
    color: #E40520
.add-task
  height: 40px
  font-size: 14px
  display: flex
  margin-bottom: 30px
.task-input
  border-right: none
  width: 100%
  padding: 0 4px
  outline: none
  border: none
  border-bottom: 1px solid #333333
  background-color: transparent
  margin-right: 12px
  color: #333333
  box-shadow: none
  border-radius: 0
  font-size: 22px
  line-height: 28px
  &::placeholder
    color: #333333
    font-size: 20px
    line-height: 26px
.btn-submit
  width: 50px
  height: 50px
  flex-shrink: 0
  border: none
  background: #ee9ca7
  color: #333333
  border-radius: 50%
  cursor: pointer
  box-shadow: 0 0 12px 0 rgba(238, 56, 167, .4)
.btn-icon
  width: 2em
  height: 2em
  color: #fff
.task
  padding: 25px 40px
.task--list
  &-item
    background-color: #191933
    border-radius: 4px
    margin-bottom: 12px
    display: flex
    align-items: center
    padding: 15px
    justify-content: space-between
    input
        width: 25px
        height: 25px
        border-radius: 50%
        border: 1px solid #fff
        transition: .2s
        margin-right: 20px
        flex-shrink: 0
        margin-top: 4px
        appearance: none
        &:hover
          border-color: #ee9ca7
          box-shadow: 0 0 0 3px rgba(238, 156, 167, 0.2)
        &:checked
          border: 1px solid #ee9ca7
          background-color: #ee9ca7
          + span
            color: rgba(255, 255, 255, 0.5)
            text-decoration: line-through rgba(255, 255, 255, 0.8)
    &-icon
      display: flex
      margin-left: 15px
    &-label
      display: flex
      align-items: flex-start
      color: #fff
      margin-right: 8px
      font-size: 28px
      line-height: 38px
      position: relative
      transition: .2s
      cursor: pointer
.btn-list
  width: 2em
  height: 2em
  color: #fff
  margin-left: 30px
  cursor: pointer
  transition: .2s
  &:hover
    color: red
</style>
