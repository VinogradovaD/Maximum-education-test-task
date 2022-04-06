<template>
  <button type="submit">
    <slot>Отправить</slot>
  </button>
</template>

<script>
  export default {
    name: 'v-button'
  }
</script>

<style lang="sass">
  button
    border: none
    background-color: lightgrey
    color: white
    width: 110px
    height: 35px
    text-transform: uppercase
    border-radius: 2px
    margin: 10px 0
    
  .active-button
    background-color: #ff7f50
    cursor: pointer
</style>