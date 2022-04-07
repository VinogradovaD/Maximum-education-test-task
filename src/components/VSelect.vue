<template>
  <select>
    <option hidden>
      <slot>Выберите город</slot>
    </option>
    <option 
      v-for="city in cities"
      :key="city.id"
      @change="changeValue"
    > 
      {{city.title}}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'VSelect',  
    props: {
      modelValue: String,
      cities: Array
    },
    methods: {
      changeValue(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>

<style lang="sass">
  select
    border: 1px solid lightgrey
    border-radius: 2px
    width: 230px
    height: 25px
    margin: 15px 0
    outline: none
</style>