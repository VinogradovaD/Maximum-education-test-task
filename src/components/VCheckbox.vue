<template>
  <div> 
    <label>
      <input type="checkbox"
        value="Online"
        @change="changeOption">
      <slot>Онлайн</slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: "v-checkbox",
    props: {
      modelValue: {
        type: String
      }
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>

<style lang="sass" scoped>
  input[type="checkbox"]
    width: 20px
    height: 20px
    vertical-align: middle
    margin-right: 3px
  label
    font-size: 13px
    opacity: 90%
</style>