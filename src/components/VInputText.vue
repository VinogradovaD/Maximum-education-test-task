<template>
  <input 
    type="text"
    class="input-text"
    v-model="modelValue"
    @input="updateValue"
    @click="$emit('delete-selected-topic')"
  />
</template>

<script>
export default {
  name: 'v-input-text',
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
.input-text
  border: 1px solid lightgrey
  border-radius: 2px
  height: 30px
  width: 220px
  padding: 0 3px
  
.input-text:focus
  outline: none
</style>