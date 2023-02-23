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
        <show-component :person="person" :ref="`show_${person.id}`"></show-component>
        <edit-component :person="person" :ref="`edit_${person.id}`"></edit-component>
      </template>
    </tbody>
  </table>
</template>

<script>
import editComponent from "./editComponent.vue";
import showComponent from "./showComponent.vue";
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
    editComponent,
    showComponent
  },

  mounted () {
    this.getPersons()
  },

  methods : {

    changeEditPersonId(id, name, age){   // приравнение переменой текущему объекту
      this.editPersonId = id
      if (this.editPersonId) {
        let editName = `edit_${id}`
        let fullEdit = this.$refs[editName][0]
        fullEdit.name = name
        fullEdit.age = age
      }
    },

    getPersons() {
      axios.get('/public/api/person/index')
          .then(res => {
            this.person = res.data
          })
    },


    isEdit(id){ // проверка
      return this.editPersonId === id
    },
  },
}
</script>
