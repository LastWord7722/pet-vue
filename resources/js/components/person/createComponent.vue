<template>
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
  <SomeComponent :obj="obj"></SomeComponent>

</template>

<script>
import SomeComponent from "./SomeComponent.vue";
export default {
  name: "create",
  components: {
    SomeComponent
  },


  data(){
    return{
      name:null,
      age:null,
      obj:{
        color:'cby',
        number:11,
      }
    }
  },


  methods:{
    addPerson(){
      axios.post('/public/api/person/store',{name: this.name, age: this.age})
          .then( res => {
            this.$parent.$refs.index.getPersons()
            this.name = null
            this.age = null
          })
    },
  },

}
</script>
