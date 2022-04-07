<template>
  <textarea 
    class="text"
    wrap="soft" 
    rows="10" 
    v-model="modelValue"
    @input="updateValue"
  />
</template>

<script>
  export default {
    name: "v-textarea",
    props: {
      modelValue: String
    },
    methods: {
      updateValue(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .text
    border: 1px solid lightgrey
    border-radius: 2px 
    resize: none
    width: 100%
    padding: 5px
    margin: 10px 0

  .text:focus
    outline: none
</style>