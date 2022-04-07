<template>
  <div 
    v-for="problem of problems" 
    :key="problem.id"
  >
    <input 
      type="radio" 
      v-model="modelValue"
      :id="problem.id" 
      :name="problem.name"
      :value="problem.title"
      @change="changeOption">
    <label 
      :for="problem.id">
      {{problem.title}}
    </label>
  </div>
</template>

<script>
  export default {
    name: 'v-radio',
    props: {
      problems: Array
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }

</script>

<style lang="sass" scoped>
  input[type="radio"]
    width: 20px
    height: 20px
    vertical-align: middle
    margin-right: 3px
  label
    font-size: 13px
    opacity: 90%
  div
    margin: 15px 0
</style>