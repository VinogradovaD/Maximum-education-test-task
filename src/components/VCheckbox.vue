<template>
  <div> 
    <input
      type="checkbox"
      id="checkbox"
      class="input-checkbox" 
      v-model="modelValue"
      @change="changeValue"
    />
    <label class="label-checkbox" for="checkbox">
      <slot>Онлайн</slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: "VCheckbox",
    props: {
      modelValue: Boolean
    },
    methods: {
      changeValue(event) {
        this.$emit('update:modelValue', event.target.checked);
      }
    }
  }
</script>

<style lang="sass" scoped>
  .input-checkbox
    width: 20px
    height: 20px
    vertical-align: middle
    margin-right: 3px

  .label-checkbox
    font-size: 13px
    opacity: 90%
</style>