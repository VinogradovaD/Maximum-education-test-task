<template>
  <select 
    class="select"
    v-model="modelValue"
    @change="changeValue"
  >
    <option hidden>
      <slot>Выберите город</slot>
    </option>
    <option 
      v-for="city in cities"
      :key="city.id"
    > 
      {{city.title}}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'v-select',  
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

<style lang="sass" scoped>
  .select
    border: 1px solid lightgrey
    border-radius: 2px
    width: 230px
    height: 25px
    margin: 15px 0
    outline: none
</style>