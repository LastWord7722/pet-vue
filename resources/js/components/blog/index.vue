<template>
  <div>
    index

    <router-link to="/spa/tags">tag</router-link>
    <p></p>
    <router-link to="/spa/blog">blog</router-link>

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