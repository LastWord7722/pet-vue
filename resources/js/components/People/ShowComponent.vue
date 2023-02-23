<template>

    <table class="table mt-3">
      <thead>
      <tr>
        <th scope="col">#id</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">###</th>
        <th scope="col">Delete</th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
      <template v-for="people in people">
        <tr>
          <th>{{ people.id }}</th>
          <th>{{ people.name }}</th>
          <th>{{ people.age }}</th>
          <th>###</th>
          <th>
          <button @click.prevent="deletePeople(people.id)" class="m-lg-3 col-3 btn btn-danger">Удалить</button>
          </th>
        </tr>
      </template>
      </tbody>
    </table>

</template>

<script>
export default {
  name: "ShowComponent",

  data(){
    return{
      people: [],
    }
  },

  mounted() {
    this.getPeople()
  },

  methods:{
    getPeople(){
      axios.get('/public/api/person/index')
      .then(res => {
          this.people = res.data // объект люди равнеться тому что пришло из БД
      })
    },

    deletePeople(id) {
      let destroy = confirm('Вы точно хотите удалить пользователя #' + id)
      if (destroy) {
        axios.delete(`/public/api/person/delete/${id}`)
              .then(res => {
               this.getPeople() // объект люди равнеться тому что пришло из БД
          })
      }
    },
  }

}
</script>

