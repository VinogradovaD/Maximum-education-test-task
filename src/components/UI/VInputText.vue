<template>
  <input type="text">
</template>

<script>
  export default {
    name: 'v-input-text'
  }
</script>

<style lang="sass" scoped>
  input
    border: 1px solid lightgrey
    border-radius: 2px
    height: 30px
    width: 180px
    padding: 0 3px
    margin: 10px 0
  
  input:focus
    outline: none
</style>