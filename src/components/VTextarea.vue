<template>
  <textarea 
    class="desk-text"
    wrap="soft" 
    rows="10" 
    v-model="modelValue"
  />
</template>

<script>
  export default {
    name: "VTextarea"
  }
</script>

<style lang="sass" scoped>
  .desk-text
    border: 1px solid lightgrey
    border-radius: 2px 
    resize: none
    width: 100%
    padding: 5px
    margin: 10px 0

  .desk-text:focus
    outline: none
</style>