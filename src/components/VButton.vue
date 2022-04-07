<template>
  <button class="button" type="submit">
    <slot>Отправить</slot>
  </button>
</template>

<script>
  export default {
    name: 'v-button'
  }
</script>

<style lang="sass" scoped>
  .button
    border: none
    background-color: #ff7f50
    color: white
    width: 110px
    height: 35px
    text-transform: uppercase
    border-radius: 2px
    margin: 10px 0
    cursor: pointer

  .button:disabled
    background-color: lightgrey
    cursor: default
</style>