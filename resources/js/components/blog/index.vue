<template>
  <div>
    index
    <router-view></router-view>
    <router-link to="/public/blog">blog</router-link>
    <p></p>
    <router-link to="/public/tags">tag</router-link>



  </div>
</template>

<script>
export default {
  name: "index",


}
</script>

