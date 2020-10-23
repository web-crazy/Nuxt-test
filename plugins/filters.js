import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFilter', (value) => {
  if (!value) {
    return ''
  }
  return moment(value).format('DD MMM YYYY')
})

Vue.filter('timeFilter', (value) => {
  if (!value) {
    return ''
  }
  return moment(value).format('hh:mm')
})
