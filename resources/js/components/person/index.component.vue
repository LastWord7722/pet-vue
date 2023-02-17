<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">age</th>
    </tr>
    </thead>
    <tbody class="table-group-divider">
    <tr v-for="persons in persons">
      <th scope="row">{{ persons.id}}</th>
      <td>{{ persons.name}}</td>
      <td>{{ persons.age}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: "index",

  data(){
    return{
      persons : []
    }
  },

  mounted () {
    this.getPersons()
  },

  methods : {
    getPersons() {
      axios.get('/public/api/person/index')
          .then(res => {
            this.persons = res.data
          })
    },
  },

  components: {

  }

}
</script>

<style scoped>

</style>