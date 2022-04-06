<template>
  <select name="city">
    <option hidden>Выберите город</option>
    <v-option 
      v-for="city of cities" 
      v-bind:city="city"
    />
  </select>
</template>

<script>
  export default {
    name: 'v-select',  
    props: ['cities']
  }
</script>

<style lang="sass">
  select
    border: 1px solid lightgrey
    width: 200px
    height: 25px
    margin: 15px 0
</style>