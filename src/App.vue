<template>
  <Form v-bind:cities="cities"/>
</template>

<script>
import Form from '@/components/Form.vue'
import '@/styles/styles.sass'

export default {
  name: 'App',
  data() {
    return {
      cities: [
      {id:1,title:"Москва"},
      {id:2,title:"Санкт-Петербург"},
      {id:3,title:"Екатеринбург"},
      {id:4,title:"Челябинск"}
      ]
    }
  }, 
  components: {
    Form
  }
}
</script>
