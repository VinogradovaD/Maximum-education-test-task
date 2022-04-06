<template>
  <select v-model="modelValue" @change="changeOption">
    <option hidden>Выберите город</option>
    <option 
      v-for="city of cities"
    > 
      {{city.title}}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'v-select',  
    props: {
      modelValue: {
        type: String
      },
      cities: {
        type: Array
      }
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>

<style lang="sass">
  select
    border: 1px solid lightgrey
    border-radius: 2px
    width: 200px
    height: 25px
    margin: 15px 0
    outline: none
</style>