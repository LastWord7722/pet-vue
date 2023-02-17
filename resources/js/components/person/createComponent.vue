<template>
  <form >
    <div class="w-25 m-lg-5">
        <div class="mb-3 ">
          <label class="form-label">name</label>
          <input type="text" class="form-control" v-model="name" id="name">
        </div>

        <div class="mb-3">
          <label class="form-label">age</label>
          <input type="number" v-model="age" class="form-control" id="age">
        </div>

        <button @click.prevent="addPerson" class="btn btn-primary">Добавить</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "create",

  data(){
    return{
      name:null,
      age:null,
    }
  },

  methods:{
    addPerson(){
      console.log(this.name, this.age);
      axios.post('/public/api/person/store',{name: this.name, age: this.age})
          .then( res => {
            this.name = null
            this.age = null
            console.log(res)
          })
    },
  },

}
</script>

<style scoped>

</style>