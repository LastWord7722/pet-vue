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
      <template v-for="persons in persons">
        <tr >
          <th scope="row">{{ persons.id}}</th>
          <td>{{ persons.name}}</td>
          <td>{{ persons.age}}</td>
          <td><a href="" @click.prevent="changeEditPersonId(persons.id)" class="btn btn-success"> Edit</a></td>
        </tr>
        <tr :class="isEdit(persons.id) ? '' :'d-none' ">
          <th scope="row"> ОБНОВЛЕНИЕ !!!</th>
          <td><input type="text" class="form-control"></td>
          <td><input type="number" class="form-control"></td>
          <td><a href="" @click.prevent="changeEditPersonId(null)" class="btn btn-success"> Update </a></td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>

export default {
  name: "index",

  data(){
    return{
      persons : [],
      editPersonId : null,
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

    changeEditPersonId(id){
      this.editPersonId = id
    },

    isEdit(id){
      return this.editPersonId === id
    }

  },

  components: {

  }

}
</script>

<style scoped>

</style>