<template>
  <div>
    <router-link :to="{name:'person.index'}">people</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>