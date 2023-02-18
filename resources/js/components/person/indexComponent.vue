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
      <template v-for="person in person">
        <tr :class="isEdit(person.id) ? 'd-none' : '' ">
          <th scope="row">{{ person.id}}</th>
          <td>{{ person.name}}</td>
          <td>{{ person.age}}</td>
          <td><a href="" @click.prevent="changeEditPersonId(person.id, person.name, person.age )" class="btn btn-success"> Edit</a></td> <!--вызываем метод для привзяывания id-->
          <td><a href="" @click.prevent="deletePerson(person.id)" class="btn btn-danger"> Delete</a></td>
        </tr>
        <edit-component :person="person" :ref="`edit_${person.id}`"></edit-component>
      </template>
    </tbody>
  </table>
</template>

<script>
import editComponent from "./editComponent.vue";
export default {
  name: "index",

  data(){
    return{
      person : [],
      editPersonId : null, /*переменная для отслежования id*/
      name : '',
      age : null,
    }
  },

  components: {
    editComponent
  },
  mounted () {
    this.getPersons()
  },

  methods : {
    getPersons() {
      axios.get('/public/api/person/index')
          .then(res => {
            this.person = res.data
          })
    },

    changeEditPersonId(id, name, age){   // приравнение переменой текущему объекту
      this.editPersonId = id
      if (this.editPersonId) {
        let editName = `edit_${id}`
        let fullEdit = this.$refs[editName][0]
        fullEdit.name = name
        fullEdit.age = age
      }
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



}
</script>
