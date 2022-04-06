<template>
  <option>{{city.title}}</option>
</template>

<script>
  export default {
    name: "v-option",
    props: {
      city: {
        type: Object,
        required: false
      }
    }
  }
</script>