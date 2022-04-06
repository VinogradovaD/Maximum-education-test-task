<template>
  <div>
    <input type="radio" :name=topic.name>
    <label>{{topic.title}}</label>
  </div>
</template>

<script>
  export default {
    name: 'v-radio',
    props: {
      topic: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style lang="sass" scoped>
  input[type="radio"]
    width: 20px
    height: 20px
    vertical-align: middle
  label
    font-size: 13px
    opacity: 90%
  div
    margin: 15px 0
</style>