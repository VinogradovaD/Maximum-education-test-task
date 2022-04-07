<template>
  <input 
    type="text"
    class="input-text"
    v-model="modelValue"
  />
</template>

<script>
  export default {
    name: 'VInputText'
  }
</script>

<style lang="sass" scoped>
  .input-text
    border: 1px solid lightgrey
    border-radius: 2px
    height: 30px
    width: 220px
    padding: 0 3px
  
  .input-text:focus
    outline: none
</style>