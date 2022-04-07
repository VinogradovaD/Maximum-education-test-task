<template>
  <div 
    v-for="topic in topics" 
    :key="topic.id"
  >
    <input 
      type="radio" 
      class="input-radio"
      :id="topic.id" 
      :name="topic.name"
      :value="topic.title"
      v-model="modelValue"
      @change="changeValue"
      @click="$emit('delete-text')"
    >
    <label 
      class="label-radio"
      :for="topic.id">
      {{topic.title}}
    </label>
  </div>
</template>

<script>
  export default {
    name: 'v-radio',
    props: {
      topics: Array,
      modelValue: String
    },
    methods: {
      changeValue(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }

</script>

<style lang="sass" scoped>
  div
    margin: 15px 0

  .input-radio
    width: 20px
    height: 20px
    vertical-align: middle
    margin-right: 3px

  .label-radio
    font-size: 13px
    opacity: 90%
</style>