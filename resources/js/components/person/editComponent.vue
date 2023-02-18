<template>

  <tr :class="this.$parent.isEdit(person.id) ? '' :'d-none' "> <!--Проверка текущего id -->
    <th scope="row"> {{ person.id }}</th>
    <td><input type="text" v-model="name" class="form-control"></td>
    <td><input type="number" v-model="age" class="form-control"></td>
    <td><a href="" @click.prevent="updatePerson(person.id)" class="btn btn-success"> Update </a>
      <a href="" @click.prevent="this.$parent.changeEditPersonId(null)" class="btn btn-danger" style="margin-left: 10px"> X </a></td>
    <td></td>
  </tr>

</template>

<script>

export default {
  name: "editComponent",

  props : [
    'person'
  ],

  data() {
    return {
      name: '',
      age: null,
    }
  },

  mounted() {

  },

  methods: {
    updatePerson(id) {
      axios.patch(`/public/api/person/update/${id}`, {name: this.name, age: this.age})
          .then(res => {
            this.$parent.getPersons()
          })
      this.$parent.editPersonId = null
    },

  },

  components: {}

}
</script>
