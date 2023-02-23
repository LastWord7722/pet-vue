<template>

        <tr :class="this.$parent.isEdit(person.id) ? 'd-none' : '' ">
          <th scope="row">{{ person.id}}</th>
          <td>{{ person.name}}</td>
          <td>{{ person.age}}</td>
          <td><a href="" @click.prevent="changeEditPersonId(person.id, person.name, person.age )" class="btn btn-success"> Edit</a></td> <!--вызываем метод для привзяывания id-->
          <td><a href="" @click.prevent="deletePerson(person.id)" class="btn btn-danger"> Delete</a></td>
        </tr>

</template>

<script>

export default {
  name: "show",

  props: ['person'],

  methods : {

    changeEditPersonId(id, name, age){   // приравнение переменой текущему объекту
      let idCheck = this.$parent.editPersonId = id
      if (idCheck) {
        let editName = `edit_${id}`
        let fullEdit = this.$parent.$refs[editName][0]
        fullEdit.name = name
        fullEdit.age = age
      }
    },

      deletePerson(id){
        const destroy = confirm('Удалить запись под номером: '+ id)
        if(destroy){
          axios.delete(`/public/api/person/delete/${id}`)
              .then( res => {
                this.$parent.getPersons()
              })
          this.editPersonId =  null
        }
      },
  },

}
</script>
