<template>

  <nav class="navbar navbar-dark bg-dark">

    <div class="d-flex flex-row m-lg-1 text-white ">
      <div class=" m-lg-1">
        Navbar:
      </div>
      <div class=" m-lg-1">
        <router-link :to="{name:'person.index'}">People</router-link>
      </div>

      <div class=" m-lg-1">
        <router-link :to="{name:'person.create'}">Create</router-link>
      </div>

    </div>
  </nav>

  <div class="mt-3">

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