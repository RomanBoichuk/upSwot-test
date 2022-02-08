<template lang="pug">
  .description
    .wrapper
      .description--inner
        .div(
          v-html='toHTML'
          )
        .div
          ul(class='description--lists')
            li(v-for="item in BiznesAnalyticsPoints" :key="item.id" class='description--lists-item')
              p(
                class='description--inner-paragraf'
                ) <strong>{{item.point}}</strong>
              p {{item.pointDescription}}
</template>

<script>
var markdown = require('markdown').markdown
export default {
  name: 'HeaderLogin',
  data () {
    return {
      paragraf: `**Business Analytics** — a new, convenient tool for managing and 
                forecasting your business performance, which will help analyze 
                your own finances and cash flows, visualize your reporting, 
                business processes, KPI's`,
      BiznesAnalyticsPoints: [
        {
          id: 1,
          point: 'Interactive Reporting',
          pointDescription: `In just a few clicks, you can connect your data from 
                             1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce 
                             (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), 
                             Google Analytics and many more systems that reflect 
                             different aspects of business activities.`
        },
        {
          id: 2,
          point: 'Automated data updates',
          pointDescription: `The application automatically updates and structures
                             the data in just 60 seconds, saving you time and money.`
        },
        {
          id: 3,
          point: 'Data Security',
          pointDescription: `The Bank guarantees the safety of your personal data,
                             ensuring their integrity and confidentiality.`
        }
      ]
    }
  },
  computed: {
    toHTML (data) {
      return markdown.toHTML(this.paragraf)
    },
    toHTMLPoints (data) {
      return markdown.toHTML(data)
    }
  }
}
</script>

<style scoped lang="sass">
.description
  padding: 40px 0 40px 0
  &--inner
    max-width: 664px
    font-style: normal
    font-weight: 500
    font-size: 16px
    line-height: 25px
    color: #333333
    padding: 2px 18px 2px 0px
.description--lists
  margin-left: 40px
  &-item
    margin-bottom: 15px
    position: relative
    &::before
      content: ''
      position: absolute
      border: 6px solid #0076C0
      width: 9px
      height: 18px
      top: 10%
      transform: translateY(-50%) rotate(-135deg)
      left: -6.5%
      border-right: 0
      border-bottom: 0
  &-paragraf
    margin-bottom: 10px
.div
  margin-bottom: 15px
</style>
