<template>
  <div>
    <input type="checkbox">
    <label>
      <slot> Онлайн</slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: "v-checkbox"
  }
</script>

<style lang="sass" scoped>
  input[type="checkbox"]
    width: 20px
    height: 20px
    vertical-align: middle
  label
    font-size: 13px
    opacity: 90%
</style>