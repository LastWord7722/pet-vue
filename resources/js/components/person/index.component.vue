<template>
  <div>
    <create-component></create-component>
  </div>
</template>

<script>
import createComponent from "./createComponent.vue";
export default {
  name: "person",

  data(){
    return{
      person : null
    }
  },

/*  mounted () {
    this.getPersons()
  },

  methods : {
    getPersons() {
      axios.get('/public/main')
          .then(res => {
            this.person = res.data
          })
    },
  },*/

  components: {
    createComponent
  }

}
</script>

<style scoped>

</style>