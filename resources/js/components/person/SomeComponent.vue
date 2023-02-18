<template>
  <div>
      <div>Color: {{obj.color}}</div>
      <div>Number: {{ obj.number > 10 ? 'больше 10' : 'меньше'}} </div>
  </div>
</template>

<script>
export default {
  name: "SomeComponent",

  props: [
      'obj'
  ]
}
</script>

<style scoped>

</style>