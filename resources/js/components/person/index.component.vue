<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
    </thead>
    <tbody class="table-group-divider">
      <template v-for="persons in persons">
        <tr :class="isEdit(persons.id) ? 'd-none' : '' ">
          <th scope="row">{{ persons.id}}</th>
          <td>{{ persons.name}}</td>
          <td>{{ persons.age}}</td>
          <td><a href="" @click.prevent="changeEditPersonId(persons.id, persons.name, persons.age )" class="btn btn-success"> Edit</a></td> <!--вызываем метод для привзяывания id-->
          <td><a href="" @click.prevent="deletePerson(persons.id)" class="btn btn-danger"> Delete</a></td>
        </tr>
        <tr :class="isEdit(persons.id) ? '' :'d-none' "> <!--Проверка текущего id -->
          <th scope="row"> {{ persons.id}}</th>
          <td><input type="text" v-model="name" class="form-control"></td>
          <td><input type="number" v-model="age" class="form-control"></td>
          <td><a href="" @click.prevent="updatePerson(persons.id)" class="btn btn-success"> Update </a>
            <a href="" @click.prevent="changeEditPersonId(null)" class="btn btn-danger" style="margin-left: 10px"> X </a></td>
          <td></td>
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
      editPersonId : null, /*переменная для отслежования id*/
      name : '',
      age : null,
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

    changeEditPersonId(id, name, age){   // приравнение переменой текущему объекту
      this.editPersonId = id
      this.name = name
      this.age = age
    },

    updatePerson(id){
      axios.patch(`/public/api/person/update/${id}`,{name: this.name, age: this.age})
          .then( res => {
            this.getPersons()
          })
      this.editPersonId =  null
      },

      deletePerson(id){
        const destroy = confirm('Удалить запись под номером: '+ id)
        if(destroy){
          axios.delete(`/public/api/person/delete/${id}`)
              .then( res => {
                this.getPersons()
              })
          this.editPersonId =  null
        }
      },


    isEdit(id){ // проверка
      return this.editPersonId === id
    },

  },

  components: {

  }

}
</script>
