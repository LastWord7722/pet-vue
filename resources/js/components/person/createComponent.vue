<template>
  <form >
    <div class="mb-3">
      <label class="form-label">name</label>
      <input type="text" class="form-control" id="name">
    </div>

    <div class="mb-3">
      <label class="form-label">age</label>
      <input type="number" class="form-control" id="age">
    </div>

    <button type="submit" class="btn btn-primary">Добавить</button>
  </form>
</template>

<script>
export default {
  name: "create"
}
</script>

<style scoped>

</style>