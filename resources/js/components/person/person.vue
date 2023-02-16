<template>

</template>

<script>
export default {
  name: "person",

  data(){
    return{
      person : null
    }
  },

  mounted () {
    this.getPersons()
  },

  methods : {
    getPersons() {
      axios.get('/public/main')
          .then(res => {
            this.person = res.data
          })
    },
  }

}
</script>

<style scoped>

</style>