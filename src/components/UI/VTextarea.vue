<template>
  <textarea 
    v-model="modelValue"
    wrap="soft" 
    rows="10" 
    required
  />
</template>

<script>
  export default {
    name: "v-textarea"
  }
</script>

<style lang="sass">
  textarea
    border: 1px solid lightgrey
    border-radius: 2px 
    resize: none
    width: 100%
    padding: 5px
    margin: 10px 0
  textarea:focus
    outline: none
</style>