<template>

</template>

<script>
export default {
  name: "person",

  data(){
    return{
      preson : null
    }
  },

  mounted() {
    this.getPerson()
  },

  methods:{
    getPerson(){
      axios.get('/main')
          .then(data =>{
            console.log(data);
          })
    }
  },

}
</script>

<style scoped>

</style>